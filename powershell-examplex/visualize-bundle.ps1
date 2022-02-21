# Set-Location war
# (Get-Content webpack.config.js).replace("devtool: 'none'", "devtool: 'source-map'") | Set-Content webpack.config.js
# npx gulp bundleCI
# (Get-Content webpack.config.js).replace("devtool: 'source-map'", "devtool: 'none'") | Set-Content webpack.config.js
# Set-Location ../target/qdacity-war/dist/js
# source-map-explorer index.dist.js --no-border-checks
# Set-Location ../../../..

Set-Location war
(Get-Content webpack.config.js).replace('devtool: none', 'devtool: "source-map"') | Set-Content webpack.config.js
npx gulp bundleCI
(Get-Content webpack.config.js).replace('devtool: "source-map"', 'devtool: none') | Set-Content webpack.config.js
Set-Location ../target/qdacity-war/dist/js
source-map-explorer index.dist.js --no-border-checks
Set-Location ../../../..