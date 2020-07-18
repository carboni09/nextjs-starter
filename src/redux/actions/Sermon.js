import { API, graphqlOperation } from 'aws-amplify'
import { GetListen, GetCompletion } from '../../graphql/custom-queries'
import { create_listen, create_completion, increment_listen, update_listen, increment_user_seconds_listened, set_weekly_goal, show_interest_in_express } from '../../graphql/custom-mutations'
import { PLAY_SERMON, DEDUCT_CACHED_SECONDS_LISTENED, SET_TOAST_MESSAGE } from './types'
import _ from 'lodash'
import { markSermonAsCompletedInCache } from '../actions/Player'
import Router from 'next/router'


export const PlaySermon = ({ sermonData }) => {
    return async (dispatch, getState) => {
        //play sermon
        dispatch({
            type: PLAY_SERMON,
            payload: sermonData
        })

        //once audio is loaded onStart dispatched CreateListen
    }
}


export const CreateListen = (sermonId) => {
    return async (dispatch, getState) => {
        let state = getState()
        let userId = state.auth.userDetails.sub
        try {
            let listen = await API.graphql(graphqlOperation(GetListen, {
                id: `${userId}_${sermonId}`
            }))

            if (!listen.data.getListen) {
                let createListen = await API.graphql(graphqlOperation(create_listen, {
                    input: {
                        id: `${userId}_${sermonId}`,
                        listenSermonId: sermonId,
                        listenUserId: userId,
                        isFinished: false,
                        minutesListened: 0,
                        currentStatus: "STARTED",
                        totalLength: 0
                    }
                }))


                if (createListen.data.createListen) {
                    //increment listen count
                    let increment = await API.graphql(graphqlOperation(increment_listen, { id: sermonId }))
                }

            } else {
                let updateListen = await API.graphql(graphqlOperation(update_listen, {
                    input: {
                        id: `${userId}_${sermonId}`,
                        listenSermonId: sermonId,
                        listenUserId: userId,
                        isFinished: false,
                        minutesListened: 9939,
                        currentStatus: "STARTED",
                        totalLength: 12000
                    }
                }))


                if (updateListen.data.updateListen) {
                    //increment listen count
                    let increment = await API.graphql(graphqlOperation(increment_listen, { id: sermonId }))
                }
            }

        } catch (error) {
            console.log(error)
        }

    }
}




export const CreateCompletion = (sermonId) => {
    return async (dispatch, getState) => {
        let state = getState()
        let userId = state.auth.userDetails.sub
        try {
            let listen = await API.graphql(graphqlOperation(GetCompletion, {
                id: `${userId}_${sermonId}`
            }))

            if (!listen.data.getCompletion) {
                let createCompletion = await API.graphql(graphqlOperation(create_completion, {
                    input: {
                        id: `${userId}_${sermonId}`,
                        completionSermonId: sermonId,
                        completionUserId: userId,
                        isFinished: true,
                        minutesListened: 1,
                        currentStatus: "COMPLETED",
                        totalLength: 1
                    }
                }))

                console.log(createCompletion)

                if (createCompletion.data.createCompletion) {
                    //mark sermon as completed in cache
                    dispatch(markSermonAsCompletedInCache({ userId, sermonId }))

                    //lambda handles increment user completion count when completion record is created in the DB

                }
            }

        } catch (error) {
            console.log(error)
        }

    }
}


export const SetWeeklyGoal = (weeklyGoal) => {
    return async (dispatch, getState) => {
        let state = getState()
        let userId = state.auth.userDetails.sub
        try {

            let setGoal = await API.graphql(graphqlOperation(set_weekly_goal, {
                input: {
                    id: userId,
                    listenGoalPerWeek: weeklyGoal
                }
            }))



            if (setGoal.data.updateUser.listenGoalPerWeek) {
                //Router.reload()
                await Router.replace('/profile')
                Router.reload()
                dispatch({ type: SET_TOAST_MESSAGE, payload: `You\'ve committed to listen to at least one sermon ${weeklyGoal} ${weeklyGoal > 1 ? 'days' : 'day'} a week. All the best` })


            }


        } catch (error) {
            console.log(error)
            dispatch({ type: SET_TOAST_MESSAGE, payload: 'Something went wrong. Please try again' })
        }

    }
}


export const ShowInterestInExpress = () => {
    return async (dispatch, getState) => {
        let state = getState()
        let userId = state.auth.userDetails.sub
        try {

            let action = await API.graphql(graphqlOperation(show_interest_in_express, {
                input: {
                    id: userId,
                    isInterestedInExpress: 1
                }
            }))



            if (action.data.updateUser) {
                console.log(action.data.updateUser)
                alert('Thanks for your feedback')
                //dispatch({ type: SET_TOAST_MESSAGE, payload: `Thanks for your feedback.` })

            }


        } catch (error) {
            console.log(error)
            dispatch({ type: SET_TOAST_MESSAGE, payload: 'Something went wrong. Please try again' })
        }

    }
}




