import React, { Component } from 'react'
import NhContext from './context/theme-context'

export class HomeInfo extends Component {
  render() {
    const { name, age} = this.context
    return (
      <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
      </div>
    )
  }
}
// 3.指定contextType
HomeInfo.contextType = NhContext
export default HomeInfo