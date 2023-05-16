# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup Scripts

To run the frontend locally, follow these steps:

### Install node.js

### Install typescript

### Open vsCode

### Install Prettier code formatter and ESLint (for formatting standard)

### Git clone the repo

### Paste this on settings.json (cmd+shift+p):

```
"editor.formatOnPaste": true,
"[javascript,typescript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[html]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
},
"eslint.validate": ["javascript", "typescript"],
"typescript.updateImportsOnFileMove.enabled": "always",
"explorer.confirmDragAndDrop": false,
"javascript.updateImportsOnFileMove.enabled": "always",
```

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
