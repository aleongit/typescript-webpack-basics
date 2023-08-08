## TypeScript-Webpack-Basics


App per a la realització de tutorial/exercicis TypeScript (The TypeScript Handbook) amb entorn de compilació Webpack.


- TODO:
- [Tutorial](tutorial.md)




## Requeriments / Prerequisites

🖥️ node -v
→ v18.16.0

🖥️ npm -v
→ 9.8.1



## Dependencies

- When installing a package that will be bundled into your production bundle, you should use `npm install --save`. If you're installing a package for development purposes (e.g. a linter, testing libraries, etc.) then you should use `npm install --save-dev`.

- `npm install webpack webpack-cli --save-dev`
- `npm install --save lodash`
- `npm install --save-dev style-loader css-loader`
- `npm install --save-dev html-webpack-plugin`
- `npm install --save-dev webpack-dev-server`
- `npm install --save-dev express webpack-dev-middleware`
- `npm install --save-dev typescript ts-loader`
- `npm install --save-dev @types/lodash`
- `npm install --save-dev --save-exact prettier`
- `npm install --save-dev --save-exact eslint eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser`
- `npm install --save-dev eslint-webpack-plugin`



## Get Started

- git clone https://github.com/aleongit/typescript-webpack-basics.git
- cd typescript-webpack-basics
- npm install
- `npm run start` and open `http://localhost:8080/`
- or 
- `npm run server`and open `http://localhost:9000/`




## Run

- cd typescript-webpack-basics
- `npm run start` and open `http://localhost:8080/`
- or 
- `npm run server`and open `http://localhost:9000/`



### prettier CLI
```
npx prettier . --check
npx prettier . --write
```


### eslint CLI
```
npx eslint .
npx eslint . --fix
```


## Dev environment

- node v18.16.0
- npm 9.8.1
- Visual Studio Code 1.80.1
- git version 2.38.0.windows.1
- Microsoft Windows [Versión 10.0.19045.3208]



## Preparing Webpack

### Getting Started

- https://webpack.js.org/guides/getting-started/


#### Basic Setup

- `mkdir typescript-webpack-basics`
- `cd typescript-webpack-basics`
- `npm init -y`
- `npm install webpack webpack-cli --save-dev`

- add initial directory structure
    - `index.html`
    - `/src`
    - `/src/index.js`

- **src/index.js**
```js
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

- **index.html**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
```

- mark package as `private`, as well as removing the `main` entry
- **package.json**
```js
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
- "main": "index.js",
+ "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "webpack": "^5.38.1",
    "webpack-cli": "^4.7.2"
  }
 }
```


#### Creating a Bundle

- First we'll tweak our directory structure slightly, separating the "source" code (`./src`) from our "distribution" code (`./dist`). The "source" code is the code that we'll write and edit. The "distribution" code is the minimized and optimized output of our build process that will eventually be loaded in the browser.

- add `/dist`
- move `index.html` to `/dist/index.html` or delete `index.html`
- You may have noticed that `index.html` was created manually, even though it is now placed in the `dist` directory. Later , `/dist/index.html` is generated automatically with `HtmlWebpackPlugin`.

- To bundle the lodash dependency with `index.js`, we'll need to install the library locally:
- `npm install --save lodash`

- Now, let's import lodash in our script:
- **src/index.js**
```js
import _ from 'lodash';

 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());
```

- Now, since we'll be bundling our scripts, we have to update our `index.html` file. Let's remove the lodash `<script>`, as we now import it, and modify the other `<script>` tag to load the bundle, instead of the raw `./src` file:

- **dist/index.html**
```html
<!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8" />
     <title>Getting Started</title>
   </head>
   <body>
    <script src="main.js"></script>
   </body>
 </html>
```

- `run npx webpack`, which will take our script at `src/index.js` as the entry point, and will generate `dist/main.js` as the output.

- Open `index.html` from the `dist` directory in your browser and, if everything went right, you should see the following text: `'Hello webpack'`.



#### Using a Configuration

