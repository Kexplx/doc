Set-Location war

Remove-Item -Recurse -ErrorAction Ignore babel-cache
Remove-Item -Recurse -ErrorAction Ignore dist
Remove-Item -Recurse -ErrorAction Ignore messages

npx gulp --local
Set-Location ..
