import React, { PureComponent } from 'react'
import homeStyle from "./Home.module.css";
export class Home extends PureComponent {
  render() {
    return (
        <div className={homeStyle.section}>
            Home
        </div>
    )
  }
}

export default Home