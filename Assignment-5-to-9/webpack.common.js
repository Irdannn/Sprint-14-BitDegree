// Webpack uses this to work with directories.
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do.
module.exports = {

  // Path to your entry point. From this file Webpack will begin its work.
  entry: './src/index.js',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file.
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
          use: [
            {
              // After all CSS loaders, we use a plugin to do its work.
              // It gets all the transformed CSS and extracts it into separate
              // single bundled file.
              loader: MiniCssExtractPlugin.loader
            }, 
            {
              loader: "css-loader",
            },
          ]
        },   
        // Now we apply a rule for images
        {
          test: /\.(png|jpeg|jpg|gif|svg)$/,
          use: [
                 {
                   // By using a file-loader for these files.
                   loader: "file-loader",
                 }
               ]
        }
    ]       
},
plugins: [
  new MiniCssExtractPlugin({
    filename: "bundle.css"
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "src", "index.html"),
  }),
],
};