// 注意在node中CommonJS
const { createStore } = require("redux")
const reducer = require("./reducer.js")

// 将reducer函数放入createStore，自动获取state
const store = createStore(reducer)

module.exports = store

