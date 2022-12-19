import React, { Component } from 'react'

export class MainBanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { title, banners } = this.props
    return (
      <div>
        <h2>封装一个轮播图：{title}</h2>
        <ul>
          {
            banners.map(item => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default MainBanner