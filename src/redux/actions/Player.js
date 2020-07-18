import { API, graphqlOperation } from 'aws-amplify'
import { GetListen } from '../../graphql/custom-queries'
import { create_listen, increment_listen, update_listen, increment_user_seconds_listened } from '../../graphql/custom-mutations'
import { PLAY_SERMON, DEDUCT_CACHED_SECONDS_LISTENED } from './types'
import fetch from 'isomorphic-unfetch'
import { CreateCompletion } from './Sermon'
import cookie from 'js-cookie';
import parameters from '../../../parameters';

const EC2_REDIS_SERVER = 'https://api.getworded.today'

export const addSecondsListenedToCache = ({ secondsListened, userId, sermonId, sermonDuration }) => {
    let data = JSON.stringify({
        key: `listened:${userId}_${sermonId}`,
        secondsListened: secondsListened,
        sermonId: sermonId,
        userId: userId,
        sermonDuration: sermonDuration
    })
    //console.log(data)
    return async (dispatch, getState) => {
        fetch(`${EC2_REDIS_SERVER}/listened`, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                //console.log('addListenedSecsToCache', data.data)
                if ((data.data.secondsListened / data.data.sermonDuration) > parameters.sermonCompletionPercentage) {
                    //TODO consider playback speed
                    console.log('Completion: ', (data.data.secondsListened / data.data.sermonDuration))

                    // if the seconds's listened of the is > 80% of the sermon duration (or whatever is set in parameters.js [sermonCompletionPercentage])
                    //check if sermon has been marked as completed
                    //if not, create completion
                    if (!data.data.markedAsCompleted) {
                        //create completion
                        dispatch(CreateCompletion(sermonId))
                        //CreateCompletion marks as listen in cache

                    }
                }
            })
    }
}


export const markSermonAsCompletedInCache = ({ userId, sermonId }) => {
    let data = JSON.stringify({
        key: `listened:${userId}_${sermonId}`,
    })

    return async (dispatch, getState) => {
        fetch(`${EC2_REDIS_SERVER}/listened/markAsCompleted`, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                //console.log('sermon completed')
            })
    }
}


export const incrementSecondsListened = ({ userId, secondsListened, sermonId }) => {
    return async (dispatch, getState) => {
        //deduct saved seconds from seconds counter // remainder will will incrementd at the next interval
        dispatch({ type: DEDUCT_CACHED_SECONDS_LISTENED, payload: secondsListened })

        let date = ("0" + (new Date().getUTCDate())).slice(-2)
        let month = ("0" + (new Date().getUTCMonth() + 1)).slice(-2)
        let year = new Date().getUTCFullYear()
        //let fullDate = parseInt(`${year}${month}${date}`)
        let formatedDate = `${year}-${month}-${date} 00:00:00`
        let fullDate = new Date(formatedDate).getTime() //time stamp of current date at 00:00:00


        //increment user's lifetime listening time
        try {
            let increment = await API.graphql(graphqlOperation(increment_user_seconds_listened, { userId: userId, secondsListened: secondsListened, fullDate: fullDate }))
        } catch (error) {

            //console.log('error', error)
            //readd saved seconds from seconds counter // due to failure
            //dispatch({ type: DEDUCT_CACHED_SECONDS_LISTENED, payload: -secondsListened })
            //TODO implement save failed increment attempts in cookie to be retried later
            //check if seconds there are unlogged seconds for the playing sermon
            let unsaved = localStorage.getItem(`unsaved`)
            if (unsaved) {
                unsaved = JSON.parse(unsaved)
                // console.log('unssaved', unsaved)
                if (unsaved[fullDate]) {
                    //unsavedSeconds = parseInt(unsavedSeconds)1
                    //there are previously unsaved seconds add unsaved seconds from failed increment attempt
                    //let unsaved = {[fullDate]: { [`${userId}_${sermonId}`]: {userId: userId, secondsListened: secondsListened, fullDate: fullDate} }}
                    let todaysData = unsaved[fullDate]
                    if (todaysData[`${userId}_${sermonId}`]) {
                        let data = todaysData[`${userId}_${sermonId}`]
                        // console.log('data', data)
                        let newData = { ...unsaved, [fullDate]: { ...todaysData, [`${userId}_${sermonId}`]: { ...data, secondsListened: data.secondsListened + secondsListened, } } }
                        //console.log('newData', newData)
                        localStorage.setItem(`unsaved`, JSON.stringify(newData));
                    } else {
                        let unsavedData = { ...unsaved, [fullDate]: { ...todaysData, [`${userId}_${sermonId}`]: { userId: userId, secondsListened: secondsListened, fullDate: fullDate } } }
                        localStorage.setItem('unsaved', JSON.stringify(unsavedData));
                    }

                } else {
                    let unsavedData = { ...unsaved, [fullDate]: { [`${userId}_${sermonId}`]: { userId: userId, secondsListened: secondsListened, fullDate: fullDate } } }
                    localStorage.setItem('unsaved', JSON.stringify(unsavedData));
                }
            }
            else {
                let unsavedData = { [fullDate]: { ...unsaved, [`${userId}_${sermonId}`]: { userId: userId, secondsListened: secondsListened, fullDate: fullDate } } }
                localStorage.setItem(`unsaved`, JSON.stringify(unsavedData));
            }
        }
    }

}

