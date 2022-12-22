import React, { Component } from 'react'
import Home from './Home'

export class App extends Component {
    constructor() {
        super()

        this.state = {
            info: { name: "kobe", age: 30}
        }

    }
    render() {
        const { info } = this.state
        return (
            <div>
                <h2>App</h2>
                <Home {...info}/>
            </div>
        )
    }
}

export default App