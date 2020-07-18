import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	STORE_USER_DETAILS,
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_FAILED,
	SET_AUTH_ERROR_MESSAGE,
	CLEAR_USER_DETAILS,
	SET_TOAST_MESSAGE,
	FORGOT_PASSWORD_INIT_REQUEST,
	FORGOT_PASSWORD_INIT_FAILED,
	FORGOT_PASSWORD_INIT_SUCCESS,
	SHOW_FORGOT_PASSWORD_RESET_FORM
} from './types';
//import Amplify, { Auth } from 'aws-amplify';
import Router from 'next/router';
import { login, logout } from '../../../lib/auth';
import { toast } from 'react-toastify';
import validator from 'validator';
import * as gtag from '../../../lib/gtag'

export const Signup = ({ email, password, name }) => {
	return async (dispatch, getState) => {
		//validate inputs
		if (password.length < 8) {
			dispatch({
				type: SET_AUTH_ERROR_MESSAGE,
				payload: {
					passwordMessage: 'Password should be at least 8 characters'
				}
			});
			return;
		} else {
			dispatch({
				type: SET_AUTH_ERROR_MESSAGE,
				payload: {
					passwordMessage: null
				}
			});
		}

		let isEmail = validator.isEmail(email);
		if (!isEmail) {
			dispatch({
				type: SET_AUTH_ERROR_MESSAGE,
				payload: {
					emailMessage: 'Invalid email address'
				}
			});
			return;
		} else {
			dispatch({
				type: SET_AUTH_ERROR_MESSAGE,
				payload: {
					emailMessage: null
				}
			});
		}

		dispatch({
			type: SIGNUP_REQUEST
		});

		try {
			let user = await Auth.signUp({
				username: email,
				password: password,
				attributes: {
					email: email,
					name: name,
					picture: ''
				}
			});

			if (user) {
				//login newly signed up user
				dispatch({
					//clear error messages
					type: SET_AUTH_ERROR_MESSAGE,
					payload: {
						passwordMessage: null,
						nameMessage: null,
						usernameMessage: null,
						emailMessage: null
					}
				});


				//save sign up event
				gtag.event({
					action: 'sign_up',
					category: 'User',
					label: 'method',
					value: 'email'
				})

				dispatch(Login({ email, password, isNewUser: true }));


			}
		} catch (err) {
			console.log(err);
			//toast.error(err.message, { hideProgressBar: true, autoClose: 15000 });


			//error message to show the user
			let message = () => {
				switch (err.code) {
					case 'UsernameExistsException':
						return err.message
					case 'NetworkError':
						return 'Error occured, check connection'
					default:
						return 'Something went wrong, please try again'
				}
			}

			//show my toast
			dispatch({
				type: SET_TOAST_MESSAGE,
				payload: message()
			})
			dispatch({
				type: SIGNUP_FAILED
			});
		}
	};
};

export const SocialSignIn = ({ provider }) => {
	return async (dispatch, getState) => {
		try {
			let user = await Auth.federatedSignIn({ provider: provider });
			if (user) {
				dispatch(getLoggedInUser());
			}
		} catch (err) {
			toast.error(err.message, { hideProgressBar: true, autoClose: 15000 });
		}
	};
};

export const Login = ({ email, password, isNewUser }) => {
	return async (dispatch, getState) => {
		dispatch({
			type: LOGIN_REQUEST
		});
		try {

			let user = await Auth.signIn(email, password);
			if (user) {
				dispatch({
					type: LOGIN_SUCCESS
				});

				//save login event
				gtag.event({
					action: 'login',
					category: 'User',
					label: 'method',
					value: 'email'
				})

				await dispatch(getLoggedInUser(isNewUser));
			}
		} catch (err) {


			// store.addNotification({
			// 	title: 'Error',
			// 	message: err.message,
			// 	type: 'danger',
			// 	insert: 'top',
			// 	container: 'top-right',
			// 	animationIn: [ 'animated', 'slideInRight' ],
			// 	animationOut: [ 'animated', 'slideOutRight' ],
			// 	dismiss: {
			// 		duration: 5000
			// 	}
			// });
			// toast.error(err.message, {
			// 	className: 'px-4 py-2 rounded-lg bg-red-400 text-2xl',
			// 	bodyClassName: 'px-4 py-2 rounded-lg ',
			// 	progressClassName: 'fancy-progress-bar',
			// 	hideProgressBar: true,
			// 	autoClose: 15000
			// });
			let message = () => {
				switch (err.code) {
					case 'NotAuthorizedException':
						return err.message
					case 'NetworkError':
						return 'Error occured, check connection'
					default:
						return 'Something went wrong, please try again'
				}
			}


			//display my toast
			dispatch({
				type: SET_TOAST_MESSAGE,
				payload: message()//err.message
			})

			dispatch({
				type: LOGIN_FAILED
			});
		}
	};
};