- add `webpack.config.js`
```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

- If a `webpack.config.js` is present, the webpack command picks it up by default. We use the `--config` option here only to show that you can pass a configuration of any name. This will be useful for more complex configurations that need to be split into multiple files.
- run `npx webpack` or
- run `npx webpack --config webpack.config.js`


### NPM Scripts

- add `build` in  `scripts`
- **package.json**
```js
{
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
   "private": true,
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "devDependencies": {
     "webpack": "^5.4.0",
     "webpack-cli": "^4.2.0"
   },
   "dependencies": {
     "lodash": "^4.17.20"
   }
 }
```

- Now the `npm run build` command can be used in place of the `npx` command we used earlier
- `npm run build`


### Asset Management

#### Setup

- Let's make a minor change to our project before we get started:

- **dist/index.html**
```html
<!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8" />
    <title>Asset Management</title>
   </head>
   <body>
    <script src="bundle.js"></script>
   </body>
 </html>
```

- **webpack.config.js**
```js
const path = require('path');

 module.exports = {
   entry: './src/index.js',
   output: {
    filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
```


#### Loading CSS

- In order to `import` a CSS file from within a JavaScript module, you need to install and add the `style-loader` and `css-loader` to your *module* configuration:

- `npm install --save-dev style-loader css-loader`

- **webpack.config.js**
```js
const path = require('path');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
 };
```

- add `src/style.css`
```css
.hello {
  color: red;
}
```
- import style in `src/index.js`
```js
import _ from 'lodash';
import './style.css';

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

   return element;
 }

 document.body.appendChild(component());
```

- `npm run build` and open `index.html` in browser to see the changes.


#### Loading Images
#### Loading Fonts
#### Loading Data
#### Global Assets


### Output Management

- So far we've manually included all our assets in our `index.htmlp` file, but as your application grows and once you start using hashes in filenames and outputting multiple bundles, it will be difficult to keep managing your index.html file manually. However, a few plugins exist that will make this process much easier to manage.


### Setting up HtmlWebpackPlugin

- `npm install --save-dev html-webpack-plugin`

- **webpack.config.js**
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/index.js',
     test: './src/js/test.js',
   },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
```

- `npm run build`


#### Cleaning up the /dist folder

- In general it's good practice to clean the `/dist` folder before each build, so that only used files will be generated. Let's take care of that with `output.clean` option.

- **webpack.config.js**
```js
...
  output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
...
```


### Development

- ⚠️ The tools in this guide are only meant for development, please avoid using them in production!
- Let's start by setting `mode` to `'development'` and title to 'Development'.

- **webpack.config.js**
```js
const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
  mode: 'development',
 ...
   plugins: [
     new HtmlWebpackPlugin({
      title: 'Development',
     }),
   ],
...
 };
```


#### Using source maps

- When webpack bundles your source code, it can become difficult to track down errors and warnings to their original location. For example, if you bundle three source files (`a.js`, `b.js`, and `c.js`) into one bundle (`bundle.js`) and one of the source files contains an error, the stack trace will point to `bundle.js`. This isn't always helpful as you probably want to know exactly which source file the error came from.

- For this guide, let's use the `inline-source-map` option, which is good for illustrative purposes (⚠️ though not for production)

- **webpack.config.js**
```js
const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
...
  devtool: 'inline-source-map',
...
 };
```


#### Choosing a Development Tool

- It quickly becomes a hassle to manually run `npm run build` every time you want to compile your code.
- There are a couple of different options available in webpack that help you automatically compile your code whenever it changes:

  - webpack's Watch Mode
  - webpack-dev-server
  - webpack-dev-middleware

- In most cases, you probably would want to use `webpack-dev-server`, but let's explore all of the above options.



#### Using Watch Mode

- **package.json**
```js
{
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "watch": "webpack --watch",
  "build": "webpack"
},
}
```

- now run `npm run watch` from the command line and see how webpack compiles your code. You can see that it doesn't exit the command line because the script is currently watching your files.



#### Using webpack-dev-server

- The `webpack-dev-server` provides you with a rudimentary web server and the ability to use live reloading.

- `npm install --save-dev webpack-dev-server`

