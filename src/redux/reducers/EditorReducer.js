import {
    UPDATE_EDITOR,
    CLEAR_EDITOR,
    ADD_INSIGHT
} from '../actions/types';

const INITIAL_STATE = {
    showStoryEditor: true,
    insights: [],
    editorContent: {
        titleState: {
            blocks: [
                {
                    key: '5eapc',
                    text: 'New Insight',
                    type: 'unstyled',
                    depth: 0,
                    inlineStyleRanges: [],
                    entityRanges: [],
                    data: {}
                }
            ],
            entityMap: {}
        },

        scripturesState: {
            blocks: [
                {
                    key: '6eap1',
                    text: 'Related scriptures',
                    type: 'unstyled',
                    depth: 0,
                    inlineStyleRanges: [],
                    entityRanges: [],
                    data: {}
                }
            ],
            entityMap: {}
        },

        editorState: {
            blocks: [
                {
                    key: '2rs68',
                    text: 'Write notes here',
                    type: 'unstyled',
                    depth: 0,
                    inlineStyleRanges: [],
                    entityRanges: [],
                    data: {}
                }
            ],
            entityMap: {}
        },

        meditationsState: {
            blocks: [
                {
                    key: '1rs9v',
                    text: 'Jot down your meditations',
                    type: 'unstyled',
                    depth: 0,
                    inlineStyleRanges: [],
                    entityRanges: [],
                    data: {}
                }
            ],
            entityMap: {}
        }
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLEAR_EDITOR:
            return {
                ...state,
                editorContent: {
                    ...state.editorContent
                }
            };
        case UPDATE_EDITOR:
            return {
                ...state,
                editorContent: { titleState: action.payload.titleState, editorState: action.payload.editorState, scripturesState: action.payload.scripturesState, meditationsState: action.payload.meditationsState }
            };

        case ADD_INSIGHT:
            return {
                ...state,
                insights: [...state.insights, action.payload]
            }



        default:
            return state;
    }
};
