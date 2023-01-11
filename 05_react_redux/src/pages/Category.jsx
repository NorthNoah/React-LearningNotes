import React, { PureComponent } from 'react'
import axios from "axios";
import { connect } from "react-redux";
import { changeBannersAction, changeRecommendsAction } from "../store/actionCreator";

export class Category extends PureComponent {
    componentDidMount() {
        axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
            console.log(res)
            const banners = res.data.data.banner
            const recommends = res.data.data.recommend
            console.log(banners, recommends)
            this.props.changeBanners(banners.list)
            this.props.changeRecommends(recommends.list)
        })
       
    }

    render() {
        return (
            <div>
                <h2>Category</h2>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    changeBanners(data) {
        dispatch(changeBannersAction(data))
    },
    changeRecommends(data) {
        dispatch(changeRecommendsAction(data))
    }
})

export default connect(null, mapDispatchToProps)(Category)