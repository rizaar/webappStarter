
let path = require('path');
let SRC = path.join(__dirname, 'src/');
let NODE_MODULES = path.join(__dirname, 'node_modules/');
let CopyWebpackPlugin = require('copy-webpack-plugin')

let config = {
  entry: './src',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  resolve: {
    root: [SRC, NODE_MODULES],
    alias: {
      'js': path.join(SRC, 'js/')
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      { from : 'src/fonts',to : 'fonts'},
      { from : 'src/images',to : 'images'},
      { from : 'src/styles',to : 'styles'},
    ])
  ]

}

module.exports = config;
