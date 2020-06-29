import { all, takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';
import { registerSuccess , login } from '../Auth/action';
import { REGISTERUSER } from '../Auth/actionTypes';

function registerCall(data) {
   return axios.post('http://localhost:8080/user-api/user',{
        name:data.name,
        email:data.email,
        password:data.password,
        phone:data.phonenumber
    })
    .then((res)=>{
        return res
    })
    .catch(err => console.log(err))
    // console.log(data)
}
function* registerUser(payload) {
    let data = payload;
    try {
        let response = yield call(registerCall, payload.payload)
        console.log(response)
        yield put(registerSuccess());
        yield put(login(response.data))
    } catch{

    }
}


export default function* registerSaga() {
    yield all([
        takeLatest(REGISTERUSER, registerUser)
    ])
}

