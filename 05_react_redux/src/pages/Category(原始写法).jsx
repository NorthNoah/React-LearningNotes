import React, { PureComponent } from 'react'
// import axios from "axios";
import { connect } from "react-redux";
// import { changeBannersAction, changeRecommendsAction } from "../store/actionCreator";
import { fetchMultidataAction } from "../store/actionCreator";
export class Category extends PureComponent {
    // componentDidMount() {
    //     axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
    //         console.log(res)
    //         const banners = res.data.data.banner
    //         const recommends = res.data.data.recommend
    //         console.log(banners, recommends)
    //         this.props.changeBanners(banners.list)
    //         this.props.changeRecommends(recommends.list)
    //     })
       
    // }
    componentDidMount() {
        this.props.fetchHomeMultidata()
    }
  
    render() {
        return (
            <div>
                <h2>Category</h2>
            </div>
        )
    }
}
const mapStateToProps = state => ({
})
const mapDispatchToProps = dispatch => ({
    // changeBanners(data) {
    //     dispatch(changeBannersAction(data))
    // },
    // changeRecommends(data) {
    //     dispatch(changeRecommendsAction(data))
    // }
    fetchHomeMultidata() {
        // 派发被增强后的函数
        dispatch(fetchMultidataAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)