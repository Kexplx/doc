https://github.com/angular-eslint/angular-eslint

1. ng add @angular-eslint/schematics
2. ng g @angular-eslint/schematics:convert-tslint-to-eslint {{YOUR_PROJECT_NAME_GOES_HERE}}
3. Replace the created eslint config with this.
4. Add the .eslintignore
5. Make sure .prettierrc matches the rules from eslint.
6. npm un tslint codelyzer
7. Delete tslint.json
8. Run "npm run lint" or "ng lint" for linting.


Important: The VSCode ESLint extension often doesn't emeditaly update the config. Have to reopen VSCode