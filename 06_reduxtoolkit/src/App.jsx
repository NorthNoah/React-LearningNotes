import React, { PureComponent } from 'react'
import Home from "./pages/Home";
import Profile from "./pages/Profile";


export class App extends PureComponent {
    render() {
        return (
            <div>
                <h2>App Counter: 0</h2>
                <div className="pages">
                    <Home/>
                    <Profile/>
                </div>

            </div>
        )
    }
}

export default App