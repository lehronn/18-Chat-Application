//modules import
const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
      OptimizeJSPlugin = require('optimize-js-plugin');

//enviroment variable
let env = process.env.NODE_ENV || 'development';

if (env === 'production') {
plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  );
}

console.log('NODE_ENV:', env);

//plugins configuration
var plugins = [
new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: 'index.html',
        inject: 'body',
    })
];

//webpack configuration
module.exports = {
  entry: (env !== 'production' ? [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
    ] : []).concat(['./client/index.js']),
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins
};
