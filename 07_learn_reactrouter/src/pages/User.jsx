import React, { PureComponent } from "react"
import witRouter from "../hoc/withRouter"

export class User extends PureComponent {
	render() {
		const { query } = this.props.router
		return (
            <div>
                <h2>用户姓名：{query.name}</h2>
                <h2>用户年龄：{query.age}</h2>
            </div>
        )
	}
}

export default witRouter(User)
