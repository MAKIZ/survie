//SET CREDENTIALS if in PRODUCTION or DEVELOPMENT
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod')
} else {
    module.exports = require('./dev')
}