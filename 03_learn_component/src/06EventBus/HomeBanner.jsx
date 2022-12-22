import React, { Component } from 'react'
import eventBus from './utils/event-bus'

export class HomeBanner extends Component {
    // 定义按钮事件，并定义传递方式、携带参数
    prevClick() {
        console.log("上一个")
        eventBus.emit("bannerPrev", 10)
    }

    nextClick() {
        console.log("下一个")
        eventBus.emit("bannerNext", 11)
    }

    render() {

        return (
            <div>
                <div>HomeBanner</div>
                <button onClick={() => this.prevClick()}>上一个</button>
                <button>下一个</button>
            </div>
        )
    }
}

export default HomeBanner