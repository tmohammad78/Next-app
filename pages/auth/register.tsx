import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RegisterForm from '../../src/Container/Register/index'
import Background from '../../src/Hoc/Background/index';
const Register: React.SFC<any> = (props) => {
	// const logged = useSelector<IApplicationState, AuthState>(state => state.auth);
	const [RegisterUi, setRegisterUi] = useState(false);
	// console.log('in authpage', props)

	const handleShow = () => {
		setRegisterUi(false);
	};

	return (
		<Background active>
			<RegisterForm />
		</Background>
	);
};
export default Register;
