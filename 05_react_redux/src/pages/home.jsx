import React, { PureComponent } from 'react'
import store from '../store'
import { addNumberAction } from '../store/counter'

export class home extends PureComponent {
    constructor() {
        super()
        this.state = {
            // 注意初始化需要取store中的数据
            counter: store.getState().counter.counter
        }
    }

    componentDidMount() {
        // 组件挂载后，订阅store中数据的变化，并更新
        store.subscribe(() => {
            const state = store.getState().counter
            this.setState({ counter: state.counter })
        })
    }


    // 实现点击方法，在方法内部派发action，action由actionCreator生成
    addNumber(num) {
        store.dispatch(addNumberAction(num))
    }

    render() {
        const { counter } = this.state
        return (
            <div>
                <h2>Home Counter: {counter}</h2>
                <div>
                    <button onClick = {e => this.addNumber(1)}>+1</button>
                    <button onClick = {e => this.addNumber(5)}>+5</button>
                    <button onClick = {e => this.addNumber(8)}>+8</button>
                </div>
            </div>
        )
    }
}

export default home