import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PlayerReducer from './PlayerReducer';
import LoadingReducer from './LoadingReducer';
import SermonReducer from './SermonReducer'
import LayoutReducer from './LayoutReducer'
import EditorReducer from './EditorReducer'

export default combineReducers({
	auth: AuthReducer,
	player: PlayerReducer,
	loading: LoadingReducer,
	sermon: SermonReducer,
	layout: LayoutReducer,
	editor: EditorReducer
});
