const path =  require('path');
const BundleTracker = require('webpack-bundle-tracker');

const config = {
  entry: {
    lol: path.resolve(__dirname, '../src/lol.js'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],
}

module.exports = config;