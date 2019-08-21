const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    main: './src/index.js',
    style: './scss/style.scss'
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [ 

    new ExtractTextPlugin(
      {filename: 'style.css', disable: false, allChunks: true }
    ),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ]
};