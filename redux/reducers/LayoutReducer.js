import { OPEN_NAVIGATION, CLOSE_NAVIGATION, SET_TOAST_MESSAGE, CLEAR_TOAST_MESSAGE, SHOW_TOAST, HIDE_TOAST, SHOW_FORGOT_PASSWORD_RESET_FORM } from '../actions/types';

const INITIAL_STATE = {
    showNavigation: false,
    showToast: false,
    toastMessage: null,
    showForgotPasswordResetForm: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_NAVIGATION:
            return { ...state, showNavigation: true }
        case CLOSE_NAVIGATION:
            return { ...state, showNavigation: false }
        case SHOW_TOAST:
            return { ...state, showToast: true }
        case HIDE_TOAST:
            return { ...state, showToast: false, toastMessage: null }
        case SET_TOAST_MESSAGE:
            return { ...state, toastMessage: action.payload }
        case CLEAR_TOAST_MESSAGE:
            return { ...state, toastMessage: null }
        case SHOW_FORGOT_PASSWORD_RESET_FORM:
            return { ...state, showForgotPasswordResetForm: action.payload }
        default:
            return state;
    }
};
