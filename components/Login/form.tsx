import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import { validation } from '../../src/Helper/validation';
import { Button } from '../Buttons/Button';
import Input from '../Input/index';
// import { MyFormValues } from '../../../types/index';
import './style.scss';


interface Props {
	submitAction: (values) => void
}

interface IInputForm {
	[x: string]: any;
	field: any;
	className: string;
	meta: string;
	form: {
		touched: boolean;
		errors: string;
	};
}
const FormLogin = ({ submitAction }: Props) => {
	const initialValues = { email: '', phonenumber: '', password: '' };

	const InputForm = ({ field, className, meta, form: { touched, errors }, ...props }: IInputForm) => {
		return (
				<div className='inputPack  clearfix'>
					<Input autoComplete={false} {...field} {...props} />
					{errors[field.name] && <div className='errorMessage'>{errors[field.name]}</div>}
				</div>

		);
	};

	const submitForm = (values) => {
		console.log(values);
		submitAction(values);
	};


	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validation}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			{({ isSubmitting, values , isValid , dirty }) => (
				<Form className='form'>
					<Field name='name' type='text' label='Name' component={InputForm} />
					<Field name='email' type='email' label='Email' component={InputForm} />
					<Field name='password' type='password' label='password' component={InputForm} />
					<Field
						name='phonenumber'
						autocompelete={true}
						type='text'
						label='Mobile'
						minlength="11"
						maxlenght="11"
						component={InputForm}
					/>
					<Button
						type='submit'
						// onClick={test}
						className='registerBtn'
						onClick={() => submitForm(values)}
						disabled={!(isValid && dirty)}
						
					>
						<i className='fo fo-angle-left' />
						<span>دریافت کد</span>
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default FormLogin;
