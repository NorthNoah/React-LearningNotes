import React, { Component } from 'react'

export class AddCounter extends Component {
    // 实现按钮绑定的方法，实质上是对传来的函数进行调用，传入子组件里按钮对应的参数
    addCount(count) {
        // 取出来父组件传来的函数
        this.props.addClick(count)
    }
    render() {
        return (
            <div>
                <button onClick={e => this.addCount(1)}>+1</button>
                <button onClick={e => this.addCount(5)}>+5</button>
                <button onClick={e => this.addCount(10)}>+10</button>
            </div>
        )
    }

    
}

export default AddCounter