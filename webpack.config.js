const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
            // plugins: [require('babel-plugin-transform-obj-r-s')]
          }
        }
      }
    ]
  }
}