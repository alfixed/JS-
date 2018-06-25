const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '.build')
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'client/index.html',
        to: ''
      }
    ], { debug: 'info' })
  ]
};