- **webpack.config.js**
```js
module.exports = {
   mode: 'development',
...
  devServer: {
    static: './dist',
  },
 ...
  optimization: {
    runtimeChunk: 'single',
  },
 };
```

- This tells `webpack-dev-server` to serve the files from the `dist` directory on `localhost:8080`

- The `optimization.runtimeChunk: 'single'` was added because in this example we have more than one entrypoint on a single HTML page. Without this, we could get into trouble described here. Read the Code Splitting chapter for more details.

- `webpack-dev-server` serves bundled files from the directory defined in output.path, i.e., files will be available under `http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]`.


- add `start` script in **package.json**
```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --watch",
    "start": "webpack serve --open",
    "build": "webpack"
 }
}
```

- run `npm start`
- open `http://localhost:8080/` in browser




#### Using webpack-dev-middleware

- `webpack-dev-middleware` is a wrapper that will emit files processed by webpack to a server. This is used in `webpack-dev-server` internally, however it's available as a separate package to allow more custom setups if desired. We'll take a look at an example that combines `webpack-dev-middleware` with an `express` server.

- Let's install `express` and `webpack-dev-middleware` so we can get started.
- `npm install --save-dev express webpack-dev-middleware`

- **webpack.config.js**
```js
 module.exports = {
...
   output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
   },
 };
```

- The `publicPath` will be used within our server script as well in order to make sure files are served correctly on `http://localhost:3000`. We'll specify the port number later.

- The next step is setting up our custom express server.
- add `server.js`
```js
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
```

- add `server` in `package.json`
```json
{
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "watch": "webpack --watch",
  "start": "webpack serve --open",
  "server": "node server.js",
  "build": "webpack"
},
}
```

- Now in your terminal run `npm run server`
- `http://localhost:3000/`



### add TypeScript in WebPack

- https://webpack.js.org/guides/typescript/


#### Basic Setup

- `npm install --save-dev typescript ts-loader`

- Now we'll modify the directory structure & the configuration files.

- ⚠️ change all files in `/src/*.js` to `ts`

- add `tsconfig.json`
```js
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
```

- **webpack.config.js**
```ts
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

- This will direct webpack to enter through `./index.ts`, load all `.ts` and `.tsx` files through the `ts-loader`, and output a `bundle.js` file in our current directory.

- Now lets change the import of lodash in our `./index.ts` due to the fact that there is no default export present in `lodash` definitions.

- **./index.ts**
```ts
import * as _ from 'lodash';

  function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

  document.body.appendChild(component());
```


#### Loader

- We use `ts-loader` in this guide as it makes enabling additional webpack features, such as importing other web assets, a bit easier.

- ⚠️ `ts-loader` uses `tsc`, the TypeScript compiler, and relies on your `tsconfig.json` configuration. Make sure to avoid setting module to "CommonJS", or webpack won't be able to tree-shake your code.



#### Source Maps

- To enable *source maps*, we must configure TypeScript to output inline source maps to our compiled JavaScript files. The following line must be added to our TypeScript configuration:

- **tsconfig.json**
```json
{
"sourceMap": true,
}
```

- **webpack.config.js**
```js
...
module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
```



#### Using Third Party Libraries

- When installing third party libraries from *npm*, it is important to remember to install the typing definition for that library.

- For example, if we want to install `lodash` we can run the following command to get the typings for it.

```
npm install --save-dev @types/lodash
```

- If the npm package already includes its declaration typings in the package bundle, downloading the corresponding `@types` package is not needed.


#### Importing Other Assets

To use *non-code assets* with TypeScript, we need to defer the type for these imports. This requires a `custom.d.ts` file which signifies custom definitions for TypeScript in our project. 

- Let's set up a declaration for .svg files.
- **custom.d.ts**
```ts
declare module '*.svg' {
  const content: any;
  export default content;
}
```

- Here we declare a new module for SVGs by specifying any import that ends in `.svg` and defining the module's content as any. We could be more explicit about it being a url by defining the type as string. The same concept applies to other assets including CSS, SCSS, JSON and more.

- run `npm run build` without errors



### add ESLint and Prettier in Webpack

#### add Prettier
- **Prettier** is an opinionated code formatter

- https://prettier.io/docs/en/install
```
npm install --save-dev --save-exact prettier
```

- create **.prettierrc.json**
```json
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
  "endOfLine": "auto"
}
```

- create a **.prettierignore** if is necessary

- Now, format all files with Prettier:
```
npx prettier . --check
npx prettier . --write
```

- Install `prettier-vscode` for Visual Studio Code




#### add ESLint with *.prettierrc* rules

- ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

- https://eslint.org/docs/latest/use/getting-started

- install **ESLint** and extensions for **webpack**, **prettier** and **typescript**
```
npm install --save-dev --save-exact eslint eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser`
```

