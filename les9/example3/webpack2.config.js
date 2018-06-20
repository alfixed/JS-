const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './.build/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '.build2')
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
