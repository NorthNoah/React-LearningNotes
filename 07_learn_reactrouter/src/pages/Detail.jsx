import React, { PureComponent } from 'react'
import withRouter from "../hoc/withRouter";

export class Detail extends PureComponent {
    render() {
      const { param } = this.props.router
      
    return (
      <div>
        <h1>Detail Page</h1>
        <h2>id: { param.id }</h2>
      </div>
    )
  }
}

export default withRouter(Detail)