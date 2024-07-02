const mod1 = require('./modules')

module.exports = {
    send: mod1.send,
    ...require("./module0")
}