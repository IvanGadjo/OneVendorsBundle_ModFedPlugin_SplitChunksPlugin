const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/bootstrap.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: 'development',

  devServer: {
    static: path.join(__dirname,'dist'),
    port: 3000
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Remote app',
      template: path.resolve(__dirname, './src/template.html')
    })
  ]
};