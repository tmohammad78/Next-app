import { all, takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';
import Router from 'next/router';
import { registerSuccess , login } from '../Auth/action';
import { REGISTERUSER } from '../Auth/actionTypes';
import Cookies from 'js-cookie'
import Axios from "@Api/axios";

function registerCall(data) {
   return Axios.post('/user',{
        name:data.name,
        email:data.email,
        password:data.password,
        phone:data.phonenumber
    },{
        'Content-Type': 'text/plain'
    })
    .then((res)=>{
        return res
    })
    .catch((err:string) => console.log(err))
    // console.log(data)
}


function* registerUser(payload) {
    let data = payload;
    try {
        let response = yield call(registerCall, payload.payload)
        console.log('res',response)
        yield put(registerSuccess());
        Cookies.set('token',response.data.token);
        // yield put(setCookie(response.data.token));
        debugger
        yield put(login(response.data));
        // response.data.token  ? Router.push('/') : null   
    } catch{
        console.log('have error')
    }
}


export default function* registerSaga() {
    yield all([
        takeLatest(REGISTERUSER, registerUser)
    ])
}

