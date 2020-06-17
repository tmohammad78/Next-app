import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Register from './register';
import Router from 'next/router'
// import './style.module.scss';

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
        <div>
            <div className='image-background'>
                <picture>
                    <div className='my_img'></div>
                </picture>
                <div>
                    lvnjbfjb
				</div>

                <Register />
                {/* <MainAuth callBackChangeState={handleShow} /> */}
                {/* <Route
					exact
					path={'/auth'}
					component={() => (
						<MainAuth {...props} callBackChangeState={handleShow} handleSkipAuth={handleSkipAuth} />
					)}
				/>
				<Route exact path='/auth/test' component={Register} /> */}
            </div>

        </div>
    );
};
export default AuthPage;
