const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const htmlPageNames = ['types', 'narrowing', 'functions', 'objects', 'manipulation', 'classes'];

const multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    title: 'TypeScript - ' + name.charAt(0).toUpperCase() + name.slice(1),
    template: `./src/index.html`, // relative path to the HTML files
    filename: `${name}/index.html`, // output HTML files
    chunks: [`${name}`] // respective JS files
  });
});

//generar objecte {} amb punts d'entrada ts per expandir module.exports.entry
//array to object amb 'reduce'
//let obj = ['a', 'b', 'c'].reduce((a, v) => ({ ...a, [v]: v }), {});
const entries = htmlPageNames.reduce((acumulat, item, index, arra) => {
  acumulat[item] = `./src/${item}/index.ts`;
  return acumulat;
}, {}); // {} inici objecte buit

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.ts',
    init: './src/init.ts',
    helpers: './src/helpers.ts',
    constants: './src/constants.ts',
    //types: './src/types/index.ts',
    //...
    ...entries //expandir objecte 'entries'
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
      title: 'TypeScript - Basics by aleon',
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
