param(
    [string]$Mode = 'app'
)

$ErrorActionPreference = 'SilentlyContinue'

$ROOT = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path

function Test-PortListening {
    param([int]$Port = 8080)
    $conn = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
    if ($conn) { return $true }
    $netstat = netstat -ano | Select-String ":$Port .*LISTENING"
    return ($null -ne $netstat)
}

# 1. Start offline server if not already running
if (-not (Test-PortListening 8080)) {
    $serveScript = Join-Path $ROOT 'scripts\serve.js'
    if (Test-Path $serveScript) {
        Start-Process -FilePath 'node' -ArgumentList "`"$serveScript`"" -WorkingDirectory $ROOT -WindowStyle Hidden
        $retries = 0
        while (-not (Test-PortListening 8080) -and $retries -lt 20) {
            Start-Sleep -Milliseconds 100
            $retries++
        }
    }
}

# 2. Determine target URL with automatic fallback to file:///
if (Test-PortListening 8080) {
    $targetUrl = 'http://localhost:8080/MDBrowse.html'
} else {
    $targetUrl = 'file:///' + ($ROOT -replace '\\', '/') + '/MDBrowse.html'
}

# 3. Locate browser executable
$browserCandidates = @(
    'C:\Program Files\Google\Chrome\Application\chrome.exe',
    'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
    (Join-Path $env:LOCALAPPDATA 'Google\Chrome\Application\chrome.exe'),
    'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
    'C:\Program Files\Microsoft\Edge\Application\msedge.exe'
)

$browserPath = $null
foreach ($b in $browserCandidates) {
    if (Test-Path $b) {
        $browserPath = $b
        break
    }
}

# 4. Launch browser
if ($browserPath) {
    if ($Mode -eq 'app') {
        Start-Process -FilePath $browserPath -ArgumentList "--app=$targetUrl"
    } else {
        Start-Process -FilePath $browserPath -ArgumentList "$targetUrl"
    }
} else {
    Start-Process $targetUrl
}
