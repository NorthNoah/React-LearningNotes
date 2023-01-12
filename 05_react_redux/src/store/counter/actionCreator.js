import { ADD_NUMBER, SUB_NUMBER} from "./constants";
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
