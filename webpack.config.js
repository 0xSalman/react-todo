const path = require('path');
const webpack = require('webpack');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {

  entry: src + '/main.tsx',

  output: {
    path: dist,
    publicPath: '/dist/',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  devtool: 'source-map', // 'cheap-module-source-map'

  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: src,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },

  // Avoid bundling all dependencies which allows browsers to cache these between builds
  /*externals: {
   "react": "React",
   "react-dom": "ReactDOM"
   },*/

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ]
};
