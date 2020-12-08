https://github.com/angular-eslint/angular-eslint

1. ng add @angular-eslint/schematics
2. Add .eslintrc.json
4. Add the .eslintignore (this is mainly for VSCode since files will be filtered by NPM command anyways)
5. Make sure .prettierrc matches the rules from eslint.
6. npm un tslint codelyzer
8. Delete "lint" property from angular.json
7. Delete tslint.json

Add NPM Scripts:

"lint": "eslint src/app --fix",
"lint-ci": "eslint src/app --max-warnings=0",


Important: The VSCode ESLint extension often doesn't emeditaly update the config. Have to reopen VSCode