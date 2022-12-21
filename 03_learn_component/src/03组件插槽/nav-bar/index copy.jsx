import React, { Component } from 'react'
import './style.css'
export class NavBar2 extends Component {

  render() {
    // 相当于获取了父组件传来的节点元素
    const { leftSlot, centerSlot, rightSlot } = this.props
    
    return (
        <div className='nav-bar'>
            <div className="left">{leftSlot}</div>
            <div className="center">{centerSlot}</div>
            <div className="right">{rightSlot}</div>
        </div>
    )
  }
}

export default NavBar2