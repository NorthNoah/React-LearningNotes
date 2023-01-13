import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    // type
    name: "counter",
    // 初始状态
    initialState: {
        counter: 888
    },

    // 相当于每个case，根据action修改state
    reducers: {
        addNumber(state, action) {
            state.counter = state.counter + action.payload

        },
        subNumber(state, action) {
            // 可以取到action内传递的参数payload
            const payload = action.payload
            // 直接修改state内部变量即可，无需返回新对象
            state.counter = state.counter - payload
        }
    }
})

export const { addNumber, subNumber } = counterSlice.actions

export default counterSlice.reducer