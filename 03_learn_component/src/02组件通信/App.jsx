import React, { Component } from 'react'
import AddCounter from './AddCounter'
import SubCounter from './SubCounter'

export class App extends Component {
    constructor() {
        super()
        
        this.state = {
            counter: 100
        }
    }

    // 回调函数的逻辑：父组件中
    changeCount(count) {
        this.setState({
            counter: this.state.counter + count
        })
    }


    
    // 把回调函数传给子组件
    render() {
        const { counter } = this.state
        return (
            <div>
                <h2>当前计数：{counter}</h2>
                <AddCounter addClick={(count) => this.changeCount(count)}/>
                <SubCounter addClick={(count) => this.changeCount(count)}/>
            </div>
        )
    }
}

export default App