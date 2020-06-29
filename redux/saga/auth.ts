import { all, takeLatest, call } from "redux-saga/effects";
import { REGISTERUSER } from '../Auth/actionTypes';

function registerCall(payload) {

    console.log(payload)
}
function* registerUser(payload) {
    let data = payload;
    console.log(payload);

    try {
        let response = yield call(registerCall, payload)
        console.log(response)
    } catch{

    }
}


export default function* registerSaga() {
    yield all([
        takeLatest(REGISTERUSER, registerUser)
    ])
}

