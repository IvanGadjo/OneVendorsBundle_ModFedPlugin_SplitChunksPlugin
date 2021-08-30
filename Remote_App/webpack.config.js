const path = require('path');

module.exports = {
  entry: './src/bootstrap.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: 'development'
};