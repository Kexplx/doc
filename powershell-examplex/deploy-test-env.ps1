$totalStart = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Host -ForegroundColor Cyan "Deploying Local QDACity Builds to GCP (testenv)`n"

Write-Host "(1/7) Setting app_config.json..." -NoNewline
$Start = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Output "{
    `"application`": `"qdacity-testenvironment`",
    `"api_path`": `"https://4-dot-qdacity-testenvironment.appspot.com/_ah/api`",
    `"api_version`": `"v4`",
    `"client_id`": `"1039635374729-0je47k2knff8upb2r62ph15nmo7gi9ct.apps.googleusercontent.com`",
    `"sync_service`": `"https://rtcs-rmt2okso4a-uc.a.run.app/`"
}" > war/api_config.json;
$End = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Host -ForegroundColor Green "Finished in $([Math]::Round($End - $Start, 0)) sec"

Write-Host "(2/7) Configuring backend..." -NoNewline
$Start = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
npx gulp configureBackend  *>$null
$End = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Host -ForegroundColor Green "Finished in $([Math]::Round($End - $Start, 0)) sec"

Write-Host "(3/7) Installing maven dependencies..." -NoNewline
$Start = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
mvn install -DskipTests *>$null
$End = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Host -ForegroundColor Green "Finished in $([Math]::Round($End - $Start, 0)) sec"

Write-Host "(4/7) Removing old builds..." -NoNewline
$Start = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Remove-Item -Recurse -ErrorAction Ignore target
Remove-Item -Recurse -ErrorAction Ignore war/babel-cache
Remove-Item -Recurse -ErrorAction Ignore war/dist
Remove-Item -Recurse -ErrorAction Ignore war/messages
$End = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Host -ForegroundColor Green "Finished in $([Math]::Round($End - $Start, 0)) sec"

Write-Host "(5/7) Building Backend..." -NoNewline
$Start = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
mvn package -DskipTests *>$null
$End = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Host -ForegroundColor Green ".Finished in $([Math]::Round($End - $Start, 0)) sec"

Write-Host "(6/7) Building Frontend..." -NoNewline 
$Start = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds

$areWeInWar = (Get-Location) -match "war"
if (!$areWeInWar) {
    Set-Location war
}
npx gulp bundleCI *>$null
npx gulp setConfigTarget *>$null
npx gulp generateLanguageFiles *>$null
npx gulp sw *>$null
Set-Location ..
$End = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Host -ForegroundColor Green "Finished in $([Math]::Round($End - $Start, 0)) sec"

Write-Host "(7/7) Uploading files to GCP..." -NoNewline
$Start = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
mvn appengine:deployAll -DskipTests
$End = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Host -ForegroundColor Green "Finished in $([Math]::Round(($End - $Start) / 60, 2)) min"

$totalEnd = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Host -ForegroundColor Cyan "`nTotal process finished in $([Math]::Round(($totalEnd - $totalStart) / 60, 2)) min`n"