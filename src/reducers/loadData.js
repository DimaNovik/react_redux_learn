import { LOAD_COURCES } from "../constants";

let loaded = {
    load: null
}

export default (state = [], action) => {
    switch (action.type){
        case LOAD_COURCES:
            const {load} = action;
            loaded = {
                load,
            }
            return loaded;

        default:
            return state;
    }
}
