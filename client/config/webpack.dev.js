const merge =  require('webpack-merge');
const common =  require('./webpack.common');

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: 'http://localhost:3000/',
  }
});

console.log(config)

module.exports = config;