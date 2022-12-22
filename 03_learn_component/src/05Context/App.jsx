import React, { Component } from 'react'
import Home from './Home'

export class App extends Component {
    constructor() {
        super()

        this.state = {
        }

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