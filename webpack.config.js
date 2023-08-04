const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let htmlPageNames = ["test"];
let multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}/${name}.html`, // relative path to the HTML files
    filename: `${name}/index.html`, // output HTML files
    chunks: [`${name}`], // respective JS files
  });
});

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
    test: "./src/test/test.js",
    //... repeat until example 4
  },
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "build/[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },

  devtool: "inline-source-map",

  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "src/index.html",
      chunks: ["main"],
    }),
  ].concat(multipleHtmlPlugins),

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
