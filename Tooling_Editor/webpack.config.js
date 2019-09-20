module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'source-maps',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
