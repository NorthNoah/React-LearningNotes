import React, { PureComponent } from 'react'
import store from '../store'
import { subNumberAction } from '../store/counter'


export class profile extends PureComponent {
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

    subNumber(num) {
        store.dispatch(subNumberAction(num))
    }
    render() {
        const { counter } = this.state
        return (
            <div>
                <h2>Profile Counter: {counter}</h2>
                <div>
                    <button onClick={e => this.subNumber(1)}>-1</button>
                    <button onClick={e => this.subNumber(5)}>-5</button>
                    <button onClick={e => this.subNumber(8)}>-8</button>
                </div>
            </div>
        )
    }
}

export default profile