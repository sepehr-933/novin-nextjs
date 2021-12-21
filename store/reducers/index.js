import {combineReducers} from "redux";
import counter from './counter';
import users from './getUsers'

const appReducers = combineReducers({
    counter: counter,
    users : users
});
const rootReducer = (state, action) => {
    return  appReducers(state,action) ;
};

export default rootReducer;