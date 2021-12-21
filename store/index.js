import {configureStore,getDefaultMiddleware} from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import createSagaMiddleware from'redux-saga';
import rootSaga  from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, ...getDefaultMiddleware({thunk : false})];
const store = configureStore({
    reducer : rootReducer,
    middleware
});

sagaMiddleware.run(rootSaga)
export default store;