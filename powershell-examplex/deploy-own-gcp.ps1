$totalStart = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Host -ForegroundColor Cyan "Deploying Local QDACity Builds to GCP`n"

Write-Host "(1/7) Set app_config.json..." -NoNewline
$Start = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Output "{
    `"application`": `"project01-307615`",
    `"api_path`": `"https://project01-307615.ew.r.appspot.com/_ah/api`",
    `"api_version`": `"v1`",
    `"client_id`": `"241548321934-hb7uht8f9pomrfd5ajhk7nq7snl5po4f.apps.googleusercontent.com`",
    `"sync_service`": `"https://realtime-service.qdacity.com/`"
}" > war/api_config.json;
$End = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Host -ForegroundColor Green "Finished in $([Math]::Round($End - $Start, 2)) sec"

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
Set-Location war
npx gulp bundleCi *>$null
npx gulp setConfigTarget *>$null
npx gulp generateLanguageFiles *>$null
npx gulp sw *>$null
Set-Location ..
$End = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Host -ForegroundColor Green "Finished in $([Math]::Round($End - $Start, 0)) sec"

Write-Host "(7/7) Uploading files to GCP..." -NoNewline
$Start = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
mvn appengine:deployAll -DskipTests *>$null
$End = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Host -ForegroundColor Green "Finished in $([Math]::Round(($End - $Start) / 60, 2)) min"

$totalEnd = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Host -ForegroundColor Cyan "`nTotal process finished in $([Math]::Round(($totalEnd - $totalStart) / 60, 2)) min`n"