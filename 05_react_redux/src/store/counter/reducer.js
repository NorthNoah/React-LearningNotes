import * as actionType from "./constants";
const initialState = {
    counter: 200
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionType.ADD_NUMBER:
            //先展开，再替换相应变量 
            return { ...state, counter: state.counter + action.num }
        case actionType.SUB_NUMBER:
            return { ...state, counter: state.counter - action.num }
        default:
            return state
    }
}

export default reducer