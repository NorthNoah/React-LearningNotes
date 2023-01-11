import { ADD_NUMBER, SUB_NUMBER, CHANGE_BANNER, CHANGE_RECOMMEND} from "./constants";

export const addNumberAction = num => {
    return {
        type: ADD_NUMBER,
        num
    }
}


export const subNumberAction = num => {
    return {
        type: SUB_NUMBER,
        num
    }
}



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