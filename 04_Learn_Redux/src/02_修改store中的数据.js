const store = require("./store")

console.log(store.getState())

// 修改store中的数据：必须action
const nameAction = { type: "change_name", name: "kobe" }
store.dispatch(nameAction)
console.log(store.getState())

const counterAction = { type: "add_number", num: 100}
store.dispatch(counterAction)
console.log(store.getState())