- add **.eslintrc**
```json
{
  "root": true,
  "env": {
    "browser": true,
    "es2021": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": { "project": ["./tsconfig.json"] },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "warn"
  }
}
```
- this configuration reads `.prettierrc.json` by default

- add **.eslintignore** if is necessary



#### add EslintWebpackPlugin

- install `npm install eslint-webpack-plugin --save-dev`

- then add the plugin to your webpack config.

- **webpack.config.js**
```js
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ...
  plugins: [new ESLintPlugin(options)],
  // ...
};
```

- ⚠️ **configure options**
- `cache: false` is important to apply changes in webpack
```js
plugins: [
    new ESLintPlugin({
      eslintPath: require.resolve('eslint'),
      extensions: ['ts', 'tsx', 'js', 'jsx'],
      cache: false
    }),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/index.html',
      chunks: ['main']
    })
  ],
```


## Doc

### install and setup
- https://blog.logrocket.com/using-webpack-typescript/


### typescript
- https://www.typescriptlang.org/
- https://www.typescriptlang.org/download
- https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html#webpack
- https://www.typescriptlang.org/docs/handbook/intro.html


### webpack
- https://webpack.js.org/guides/getting-started/
- https://webpack.js.org/guides/asset-management/
- https://webpack.js.org/guides/development/
- https://webpack.js.org/guides/typescript/
- https://webpack.js.org/configuration/module/
- https://webpack.js.org/loaders/style-loader/
- https://webpack.js.org/loaders/css-loader/
- https://webpack.js.org/configuration/mode/#mode-development
- https://webpack.js.org/configuration/output/#outputpath



### webpack - Development Tool
- https://webpack.js.org/configuration/watch/#watch
- https://github.com/webpack/webpack-dev-server
- https://github.com/webpack/webpack-dev-middleware



### webpack - HTML Webpack Plugin
- https://github.com/jantimon/html-webpack-plugin



### webpack - tsloader
- https://github.com/TypeStrong/ts-loader


### prettier
- https://prettier.io/docs/en/install.html
- https://prettier.io/docs/en/ignore
- https://prettier.io/docs/en/configuration
- https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21
- https://stackoverflow.com/questions/53516594/why-do-i-keep-getting-eslint-delete-cr-prettier-prettier


### eslint
- https://eslint.org/
- https://eslint.org/docs/latest/use/getting-started
- https://eslint.org/docs/latest/use/getting-started#quick-start
- https://eslint.org/docs/latest/use/configure/
- https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file-formats
- https://eslint.org/docs/latest/use/integrations
- https://github.com/prettier/eslint-plugin-prettier
- https://medium.com/@mrkhedri/custom-webpack-5-eslint-and-prettier-config-for-reactjs-and-typescript-project-d4b6f3b7ff53
- https://dev.to/rinconcamilo/setting-up-eslint-prettier-with-webpack-in-vscode-29fg


### eslint-webpack-plugin
- https://webpack.js.org/plugins/eslint-webpack-plugin/
- https://www.npmjs.com/package/eslint-webpack-plugin
- https://stackoverflow.com/questions/64461635/adding-eslint-webpack-plugin-into-project-to-provide-typescript-linting


### package.json
- https://docs.npmjs.com/cli/v9/configuring-npm/package-json


### npm
- https://docs.npmjs.com/cli/v9/commands/npm-install


### questions
- https://stackoverflow.com/questions/39798095/multiple-html-files-using-webpack