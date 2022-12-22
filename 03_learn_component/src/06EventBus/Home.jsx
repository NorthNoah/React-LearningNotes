import React, { Component } from 'react'
import HomeBanner from './HomeBanner'
import HomeInfo from './HomeInfo'

export class Home extends Component {
  render() {
    return (
      <div>
        {/* 为context提供值 */}
        <HomeBanner/>
        <HomeInfo/>
      </div>
    )
  }
}

export default Home