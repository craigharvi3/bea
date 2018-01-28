const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  externals: {
    "react": "react",
    "react-dom": "react-dom"
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new UglifyJSPlugin({
     sourceMap: true
    }),
    new webpack.DefinePlugin({
     'process.env': {
       'NODE_ENV': JSON.stringify('production')
     }
   })
  ]
});
