Add-Type -AssemblyName PresentationCore, PresentationFramework, WindowsBase, System.Drawing

$root = "D:\01_APP\Markdown"
$assetsDir = Join-Path $root "assets"

$svgPathData = "M 40.07 22.00 L 51.00 21.57 L 59.00 23.53 L 68.00 28.65 L 72.51 33.00 L 75.53 37.00 L 79.27 45.00 L 81.17 56.00 L 81.25 106.00 L 90.00 110.63 L 96.00 114.64 L 102.20 120.00 L 108.00 126.75 L 109.28 126.00 L 141.71 47.00 L 148.50 35.00 L 155.00 28.63 L 163.00 24.76 L 168.00 23.61 L 176.00 23.29 L 189.00 23.07 L 190.78 24.00 L 191.39 26.00 L 191.42 173.00 L 191.00 174.31 L 189.00 175.44 L 159.00 175.48 L 157.32 174.00 L 157.00 92.21 L 155.86 93.00 L 126.17 167.00 L 123.57 171.00 L 119.00 174.34 L 112.00 175.99 L 106.00 175.47 L 101.00 173.51 L 98.00 171.12 L 94.54 165.00 L 93.28 160.00 L 89.34 151.00 L 86.38 146.00 L 81.00 139.82 L 79.34 151.00 L 76.37 159.00 L 73.18 164.00 L 69.00 168.44 L 64.00 172.29 L 60.00 174.37 L 54.00 176.40 L 48.00 177.25 L 38.00 176.42 L 30.00 173.30 L 21.69 167.00 L 16.49 160.00 L 14.52 156.00 L 12.69 150.00 L 12.12 141.00 L 12.52 135.00 L 13.70 130.00 L 15.67 125.00 L 19.59 119.00 L 27.00 111.55 L 38.00 105.62 L 47.92 103.00 L 47.96 89.00 L 47.00 87.74 L 38.00 87.48 L 31.00 85.41 L 24.00 81.45 L 19.00 76.58 L 14.49 69.00 L 12.63 63.00 L 11.96 55.00 L 12.49 49.00 L 13.78 44.00 L 16.58 38.00 L 22.23 31.00 L 26.00 27.70 L 31.00 24.75 L 40.07 22.00 Z M 45.00 26.99 L 36.00 28.55 L 31.00 30.97 L 27.00 34.00 L 20.64 42.00 L 17.63 51.00 L 17.62 60.00 L 19.62 67.00 L 21.70 71.00 L 26.37 76.00 L 31.00 79.37 L 36.00 81.39 L 44.00 82.49 L 52.00 81.50 L 53.23 82.00 L 53.43 83.00 L 53.24 108.00 L 40.00 110.64 L 32.00 114.88 L 27.16 119.00 L 22.72 124.00 L 18.79 132.00 L 17.74 136.00 L 17.46 141.00 L 17.69 147.00 L 18.63 151.00 L 21.71 158.00 L 26.60 164.00 L 34.00 169.14 L 42.00 171.48 L 52.00 171.30 L 58.00 169.29 L 63.00 166.35 L 69.30 160.00 L 73.39 152.00 L 75.30 143.00 L 75.49 130.00 L 76.00 129.29 L 80.00 131.76 L 83.70 135.00 L 91.44 144.00 L 95.27 151.00 L 99.65 163.00 L 102.00 167.40 L 105.00 169.45 L 108.00 170.41 L 114.00 170.34 L 117.00 169.28 L 120.43 166.00 L 122.39 162.00 L 148.50 97.00 L 158.63 73.00 L 161.00 68.67 L 162.10 70.00 L 162.31 76.00 L 162.30 169.00 L 163.00 170.02 L 186.00 169.50 L 186.03 29.00 L 185.00 28.54 L 172.00 28.66 L 165.00 29.64 L 158.31 33.00 L 151.69 40.00 L 147.72 47.00 L 144.74 54.00 L 111.50 135.00 L 110.00 137.87 L 109.00 138.15 L 101.18 127.00 L 96.00 121.75 L 91.00 117.76 L 84.00 113.66 L 77.00 110.55 L 75.78 109.00 L 75.44 52.00 L 74.29 47.00 L 72.12 42.00 L 67.70 36.00 L 63.00 31.71 L 60.00 29.96 L 54.00 27.77 L 45.00 26.99 Z M 45.68 40.00 L 51.00 40.61 L 56.00 43.51 L 59.51 48.00 L 61.00 54.00 L 60.22 60.00 L 58.00 63.74 L 54.00 67.43 L 48.00 69.47 L 44.00 69.36 L 40.00 68.34 L 37.00 66.48 L 34.56 64.00 L 32.86 61.00 L 31.51 56.00 L 31.63 52.00 L 32.53 49.00 L 35.98 44.00 L 41.00 40.78 L 45.68 40.00 Z M 46.74 124.00 L 52.00 123.15 L 53.45 124.00 L 53.37 147.00 L 52.27 151.00 L 50.00 154.39 L 47.00 156.45 L 43.00 157.04 L 38.00 155.52 L 34.48 152.00 L 32.54 148.00 L 31.74 141.00 L 32.74 136.00 L 35.48 131.00 L 40.00 126.81 L 46.74 124.00 Z M 44.00 45.60 L 40.00 47.78 L 37.67 51.00 L 37.14 55.00 L 37.61 58.00 L 40.00 61.40 L 43.00 63.34 L 46.00 63.75 L 50.00 63.18 L 52.98 61.00 L 54.43 59.00 L 55.42 56.00 L 55.15 52.00 L 54.32 50.00 L 51.00 46.59 L 49.00 45.67 L 44.00 45.60 Z M 46.00 129.69 L 40.00 134.26 L 37.56 139.00 L 37.74 147.00 L 40.00 150.42 L 43.00 151.69 L 45.57 151.00 L 47.49 148.00 L 48.08 130.00 L 46.00 129.69 Z"

