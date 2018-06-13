const path = require('path');

module.exports = {
  target: 'node',
  entry: './src/server.mjs',
  output: {
    filename: 'server.mjs',
    path: path.resolve(__dirname, 'dist')
  }
};
