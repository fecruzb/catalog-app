const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const webpack = require("webpack")

const sourceDir = path.join(__dirname, "./src")
module.exports = {
  devServer: {
    hot: true,
    host: "127.0.0.1",
    port: 3000,
    historyApiFallback: {
      rewrites: [{ from: /./, to: "/index.html" }],
    },
  },
  mode: "development",
  output: {
    publicPath: "/",
    filename: "[name].js",
  },
  entry: {
    app: [path.join(sourceDir, "index.jsx")],
  },
  devtool: "source-map",
  context: sourceDir,
  plugins: [
    new webpack.DefinePlugin({
      API_URL: JSON.stringify("http://localhost:4000"),
    }),
    new HtmlWebpackPlugin({
      publicPath: "/",
      template: "index.html",
      filename: "index.html",
      chunks: ["app"],
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: ["node_modules", sourceDir],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [sourceDir],
        use: [
          {
            loader: "babel-loader",
            options: {
              envName: "development",
            },
          },
        ],
      },
      {
        test: /.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: "$env: production;",
            },
          },
        ],
      },
    ],
  },
}
