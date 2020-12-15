const path = require('path');
const basicCongig = require("./webpack.config");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(basicCongig, {
  mode: 'production',
  entry: {
      main: './src/index.js'
    },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  plugins: [new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css"
    }), new CleanWebpackPlugin()],
  module: {
    rules: [
      {
          test: /\.s[ac]ss$/i,
          use: [
            // Extract css into files
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        }
    ]
}
});