import { STORE_USER_DETAILS, CLEAR_USER_DETAILS, SET_AUTH_ERROR_MESSAGE } from '../actions/types';

const INITIAL_STATE = {
	//Auth
	authErrorMessages: {
		passwordMessage: null,
		nameMessage: null,
		usernameMessage: null,
		emailMessage: null
	},
	userDetails: {
		name: ''
	},
	redirectPath: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case STORE_USER_DETAILS:
			return { ...state, userDetails: action.payload };
		case CLEAR_USER_DETAILS:
			return { ...state, userDetails: { sub: null } };

		case SET_AUTH_ERROR_MESSAGE:
			return { ...state, authErrorMessages: { ...action.payload } };
		default:
			return state;
	}
};
