import { CHANGE_BANNER, CHANGE_RECOMMEND } from "./constants";
import axios from "axios";

export const changeBannersAction = data => {
    return {
        type: CHANGE_BANNER,
        banners: data
    }
}


export const changeRecommendsAction = data => {
    return {
        type: CHANGE_RECOMMEND,
        recommends: data
    }
}

// 异步函数，返回一个函数，这个函数在dispatch后会被执行
// 最终派发的是拿到数据后的对象
export const fetchMultidataAction = () => {
    return (dispatch, getState) => {
        axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
            const banners = res.data.data.banner
            const recommends = res.data.data.recommend
            dispatch(changeBannersAction(banners.list))
            dispatch(changeRecommendsAction(recommends.list))
        })
    }

}