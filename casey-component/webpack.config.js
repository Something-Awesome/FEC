const path = require('path');

module.exports = {
  entry: path.join(__dirname, './client/src/app.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './client/dist'),
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: path.join(__dirname, './client/src'),
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
};
