import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../components/Buttons/Button';
// import Register from './register';
import Router from 'next/router';
import Auth from '../../src/Container/Auth/index';
import Background from '../../src/Hoc/Background/index';

const AuthPage: React.SFC<any> = (props) => {
    // const logged = useSelector<IApplicationState, AuthState>(state => state.auth);
    const [RegisterUi, setRegisterUi] = useState(false);
    // console.log('in authpage', props)

    const handleShow = () => {
        setRegisterUi(false);
    };

    useEffect(() => {
        const { pathname } = Router
        // if (!RegisterUi) {
        //     Router.push('/register')
        // }
    })
    return (
        <>
            <Background>
                <Auth />
            </Background>
        </>

    );
};
export default AuthPage;
