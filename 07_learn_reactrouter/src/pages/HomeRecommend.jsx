import React, { PureComponent } from "react"
import withRouter from "../hoc/withRouter";
export class HomeRecommend extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			songMenus: [
				{ id: 111, name: "华语流行" },
				{ id: 112, name: "古典音乐" },
				{ id: 113, name: "民谣歌曲" },
				{ id: 114, name: "摇滚金属" },
			],
		}
	}
    navigateToDetail(id) {
        const { navigate } = this.props.router
        navigate("/detail/" + id)
    }
	render() {
		const { songMenus } = this.state
		return (
			<div>
				<h2>Banner</h2>
				<h2>歌单的列表</h2>
				<ul>
					{songMenus.map((item) => {
                        console.log(item.id)
						return <li key={item.id} onClick={e => this.navigateToDetail(item.id)}>{item.name}</li>
					})}
				</ul>
			</div>
		)
	}
}

export default withRouter(HomeRecommend)
