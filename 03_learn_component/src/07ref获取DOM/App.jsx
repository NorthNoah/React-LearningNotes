import React, { PureComponent } from 'react'
import { createRef } from 'react'

export class App extends PureComponent {
    constructor() {
        super()

        this.state = {

        }

        this.titleRef = createRef()
        this.titleEL = null
    }
    getNativeDOM() {
        console.log(this.titleRef.current)
        console.log(this.titleEL)
    }

    render() {
        return (
        <div>
            <h2 ref={this.titleRef}>HJY</h2>
            <h2 ref={el => {this.titleEL = el}}>HJYinCA</h2>
            <button onClick={e => this.getNativeDOM()}>获取DOM</button>
        </div>
        )
    }
}

export default App