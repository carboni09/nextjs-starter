import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import LoadingReducer from './LoadingReducer';
import LayoutReducer from './LayoutReducer'

export default combineReducers({
	auth: AuthReducer,
	loading: LoadingReducer,
	layout: LayoutReducer
});
