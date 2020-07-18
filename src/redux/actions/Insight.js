import { ADD_INSIGHT } from './types';
import Amplify, { Storage, API, graphqlOperation } from 'aws-amplify';
import { create_listen } from '../../graphql/custom-mutations';


export const update_content = (content) => {
    return async (dispatch, getState) => {
        let state = getState();
        dispatch({
            type: UPDATE_EDITOR,
            payload: content
        });
    };
};

export const save_insight = () => {
    return async (dispatch, getState) => {
        let state = getState();
        // get current editor content
        // let storyId = state.story.editorStoryId;
        // let photoId = state.story.editorPhotoId;
        // let userId = state.user.userDetails.sub;

        let { titleState, editorState, scripturesState, meditationsState } = state.editor.editorContent;

        //stringify title and body

        let title = JSON.stringify(titleState);
        let body = JSON.stringify(editorState);
        let scriptures = JSON.stringify(scripturesState);
        let meditations = JSON.stringify(meditationsState)

        dispatch({
            type: ADD_INSIGHT,
            payload: { editorContent: { titleState: title, editorState: body, scripturesState: scriptures, meditationsState: meditations } }
        })

        //if (insightId) {
        // let inputData = {
        //     title: title,
        //     data: body,
        //     storyAuthorId: userId,
        //     storyPhotoId: photoId
        // };
        //dispatch(update_story({ ...inputData, id: storyId })); //update with storyId
        //  } else {
        // let inputData = {
        //     title: title,
        //     data: body,
        //     storyAuthorId: userId,
        //     storyPhotoId: photoId,
        //     isStoryOftheDay: false,
        //     isPublished: isPublished
        // };
        //dispatch(create_story(inputData));
        // }

        //toast.success('Story Saved SUccessfully', { hideProgressBar: true });

        //check if editorStoryId exists
        //if it does it means the story has been previously created
        //call updateStory
        //if it doesn't exist
        //call createStory
    };
};

export const publish_story = ({ storyId, photoId, isPublished = true }) => {
    return async (dispatch, getState) => {
        let state = getState();
        // get current editor content
        // let storyId = state.story.editorStoryId;
        // let photoId = state.story.editorPhotoId;
        let userId = state.user.userDetails.sub;
        let inputData = {
            isPublished: isPublished
        };

        if (storyId) {
            dispatch(update_story({ ...inputData, id: storyId })); //update with storyId
        }
    };
};

export const create_story = (inputData) => {
    return async (dispatch, getState) => {
        dispatch({
            type: CREATE_STORY_REQUEST
        });

        try {
            let response = await API.graphql(
                graphqlOperation(createStory, {
                    input: inputData
                })
            );

            console.log(response);

            if (response.data.createStory) {
                console.log(response.data.createStory.id);
                dispatch({
                    type: STORE_CREATED_STORY_ID,
                    payload: { editorStoryId: response.data.createStory.id } //save the id of the just created story
                });
                dispatch({
                    type: CREATE_STORY_SUCCESS
                });
                toast.success('Story Saved Successfully', { hideProgressBar: true, autoClose: 7000 });
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: CREATE_STORY_FAILED
            });
            toast.error('Operation failed', { hideProgressBar: true, autoClose: 7000 });
        }
    };
};

export const update_story = (inputData) => {
    return async (dispatch, getState) => {
        dispatch({
            type: UPDATE_STORY_REQUEST
        });

        try {
            let response = await API.graphql(
                graphqlOperation(updateStory, {
                    input: inputData
                })
            );

            if (response.data.updateStory) {
                dispatch({
                    type: UPDATE_STORY_SUCCESS
                });
                toast.success('Update Successful', { hideProgressBar: true, autoClose: 7000 });
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: UPDATE_STORY_FAILED
            });
            toast.error('Operation failed', { hideProgressBar: true, autoClose: 7000 });
        }
    };
};

export const like_story = ({ storyId, userId }) => {
    return async (dispatch, getState) => {
        dispatch({
            type: LIKE_STORY_REQUEST
        });

        console.log(storyId, userId);
        let inputData = {
            id: `${userId}_${storyId}`, //combine userId an storyId for db union
            likeUserId: userId,
            likeStoryId: storyId
        };

        try {
            let response = await API.graphql(
                graphqlOperation(createLike, {
                    input: inputData
                })
            );

            if (response.data.createLike) {
                console.log(response.data.createLike);
                dispatch({
                    type: LIKE_STORY_SUCCESS
                });
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: LIKE_STORY_FAILED
            });
            toast.error('Operation failed', { hideProgressBar: true, autoClose: 7000 });
        }
    };
};
