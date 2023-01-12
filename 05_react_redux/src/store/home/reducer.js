import * as actionType from "./constants";
const initialState = {
    banners: [],
    recommends: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionType.CHANGE_BANNER:
            return { ...state, banners: action.banners }
        case actionType.CHANGE_RECOMMEND:
            return { ...state, recommends: action.recommends }
        default:
            return state
    }
}

export default reducer