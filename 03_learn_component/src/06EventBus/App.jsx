import React, { Component } from 'react'
import Home from './Home'
import eventBus from './utils/event-bus'

export class App extends Component {
    constructor() {
        super()

        this.state = {
        }

    }

    // 组件挂载后，对事件总线上的事件进行监听
    componentDidMount() {
        // 注意函数没有绑定this，需要bind或函数本身使用箭头函数
        eventBus.on("bannerPrev", this.bannerPrevClick)
    }

    // 抽取方法，用于监听/取消监听
    bannerPrevClick(index) {
        console.log("app中监听到bannerPrev", index)
    }

    componentWillUnmount() {
        eventBus.off("bannerPrev", this.bannerPrevClick)
    }




    render() {
        return (
            <div>
                <h2>App</h2>
                <Home/>
            </div>
        )
    }
}

export default App