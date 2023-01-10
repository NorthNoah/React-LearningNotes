const store = require("./store")

const unsubsribe = store.subscribe(() => {
    console.log("订阅数据的变化:", store.getState())
})


// 修改store中的数据：必须action
const nameAction = { type: "change_name", name: "kobe" }
store.dispatch(nameAction)


unsubsribe()
const counterAction = { type: "add_number", num: 100}
store.dispatch(counterAction)
