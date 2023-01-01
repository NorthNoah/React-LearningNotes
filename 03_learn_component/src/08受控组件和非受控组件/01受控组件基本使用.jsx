import React, { PureComponent } from 'react'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            username: ""
        }
    }

    inputChange(event) {
        console.log("inputChange:", event.target.value)
        this.setState({ username: event.target.value}, () => {
            console.log(this.state.username)
        })
    }

    render() {
        const { username } = this.state
        return (
        <div>
            <input type="text" value={username} onChange={e => this.inputChange(e)}/>
            <h2>username:{username}</h2>
        </div>
        )
    }
}

export default App