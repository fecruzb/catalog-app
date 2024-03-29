const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const webpack = require("webpack")

const sourceDir = path.join(__dirname, "./src")

module.exports = {
  mode: "production",
  output: {
    publicPath: "/",
    filename: "[name].js",
    path: path.join(sourceDir, "../dist"),
  },
  entry: {
    app: [path.join(sourceDir, "index.jsx")],
  },
  context: sourceDir,
  plugins: [
    new webpack.DefinePlugin({
      API_URL: JSON.stringify("https://liblab-api.cyclic.app"),
    }),
    new HtmlWebpackPlugin({
      publicPath: "/",
      template: "index.html",
      filename: "index.html",
      chunks: ["app", "vendor"],
    }),
    new CleanWebpackPlugin({
      verbose: false,
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: ["node_modules", sourceDir],
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
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
              envName: "production",
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
              additionalData: "$env: development;",
            },
          },
        ],
      },
    ],
  },
}
