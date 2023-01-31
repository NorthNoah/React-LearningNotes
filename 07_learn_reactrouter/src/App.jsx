import React, { PureComponent } from 'react'
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";


export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <div className="header">
          <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link>
        </div>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
          </Routes>

        </div>
        <div className="footer">Footer</div>
      </div>
    )
  }
}

export default App