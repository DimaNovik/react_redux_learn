import {SAVE_USER, LOAD_COURCES} from "../constants";

export function addUser(data) {
    const action = {
        type: SAVE_USER,
        data: data
    }
    return action;
}

export function loadData(load) {
    const action = {
        type: LOAD_COURCES,
        load: load,
    }
    return action;
}


