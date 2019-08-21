const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js',
    './src/scss/style.scss',
  ],
  output: {
    filename: './main.js'
  },
  module: {
    rules: [{
      ...
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader",
              options: {
                sourceMap: true,
                minimize: true,
                url: false
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/style.bundle.css',
      allChunks: true,
    }),
  ]}
};
