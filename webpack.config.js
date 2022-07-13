const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        exclude: /node_modules/,
        use: ['file-loader?name-[name].[ext]']
      },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    })
  ],
  resolve: {
    extensions: ['*', '.ts', '.js', '.jsx', '.tsx', '.css', 'json', '.png']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    devMiddleware: {
      publicPath: path.resolve(__dirname, './public'),
      writeToDisk: true
    },
    static: [
      {
        directory: path.resolve(__dirname, 'dist')
      }
    ],
    historyApiFallback: true,
    client: {
      overlay: false
    }
  }
};
