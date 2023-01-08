import React, { PureComponent } from 'react'

import enhancedUserInfo from "./hoc/enhanced_props";

const Home = enhancedUserInfo(function Home(props) {
    return <h1>Home: {props.level}</h1>
})

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