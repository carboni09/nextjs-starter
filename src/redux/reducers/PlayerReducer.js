import {
	PLAY_SERMON,
	SET_DURATION,
	SET_ELAPSED,
	SET_SEEK_TO,
	PAUSE_SERMON,
	FAST_FORWARD,
	REWIND,
	CLEAR_PLAYER_ACTION,
	SET_BUFFERING_STATE,
	DEDUCT_CACHED_SECONDS_LISTENED
} from '../actions/types';

const INITIAL_STATE = {

	nowPlaying: {
		id: null,
		title: null,
		preacher: null,
		url: null,
		image: '',
		duration: 0,
		elapsed: 0,
		isPlaying: false,
		isBuffering: false,
		isFavourite: false,
		isSaved: false,
		markedAsComplete: false,

	},

	playerActions: {
		seekTo: null,
		rewind: null,
		fastForward: null
	},
	playerSettings: {
		volume: 0,
		speed: 1
	},
	secondsListened: -1, //player seconds counter
	secondsListenedInCurrentSession: -1, //listenSeconds to be saved in Db
	cachedSecondsListenedInCurrentSession: 0
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PLAY_SERMON:
			return { ...state, nowPlaying: { ...state.nowPlaying, ...action.payload, isPlaying: true, } };
		case PAUSE_SERMON:
			return { ...state, nowPlaying: { ...state.nowPlaying, ...action.payload, isPlaying: false } };
		case SET_DURATION:
			return { ...state, nowPlaying: { ...state.nowPlaying, duration: action.payload } };
		case SET_ELAPSED:
			return { ...state, nowPlaying: { ...state.nowPlaying, elapsed: action.payload }, secondsListened: state.secondsListened + 1, secondsListenedInCurrentSession: state.secondsListenedInCurrentSession + 1 };
		case SET_SEEK_TO:
			return { ...state, playerActions: { ...state.playerActions, seekTo: action.payload } };
		case REWIND:
			return {
				...state,
				nowPlaying: { ...state.nowPlaying, elapsed: state.nowPlaying.elapsed + action.payload },
				playerActions: { ...state.playerActions, rewind: state.nowPlaying.elapsed - action.payload }
			};
		case FAST_FORWARD:
			return {
				...state,
				nowPlaying: { ...state.nowPlaying, elapsed: state.nowPlaying.elapsed + action.payload },
				playerActions: { ...state.playerActions, fastForward: state.nowPlaying.elapsed + action.payload }
			};
		case SET_BUFFERING_STATE:
			return {
				...state, nowPlaying: { ...state.nowPlaying, isBuffering: action.payload }
			}

		case CLEAR_PLAYER_ACTION:
			return {
				...state,
				playerActions: {
					seekTo: null,
					rewind: null,
					fastForward: null
				}
			};
		case DEDUCT_CACHED_SECONDS_LISTENED:
			return {
				...state,
				secondsListenedInCurrentSession: state.secondsListenedInCurrentSession - action.payload,
				cachedSecondsListenedInCurrentSession: state.cachedSecondsListenedInCurrentSession + action.payload
			}
		default:
			return state;
	}
};
