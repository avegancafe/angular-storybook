var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['webpack-hot-middleware/client', './src/javascripts/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
      },
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve(path.join(__dirname, 'src', 'javascripts', 'components')),
      '@containers': path.resolve(path.join(__dirname, 'src', 'javascripts', 'containers')),
    },
  },
}
