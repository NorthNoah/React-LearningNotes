import React, { Component } from 'react'
import NavBar from './nav-bar/index'
import NavBar2 from './nav-bar/index copy'
export class App extends Component {
  render() {
    const leftSlot = <strong>返回</strong>
    const centerSlot = <h2>购物街</h2>
    const rightSlot = <i>更多</i>
    return (
      <div>
        <NavBar>
          <button>按钮</button>
          <h2>我是标题</h2>
          <i>斜体文字</i>
        </NavBar>
        <NavBar2
          leftSlot={leftSlot}
          centerSlot={centerSlot}
          rightSlot={rightSlot}
        />
      </div>
    )
  }
}

export default App