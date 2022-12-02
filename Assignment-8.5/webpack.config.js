// Webpack uses this to work with directories
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {
  // Path to your entry point. From this file Webpack will begin its work
  entry: "./src/index.js",

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            // It gets all transformed CSS and extracts it into separate
            // single bundled file
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          /* ... Other loaders ... */
        ],
      },
      // Now we apply rule for images
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            // Using file-loader for these files
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript
  // minifying and other things, so let's set mode to development
  mode: "development",
};
