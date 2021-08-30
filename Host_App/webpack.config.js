const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/bootstrap.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: 'development',

  devServer: {
    static: path.join(__dirname,'dist'),
    port: 3001
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Host app',
      template: path.resolve(__dirname, './src/template.html')
    })
  ]
};