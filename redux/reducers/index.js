import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import LoadingReducer from './LoadingReducer';
import LayoutReducer from './LayoutReducer'
//IMPORT ITEMS HERE//

export default combineReducers({
	auth: AuthReducer,
	loading: LoadingReducer,
	layout: LayoutReducer,

	//EXPORT ITEMS HERE//
});
