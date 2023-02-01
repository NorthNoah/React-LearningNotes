import React, { PureComponent } from 'react'
import { Navigate } from 'react-router-dom'

export class Login extends PureComponent {
  constructor() {
    super()
    this.state = {
      isLogin: false
    }
  }
  
  login() {
    this.setState({ isLogin: true })
  }

  render() {
    const { isLogin } = this.state
    return (
      <div>
        <h1>Login Page</h1>
        {/* {isLogin ? <Navigate to="/profile"></Navigate> : <button>登录</button>} */}
        {!isLogin ? <button onClick={e => this.login()}>登录</button> : <Navigate to="/profile"></Navigate>}
      </div>
    )
  }
}

export default Login