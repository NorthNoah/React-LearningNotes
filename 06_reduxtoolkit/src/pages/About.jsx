import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { fetchMultidataAction } from "../store/features/home";
// import axios from "axios"
// import store from "../store/index"
// import { changeBanners, changeRecommends } from "../store/features/home"
export class About extends PureComponent {
	// // 直接发送请求
	componentDidMount() {
	    // axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
		// 	console.log(res);
		// 	const banners = res.data.data.banner.list;
		// 	const recommends = res.data.data.recommend.list;
		// 	store.dispatch(changeBanners(banners));
		// 	store.dispatch(changeRecommends(recommends));
		// });

        // 直接执行props中的方法即可
        this.props.fetchMultidata()
	}
	render() {
		const { banners, recommends } = this.props
		return (
			<div>
				<div className="banner">
					<h2>轮播图</h2>
					<ul>
						{banners.map((item, index) => {
							return <li key={index}>{item.title}</li>
						})}
					</ul>
				</div>

				<div className="recommend">
					<h2>推荐数据：</h2>
					<ul>
						{recommends.map((item, index) => {
							return <li key={index}>{item.title}</li>
						})}
					</ul>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	banners: state.home.banners,
	recommends: state.home.recommends,
})
const mapDispatchToProps = dispatch => ({
    fetchMultidata() {
        dispatch(fetchMultidataAction())
    }
})
// connect的返回值是高阶组件
export default connect(mapStateToProps, mapDispatchToProps)(About)
