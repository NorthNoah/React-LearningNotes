import * as actionType from "./constants";
const initialState = {
    counter: 100,
    banners: [],
    recommends: []

}

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionType.ADD_NUMBER:
            //先展开，再替换相应变量 
            return { ...state, counter: state.counter + action.num }
        case actionType.SUB_NUMBER:
            return { ...state, counter: state.counter - action.num }
        case actionType.CHANGE_BANNER:
            return { ...state, banners: action.banners }
        case actionType.CHANGE_RECOMMEND:
            return { ...state, recommends: action.recommends }
        default:
            return state
    }
}

export default reducer