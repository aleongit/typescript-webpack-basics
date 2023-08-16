const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

let htmlPageNames = ['types', 'narrowing', 'functions'];

let multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    title: 'TypeScript - ' + name.charAt(0).toUpperCase() + name.slice(1),
    template: `./src/index.html`, // relative path to the HTML files
    filename: `${name}/index.html`, // output HTML files
    chunks: [`${name}`] // respective JS files
  });
});

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.ts',
    types: './src/types/index.ts',
    narrowing: './src/narrowing/index.ts',
    functions: './src/functions/index.ts',
    //... repeat until example 4
    init: './src/init.ts'
  },
  devServer: {
    static: './dist'
  },
  output: {
    filename: 'build/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true
  },
  optimization: {
    runtimeChunk: 'single'
  },

  devtool: 'inline-source-map',

  plugins: [
    new ESLintPlugin({
      eslintPath: require.resolve('eslint'),
      extensions: ['ts', 'tsx', 'js', 'jsx'],
      cache: false
    }),
    new HtmlWebpackPlugin({
      title: 'TypeScript Basics by aleon',
      template: 'src/index.html',
      chunks: ['main']
    })
  ].concat(multipleHtmlPlugins),

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
