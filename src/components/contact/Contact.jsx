import { useState } from 'react';

const Contact = () => {
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		password: '',
		isDirty: {
			name: false
		},
		errors: {
			name: false,
			email: false,
			password: false
		}
	});

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					id='name'
					name='name'
					onChange={event =>
						changeFormValues(event.target, formValues, setFormValues)
					}
				/>
				{formValues.isDirty.name && formValues.errors.name && (
					<span>El nombre no es correcto</span>
				)}
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					id='email'
					name='email'
					onChange={event =>
						changeFormValues(event.target, formValues, setFormValues)
					}
				/>
				{formValues.errors.email && <span>El email no es correcto</span>}
			</div>
			<div>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					name='password'
					onChange={event =>
						changeFormValues(
							event.target,
							formValues,
							setFormValues,
							errors,
							setErrors
						)
					}
				/>
			</div>
			<input
				type='submit'
				value='SEND'
				disabled={!Object.values(formValues.errors).every(error => !error)}
			/>
		</form>
	);
};

const validateForm = (name, value, formValues, setFormValues) => {
	const formatedValue = value.trim();
	const regexName = /^[a-z]+$/;
	if (name === 'name') {
		const isValidName = !regexName.test(formatedValue);
		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				name: isValidName
			},
			isDirty: {
				...formValues.isDirty,
				name: true
			}
		});
	}

	// if (name === 'email') {
	// 	const isValidEmail = !regexEmail.test(formatedValue);
	// 	setFormValues({
	// 		...formValues,
	// 		errors: {
	// 			...formValues.errors,
	// 			email: isValidEmail
	// 		}
	// 	});
	// }

	// if (name === 'password') {
	// 	// Validación
	// }
};

const changeFormValues = (input, formValues, setFormValues) => {
	const { name, value } = input;
	setFormValues({ ...formValues, [name]: value });
	validateForm(name, value, formValues, setFormValues);
};

const handleSubmit = event => {
	event.preventDefault();
};

/* 
	FORMS 

	No controlada -> Los datos del formulario no están controlados por react. Los datos se obtienen a través de un evento del DOM

	Controlada -> Los datos del formulario los controla react. Los datos se obtienen a través de un estado

*/

export default Contact;
