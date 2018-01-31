var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lipper.min.js',
    library: 'lipper',
    libraryTarget: 'umd'
  },
  plugins: [
    new UglifyJsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=latest',
        include: [path.resolve(__dirname, 'src')],
      }
    ]
  }
};
