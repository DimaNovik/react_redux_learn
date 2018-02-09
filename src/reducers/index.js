import { combineReducers } from "redux";
import user from './saveUser';
import loaded from './loadData';

export default combineReducers({
    user, loaded
})
