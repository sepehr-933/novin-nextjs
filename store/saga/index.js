import { all, } from 'redux-saga/effects';
import { put, takeLatest,call,takeEvery } from 'redux-saga/effects';
import {fetchUsers,fetchUsersSuccess,fetchUsersFail} from "../reducers/users";
import {fetchUser,fetchUserFail,fetchUserSuccess} from '../reducers/getUserById'
import axios from "axios";
import {client} from "../../gate/api";

// ...
const requestUsers = client.get('/users');
// Our worker Saga: will perform the async increment task
export function* getData() {
    const request = yield call(() => requestUsers)
    try {
        yield put({
            payload : { data : request.data },
            type : fetchUsersSuccess.type ,
        });
    }
    catch (err) {
        yield put({
            payload : {error : err},
            type : fetchUsersFail.type
        });
    }
}
export function* getUserData(action) {
    console.log('action',action);
    const requestUser = client.get(`/users/${action.payload.id}`)
    const request = yield call(() => requestUser);
    console.log('req',request);

    try {
        yield put({
            payload : { user : request.data },
            type : fetchUserSuccess.type,
        });
    }
    catch (err) {
        yield put({
            payload : {error : err},
            type : fetchUserFail.type,
        });
    }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC

export default function* rootSaga() {
    yield all([
        takeLatest(fetchUsers.type,getData),
        takeLatest(fetchUser.type, getUserData)
    ])
}





