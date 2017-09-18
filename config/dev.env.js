var merge = require('webpack-merge');
var prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://demo.g9zz.com"',
  APP_ORIGIN: '"https://demo.g9zz.com"'
})
