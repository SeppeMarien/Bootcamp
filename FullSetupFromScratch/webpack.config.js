const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, args) => {
  const devMode = args.mode !== 'production';

  const paths = {
    SRC: path.resolve(__dirname, 'src'),
    DIST: path.resolve(__dirname, 'dist')
  };

  return {
    entry: path.resolve(paths.SRC, 'index.js'),
    output: {
      filename: devMode ? '[name].js' : '[name].[contenthash].js',
      path: paths.DIST,
      publicPath: '/'
    },
    devServer: {
      historyApiFallback: true, // support for html5 mode
      noInfo: true, // limit output
      contentBase: paths.SRC,
      compress: true, // enable compression
      hot: true // enable hot module replacement
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // apply babel-loader for any js file
          loader: 'babel-loader',
          exclude: /node_modules/ // except in node_modules
        },
        {
          test:  /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
              hmr: devMode
            }
          },
          'css-loader',
          'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(paths.SRC, 'index.html')
      }),
      new MiniCssExtractPlugin({

        filename: devMode ? '[name].css' : '[name].[contenthash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css'
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    }
  };
};