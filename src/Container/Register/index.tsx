import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/Auth/action';

import FormLogin from '@components/Login/form';
// import { registerAction, loginAction, checkVerfify } from '../../Redux/auth/action';
// import firebase from '../../Config/firebaseconfig';
// import { MyFormValues } from '../../../Types/index';

import './style.scss';

declare global {
    interface Window {
        recaptchaVerifier: any,
        prompt: (message?: string, _default?: string) => string | null
    }
}
const initialState = {
    email: '',
    phonenumber: '',
    password: ''
}
const Register: React.SFC = () => {
    // const history = useHistory();
    const dispatch = useDispatch();
    const [newUser, setNewUser] = useState(true);
    // const [value, setValues] = useState<MyFormValues>(initialState);

    const handleAuth = async (values: MyFormValues) => {
        console.log(values);
        dispatch(registerUser(values))
    };
    return (
        <div className='register_box'>
            <i
                className='fo fo-arrow-left'
                onClick={() => {
                    // history.goBack();
                }}
            />
            <div>
                <FormLogin submitAction={handleAuth} />
            </div>
        </div>
    );
};
export default Register;
