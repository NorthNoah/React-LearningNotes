import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber, subNumber } from "./store/modules/counter";

const App = memo(() => {
    // 返回一个state对象,直接获取state中的数据
    const state = useSelector((state) => {
        return {
            count: state.counter.count
        }
    })

    // 使用dispatch直接派发action
    const dispatch = useDispatch()
    function addNumberHander(num, isAdd = true) {
        if (isAdd) {
            dispatch(addNumber(num))
        } else {
            dispatch(subNumber(num))
        }
    }

    return (
        <div>
            <h2>当前计数：{state.count}</h2>
            <button onClick={e => addNumberHander(1)}>+1</button>
            <button onClick={e => addNumberHander(5)}>+5</button>
            <button onClick={e => addNumberHander(10, false)}>-10</button>
        </div>
    )
})
export default App