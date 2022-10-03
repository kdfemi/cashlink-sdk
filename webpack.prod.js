const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

 module.exports = merge(common, {
   mode: 'production',
   devtool: 'inline-source-map',
   plugins: [
    new Dotenv(
        new Dotenv({
            path: './.env.prod', 
            silent: false,
            defaults: false,
        })
    )
  ]
 });