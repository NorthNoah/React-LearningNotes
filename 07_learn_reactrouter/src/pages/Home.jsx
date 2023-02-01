import React, { PureComponent } from "react"
import { Link, Outlet } from "react-router-dom";
import withRouter from "../hoc/withRouter";
export class Home extends PureComponent {
    navigateTo(path) {
        const { navigate } = this.props.router
        navigate(path)
    }
	render() {
	    return (
			<div>
				<h1>Home</h1>
                <div className="home-nav">
                    <Link to="/home/recommand">推荐</Link>
                    <Link to="/home/ranking">排行榜</Link>
                    <button onClick={e => this.navigateTo("/home/songmenu")}>歌单推荐</button>
                </div>
                <div className="home-content">
                    <Outlet />
                </div>
			</div>
		)
	}
}

export default withRouter(Home)
