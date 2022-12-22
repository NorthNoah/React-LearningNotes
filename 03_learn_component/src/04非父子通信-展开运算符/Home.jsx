import React, { Component } from 'react'

export class Home extends Component {
  render() {
    const { name, age } = this.props
    return (
      <div>
        <h2>姓名：{name}</h2>
        <h2>年龄：{age}</h2>
      </div>
    )
  }
}

export default Home