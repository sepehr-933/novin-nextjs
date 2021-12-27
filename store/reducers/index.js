import {combineReducers} from "redux";
import counter from './counter';
import users from './users'
import user from "./getUserById";

const appReducers = combineReducers({
    counter: counter,
    users : users,
    user: user,
});
const rootReducer = (state, action) => {
    return  appReducers(state,action) ;
};

export default rootReducer;