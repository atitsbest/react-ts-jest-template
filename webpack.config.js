var path = require('path');

module.exports = {
  entry: {
      "app": './src/index.ts',
      "test": './src/index.test.ts'
  },
  output: {
    filename: './dist/[name].bundle.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: [".tsx", ".ts", ".js"]
  }
};