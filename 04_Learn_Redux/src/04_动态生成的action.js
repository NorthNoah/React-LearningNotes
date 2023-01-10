const store = require("./store")
const { changeNameAction, addNumberAction } = require("./store/actionCreators")
// const changeNameAction = name => {
//     return {
//         type: "change_name",
//         // 属性名简写增强
//         name
//     }
// }

// 修改store中的数据：必须action
store.dispatch(changeNameAction("Noah"))
store.dispatch(changeNameAction("North"))

// const addNumberAction = num => ({
//     type: "add_number",
//     num
// })
store.dispatch(addNumberAction(10))
store.dispatch(addNumberAction(20))
store.dispatch(addNumberAction(30))
store.dispatch(addNumberAction(100))

console.log(store.getState())
