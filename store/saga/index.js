import { all, fork } from 'redux-saga/effects';
import { put, takeEvery,call } from 'redux-saga/effects';
import {fetchUsers} from "../reducers/getUsers";
import {useQuery} from "react-query";
import axios from "axios";


// ...
const url = 'https://jsonplaceholder.typicode.com/users'
const requestUser = axios.get(url);
// Our worker Saga: will perform the async increment task
export function* getData() {
    try {
        const request = yield call(requestUser)
        const {data} = request
        yield put(fetchUsers(data))
        console.log('aa',data);
    }
    catch (err) {
        console.log(err)
    }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchGetData() {
    yield takeEvery(fetchUsers().type, getData)
}


export default function* rootSaga() {
    yield all([
        watchGetData()
    ])
}



