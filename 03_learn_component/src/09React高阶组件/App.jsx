import React, { PureComponent } from 'react'


const userInfo = {
    name: "Noah",
    level: 99
}

function enhanceUserInfo(OriginComponent) {
    
    class NewComponent extends PureComponent {
        constructor() {

        }
      render() {
        return (
          <div>App</div>
        )
      }
    }
    
}

function Home(props) {
    return <h1>Home</h1>
}

function Profile(props) {
    return <h1>Profile</h1>
}
function HelloFriend(props) {
    return <h1>HelloFriend</h1>
}

export class App extends PureComponent {

    render() {
    return (
        <div>
        <Home/>
        <Profile/>
        <HelloFriend/>
        </div>
    )
    }
}

export default App