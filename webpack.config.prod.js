import webpack from 'webpack';
import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: {
    vendor : path.resolve(__dirname, 'src/vendor'),
    main:path.resolve(__dirname, 'src/index')
},
  mode: 'production',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  optimization: {
    minimizer: [
      //minify JS
      new UglifyJsPlugin()
    ],
    splitChunks: {
      // include all types of chunks
      name: 'vendor'
    }
  },
  plugins: [
    //Use CommonsChunkPlugin to create a separate bundle of vendor
    //libraries so that they're cached separately
    // new webpack.optimize.CommonsChunkPlugin({
    //   name:'vendor'
    // }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      noInfo: false,
    }),
    //create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true //inject necessary script tag
    })
    //Eliminate duplicate packages
    //new webpack.optimize.DedupePlugin()
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
