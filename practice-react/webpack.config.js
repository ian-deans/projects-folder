const webpack = require('webpack')
const path = require('path')

const DIR = path.resolve( __dirname )

const config = {
  entry: DIR + '/index.jsx',
  output: {
    path: DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: DIR,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = config
