import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../../components/Buttons/Button';
// import Register from './register';
import Router from 'next/router';
import Link from 'next/link'
import './style.scss';

const Auth: React.SFC<any> = (props) => {
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

        <div className='inner_content'>
            <div className='title' >
                <span>انتخاب کن و سفارش بده..!</span>
            </div>
            <div className='registerButton'>
                <div className='registerbtn'>
                    <Link href='/auth/register' >
                        <Button ptb='16' prl='100' >
                            ثبت نام
		    			</Button>
                    </Link>
                </div>
                <div></div>
                <div className='registerbtn'>
                    <Button
                        ptb='13'
                        prl='100'
                        bgcolor='transparent'
                        borderSize='2'
                    >
                        فعلا نه
		    			</Button>
                </div>
            </div>
        </div>
    );
};
export default Auth;
