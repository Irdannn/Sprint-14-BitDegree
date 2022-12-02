// Webpack uses this to work with directories
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin its work
  entry: './src/index.js',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },

  module: {
    rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader', 
          exclude: /node_modules/ 
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        // Now we apply rule for images
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              // It gets all of the transformed CSS and extracts it into a separate
              // single bundled file.
              loader: MiniCssExtractPlugin.loader
            }, 
            {
              loader: "css-loader",
            },
          ]
        },
    ]       
},

plugins: [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "src", "index.html"),
  }),
  new MiniCssExtractPlugin({
    filename: "bundle.css"
  })
],
  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript 
  // minifying and other things, so let's set mode to development
  mode: 'development'
};
