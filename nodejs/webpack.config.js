var path, webpack;

path    = require('path');
webpack = require('webpack');

module.exports = {
  entry: './source/coffee/admin.coffee',
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
        test: /\.coffee$/,
        loader: 'coffee-loader'
      }
    ]
  },
  resolve: {
    root: [
      path.resolve(__dirname, './source/coffee'),
      path.resolve(__dirname, '../basic/views')
    ],
    extensions: ['', '.coffee', '.js']
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin
  ]
};