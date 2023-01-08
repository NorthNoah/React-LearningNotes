import React, { PureComponent } from 'react'
import Cart from './pages/Cart';
export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isLogin: false
    }
  }
  loginClick() {
    localStorage.setItem("token", "hjy")
    this.setState({ isLogin: true })
  } 
  render() {
    const { isLogin } = this.state
    return (
      <div>
        App
        <button onClick={ e => this.loginClick(e) }>登录</button>
        <Cart/>
      </div>
    )
  }
}

export default App