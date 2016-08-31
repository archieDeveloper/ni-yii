var path, webpack;

path    = require('path');
webpack = require('webpack');

module.exports = {
  entry: './source/coffee/admin.jsx',
  output: {
    path: path.join(__dirname, '../basic/web/js/'),
    filename: 'admin.js'
  },
  module: {
    loaders: [
      {
        test: /\.tpl$|.smarty$/,
        loader: 'smarty'
      },
      {
        test: /\.jsx|.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.coffee$/,
        loader: 'coffee-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    root: [
      path.resolve(__dirname, './source/coffee'),
      path.resolve(__dirname, '../basic/views')
    ],
    extensions: ['', '.coffee', '.jsx', '.js']
  },
  plugins: [
      //new webpack.optimize.CommonsChunkPlugin({
      //  name: "common"
      //})
    //new webpack.optimize.UglifyJsPlugin
  ]
};