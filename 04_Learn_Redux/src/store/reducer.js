const { ADD_NUMBER, CHANGE_NAME } = require("./constants")

const initialState = {
    name: "hjy",
    counter: 100
}

// 纯函数，返回state
// 参数一：store中目前保存的state
// 参数二：本次需要更新的action（通过dispatch传入）
// 注意state需要默认值，也即初始值
function reducer(state = initialState, action) {
    // if (action.type === "change_name") {
    //     // 浅拷贝state，然后将name从action中取出，再放入原有state中
    //     // 必须返回一个新对象state
    //     return { ...state, name: action.name}
    // } else if (action.type === "add_number") {
       
    // }

    // return state
    switch(action.type) {
        case CHANGE_NAME:
            return { ...state, name: action.name}
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.num }
        default:
            return state
    }
}


module.exports = reducer