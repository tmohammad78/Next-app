import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import MainAuth from './Main/index';
// import './style.module.scss';

const Register: React.SFC<any> = (props) => {
	// const logged = useSelector<IApplicationState, AuthState>(state => state.auth);
	const [RegisterUi, setRegisterUi] = useState(false);
	// console.log('in authpage', props)

	const handleShow = () => {
		setRegisterUi(false);
	};

	return (
		<div>
			<div className='image-background'>
				<picture>
					<div className='my_img'></div>
				</picture>
				<div>
					register
				</div>
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
export default Register;
