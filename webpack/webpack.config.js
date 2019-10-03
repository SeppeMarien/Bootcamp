const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, args) => {
  const devMode = args.mode !== 'production';

  return {
    entry: './src/myApp/main.js',
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, 'src'),
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.js$/, // apply babel-loader for any js file
          loader: 'babel-loader',
          exclude: /node_modules/ // except in node_modules
        }, {
          test:  /\.(sa|sc|c)ss$/,
          loader: 'style-loader!css-loader!sass-loader'
        }
      ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    plugins: [new CleanWebpackPlugin()]
  };
};