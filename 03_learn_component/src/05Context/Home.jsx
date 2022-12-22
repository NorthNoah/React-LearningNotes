import React, { Component } from 'react'
import NhContext from './context/theme-context'
import HomeBanner from './HomeBanner'
import HomeInfo from './HomeInfo'

export class Home extends Component {
  render() {
    return (
      <div>
        {/* 为context提供值 */}
        <NhContext.Provider value={{name: "hjy", age: "24"}}>
          <HomeInfo/>
          <HomeBanner/>
        </NhContext.Provider>

      </div>
    )
  }
}

export default Home