export const create_listen = `mutation CreateListen ($input: CreateListenInput!) {
    createListen (input: $input) {
      id
      isFinished
        sermon {
        title
      }
      user {
        name
      }
      currentStatus
    }
  }`

export const create_completion = `mutation CreateListen ($input: CreateCompletionInput!) {
    createCompletion (input: $input) {
      id
        sermon {
        title
      }
      user {
        name
      }
    }
  }`

export const update_listen = `mutation UpdateListen ($input: UpdateListenInput!) {
    updateListen (input: $input) {
      id
      isFinished
        sermon {
        title
      }
      user {
        name
      }
      currentStatus
    }
  }`

export const increment_listen = `mutation IncrementListen($id: ID!){
    incrementListenCount(id: $id) {
     title
     listenCount
   }
   }`


export const increment_user_seconds_listened = `mutation IncrementSecondsListened ($userId: ID!, $secondsListened: Int!,  $fullDate: AWSTimestamp) {
  incrementUserSecondsListened (id: $userId, secondsListened: $secondsListened, fullDate: $fullDate  ) {
    name
    secondsListened
    lastListenActivityDate
  }
}
`
export const set_weekly_goal = `mutation SetWeeklyGoal ($input: UpdateUserInput!){
  updateUser(input: $input ) {
    listenGoalPerWeek
  }
}`

export const show_interest_in_express = `mutation ShowInterestInExpress ($input: UpdateUserInput!){
  updateUser(input: $input ) {
    isInterestedInExpress
  }
}`