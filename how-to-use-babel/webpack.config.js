const path = require('path'); //웹팩으로 번들링 할 파일을 지정한다. 

module.exports = {
  entry: './src/code.js',
  output: {  //번들링한 결과를 code.bundle.js 파일로 저장한다.
    path: path.resolve(__dirname, 'dist'),
    filename: 'code.bundle.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }], //babel.config.js의 설정을 기반으로 bebel-loader가 처리하도록 설정
  },
  optimization: { minimizer: [] },  //웹팩은 기본적으로 자바스크립트 파일을 압축한다.
}