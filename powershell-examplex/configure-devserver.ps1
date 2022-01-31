Write-Host -ForegroundColor Cyan "Configuring devserver`n"

Write-Host "(1/2) Set app_config.json..." -NoNewline
$Start = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Output "{
    `"application`": `"project01-307615`",
    `"api_path`": `"http://localhost:8888/_ah/api/qdacity/v1`",
    `"api_version`": `"v1`",
    `"client_id`": `"241548321934-hb7uht8f9pomrfd5ajhk7nq7snl5po4f.apps.googleusercontent.com`",
    `"sync_service`": `"http://localhost:8080`"
}" > war/api_config.json;
$End = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Host -ForegroundColor Green "Finished in $([Math]::Round($End - $Start, 2)) sec"

Write-Host "(2/2) Configuring backend..." -NoNewline
$Start = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
npx gulp configureBackend 
$End = (New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)).TotalSeconds
Write-Host -ForegroundColor Green "Finished in $([Math]::Round($End - $Start, 2)) sec"