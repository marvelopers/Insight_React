const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   mode: 'production',
//   optimization: { minimizer: [] }
// }

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png||jpg||gif)$/,
        use: [
          {
            loader: 'file-loader',
            option: {
              limit: 8192
            }
          }
        ],
      },
      {
        test: /\.txt$/,
        use: ['raw-loader'],
      }
    ]
  },
  mode: 'production'
}