function Render-MarkMakBitmap([int]$targetSize) {
    $scaleFactor = [double]$targetSize / 256.0

    # Parse and convert to PathGeometry so it can be transformed
    $rawGeom = [System.Windows.Media.Geometry]::Parse($svgPathData)
    $pathGeom = [System.Windows.Media.PathGeometry]::CreateFromGeometry($rawGeom)
    $pathGeom.FillRule = [System.Windows.Media.FillRule]::EvenOdd

    $transformGroup = New-Object System.Windows.Media.TransformGroup
    $scaleX = 1.0213 * $scaleFactor
    $scaleY = 1.0213 * $scaleFactor
    $transX = 24.85 * $scaleFactor
    $transY = 26.89 * $scaleFactor

    $scale = New-Object System.Windows.Media.ScaleTransform($scaleX, $scaleY)
    $translate = New-Object System.Windows.Media.TranslateTransform($transX, $transY)
    $transformGroup.Children.Add($scale)
    $transformGroup.Children.Add($translate)
    $pathGeom.Transform = $transformGroup

    $drawingVisual = New-Object System.Windows.Media.DrawingVisual
    $drawingContext = $drawingVisual.RenderOpen()

    # 1. Solid Pure White Background (no shadow, no border)
    $whiteBrush = New-Object System.Windows.Media.SolidColorBrush([System.Windows.Media.Color]::FromRgb(255, 255, 255))
    $drawingContext.DrawRectangle($whiteBrush, $null, (New-Object System.Windows.Rect(0, 0, $targetSize, $targetSize)))

    # 2. Blue MarkMak Glyph (#0969da)
    $blueColor = [System.Windows.Media.Color]::FromArgb(255, 9, 105, 218)
    $blueBrush = New-Object System.Windows.Media.SolidColorBrush($blueColor)
    $drawingContext.DrawGeometry($blueBrush, $null, $pathGeom)

    $drawingContext.Close()

    $rtb = New-Object System.Windows.Media.Imaging.RenderTargetBitmap($targetSize, $targetSize, 96, 96, [System.Windows.Media.PixelFormats]::Pbgra32)
    $rtb.Render($drawingVisual)

    return $rtb
}

function Save-PngBitmap($rtb, [string]$filePath) {
    $encoder = New-Object System.Windows.Media.Imaging.PngBitmapEncoder
    $encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($rtb))
    $stream = [System.IO.File]::Create($filePath)
    $encoder.Save($stream)
    $stream.Close()
    Write-Host "Saved: $filePath"
}

# 1. Render all standard sizes
$sizes = @(256, 128, 64, 48, 32, 24, 16)
$bitmaps = @{}

foreach ($s in $sizes) {
    $bitmaps[$s] = Render-MarkMakBitmap -targetSize $s
}

# 2. Save individual PNG files
Save-PngBitmap $bitmaps[256] (Join-Path $assetsDir "icon-markmak.png")
Save-PngBitmap $bitmaps[256] (Join-Path $assetsDir "icon-256.png")
Save-PngBitmap $bitmaps[256] (Join-Path $assetsDir "glyph-markmak.png")
Save-PngBitmap $bitmaps[128] (Join-Path $assetsDir "icon-128.png")
Save-PngBitmap $bitmaps[128] (Join-Path $assetsDir "glyph-128.png")
Save-PngBitmap $bitmaps[64]  (Join-Path $assetsDir "icon-64.png")
Save-PngBitmap $bitmaps[64]  (Join-Path $assetsDir "glyph-64.png")
Save-PngBitmap $bitmaps[48]  (Join-Path $assetsDir "icon-48.png")
Save-PngBitmap $bitmaps[32]  (Join-Path $assetsDir "icon-32.png")
Save-PngBitmap $bitmaps[32]  (Join-Path $assetsDir "glyph-32.png")
Save-PngBitmap $bitmaps[24]  (Join-Path $assetsDir "icon-24.png")
Save-PngBitmap $bitmaps[16]  (Join-Path $assetsDir "icon-16.png")

# 3. Create Favicon Data URI (from 32x32 PNG)
$memStream = New-Object System.IO.MemoryStream
$encoder32 = New-Object System.Windows.Media.Imaging.PngBitmapEncoder
$encoder32.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($bitmaps[32]))
$encoder32.Save($memStream)
$bytes = $memStream.ToArray()
$memStream.Close()

$base64 = [System.Convert]::ToBase64String($bytes)
$dataUri = "data:image/png;base64,$base64"
[System.IO.File]::WriteAllText((Join-Path $assetsDir "favicon_data_uri.txt"), $dataUri, [System.Text.Encoding]::UTF8)
Write-Host "Updated favicon_data_uri.txt successfully"

# 4. Generate multi-resolution app.ico using System.Drawing
$icoPath = Join-Path $assetsDir "app.ico"
$png256Path = Join-Path $assetsDir "icon-markmak.png"
if (Test-Path $png256Path) {
    $bmp = [System.Drawing.Bitmap]::FromFile($png256Path)
    $thumb = New-Object System.Drawing.Bitmap $bmp, 256, 256
    $hIcon = $thumb.GetHicon()
    $icon = [System.Drawing.Icon]::FromHandle($hIcon)
    $fs = New-Object System.IO.FileStream($icoPath, [System.IO.FileMode]::Create)
    $icon.Save($fs)
    $fs.Close()
    $bmp.Dispose()
    $thumb.Dispose()
    Write-Host "Generated app.ico successfully"
}
