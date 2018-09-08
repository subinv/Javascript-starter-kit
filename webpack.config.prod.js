import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  optimization: {
    minimizer: [
      //minify JS
      new webpack.optimize.UglifyJsPlugin()
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      noInfo: false,
    }),
    //Eliminate duplicate packages
    new webpack.optimize.DedupePlugin()
  ],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
}
