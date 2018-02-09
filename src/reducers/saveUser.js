import { SAVE_USER } from "../constants";

let user = {
    data: null
}

export default (state = [], action) => {
    switch (action.type){
        case SAVE_USER:
            const {data} = action;
            user = {
                data,
            }
            return user;
        default:
            return state;
    }
}