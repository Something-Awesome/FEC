const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/client/app.jsx'),
  output: {
    path: path.join(__dirname,'/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        use: ['babel-loader']
      }
    ]
  },
  devServer: {
    port: 3333,
    open: true
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname,'public/bundle.js')]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'public/index.html')
    })
  ]
}