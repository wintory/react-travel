const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const DashboardPlugin = require('webpack-dashboard/plugin')

const devServer = {
  host: '0.0.0.0',
  port: 8080
};

process.env.NODE_ENV = 'development'

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://' + devServer.host + ':' + devServer.port,
    'webpack/hot/only-dev-server',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack', 'babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?module&localIdentName=[local]___[hash:base64:5]', 'postcss'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?module&localIdentName=[local]___[hash:base64:5]', 'postcss', 'sass'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['url?limit=50000'],
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  },
  postcss: function () {
    return [autoprefixer]
  },
  plugins: [
    new DashboardPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    hot: true,
    contentBase: './dist',
    host: devServer.host,
    port: devServer.port,
    historyApiFallback: {
      index: './'
    }
  },
};