export const getLoggedInUser = (isNewUser) => {
	return async (dispatch, getState) => {
		let state = getState();
		try {
			let user = await Auth.currentAuthenticatedUser();
			let { idToken } = await Auth.currentSession();

			//store auth token in cookie
			login({ token: idToken.jwtToken });

			// navigate to Auth'd page
			//Router.push('/feed');

			//end signup processing
			dispatch({
				type: SIGNUP_SUCCESS
			});

			//end login processing
			dispatch({
				type: LOGIN_SUCCESS
			});

			let { attributes } = user;
			dispatch({
				type: STORE_USER_DETAILS,
				payload: { ...attributes }
			});

			if (isNewUser) {
				//send verification code
				//let verify = await Auth.verifyCurrentUserAttribute('email')
				//console.log('verify', verify)

				//go to choose-interest page
				Router.push('/choose-interests');




			} else {
				Router.push('/feed');
			}

		} catch (err) {
			console.log(err);
		}
	};
};

export const LogoutUser = () => {
	return async (dispatch, getState) => {
		let user = await Auth.signOut();
		console.log('log out', user);
		logout(); //remove cookie
		dispatch({
			type: CLEAR_USER_DETAILS
		});
	};
};
export const getUserId = () => {
	return async (dispatch, getState) => {
		let state = getState()
		let userId = state.auth.userDetails.sub
		return userId

	};
};

export const InitForgotPassword = ({ email }) => {
	return async (dispatch, getState) => {
		dispatch({ type: FORGOT_PASSWORD_INIT_REQUEST })
		try {
			let data = await Auth.forgotPassword(email)
			//let data = await Auth.verifyCurrentUserAttributeSubmit('email', email)
			console.log('data', data)
			if (data) {
				dispatch({ type: FORGOT_PASSWORD_INIT_SUCCESS })
				dispatch({ type: SET_TOAST_MESSAGE, payload: 'Enter the verification code sent to your email' })
				dispatch({ type: SHOW_FORGOT_PASSWORD_RESET_FORM, payload: true })
			}
		} catch (e) {
			dispatch({ type: FORGOT_PASSWORD_INIT_FAILED })
			dispatch({ type: SET_TOAST_MESSAGE, payload: 'Something went wrong. Please try again' })
		}
	};
};

export const CompleteForgotPassword = ({ email, verificationCode, password, confirmPassword }) => {
	return async (dispatch, getState) => {
		console.log(email, verificationCode, password, confirmPassword)
		dispatch({ type: FORGOT_PASSWORD_INIT_REQUEST })
		if (password !== confirmPassword) {
			dispatch({
				type: SET_TOAST_MESSAGE,
				payload: {
					passwordMessage: 'Passwords don\'t match'
				}
			});
			return;
		}
		try {
			await Auth.forgotPasswordSubmit(email, verificationCode, password)


			dispatch({ type: FORGOT_PASSWORD_INIT_SUCCESS })
			Router.push('/login')
			dispatch({ type: SHOW_FORGOT_PASSWORD_RESET_FORM, payload: false })
			dispatch({ type: SET_TOAST_MESSAGE, payload: 'Password changed successful..Login with your new password' })
			dispatch({ type: CLEAR_TOAST_MESSAGE })



		} catch (e) {
			dispatch({ type: FORGOT_PASSWORD_INIT_FAILED })
			dispatch({ type: SET_TOAST_MESSAGE, payload: 'Something went wrong. Please try again' })
		}
	};
};
