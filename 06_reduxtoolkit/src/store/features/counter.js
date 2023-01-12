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

        },
        subNumber(state, action) {

        }
    }
})


export default counterSlice.reducer