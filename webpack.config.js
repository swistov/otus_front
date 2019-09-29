'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
// <<<<<<< HEAD
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
  devtool: 'inline-source-map',
    devServer: {
        port: '3000',
        host: '0.0.0.0',
        proxy: {
            '/api/v1.0': 'http://localhost:3000'
        }
    },
  plugins: [ 
// =======
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
// >>>>>>> 9dd00bc0ce18f517cec598f8884536f9f6e240f8

    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }]
    },

    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};