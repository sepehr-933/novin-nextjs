import {combineReducers} from "redux";
import counter from './counter';

const appReducers = combineReducers({
    counter: counter,
});
const rootReducer = (state, action) => {
    return  appReducers(state,action) ;
};

export default rootReducer;