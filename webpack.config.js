'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }]
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
        new ExtractTextPlugin('style.css')
    ]
};