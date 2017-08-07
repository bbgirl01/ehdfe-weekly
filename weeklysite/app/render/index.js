if (process.env.NODE_ENV === 'production') {
  console.log('production')
  module.exports = require('./render.prod');
} else {
  console.log('dev')
  module.exports = require('./render.dev');
}