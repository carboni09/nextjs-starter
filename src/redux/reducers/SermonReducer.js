import { SET_NEXT_SERMON } from '../actions/types';

const INITIAL_STATE = {
    nextSermon: { id: "", title: "", url: "", preacher: { id: "", name: "", profilePicture: "" } }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_NEXT_SERMON:
            return { ...state, nextSermon: { ...state.nextSermon, ...action.payload } }
        default:
            return state;
    }
};
