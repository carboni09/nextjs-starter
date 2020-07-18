export const GetListen = `query GetListen($id: ID!) {
    getListen(id: $id) {
          id
      isFinished
      minutesListened
      totalLength
      currentStatus
    }
  }
`;

export const GetCompletion = `query GetCompletion($id: ID!) {
    getCompletion(id: $id) {
          id
    }
  }
`;

export const ListSermons = `query ListSermons ($limit: Int) {
		listSermons(limit: $limit) {
      items {
			id
			title
			description
			createdAt
      url
      image
			listenCount
			preacherImage
			preacher {
				id
				name
				profilePicture
			}
			subject {
				subject
			}
    }
		}
	}
  `

export const ListSubjects = `
  query listSubject ($userId: ID!) {
    listSubjects (limit: 20)  {
      items {
        id
        subject
        userIsInterested (userId: $userId)
        sermons {
          items {
            id
            title
            preacher {
              id
              name
              profilePicture
            }
          }
        }
      }
      
    }
  }
  `

export const GetUserSermons = `query GetUserSermons ($userId: ID!) {
    getUser (id: $userId) {
      interests {
        items {
          id
          subject {
            id
            subject
            sermons {
              items {
                id
                title
                listenCount
			          preacherImage
                userHasListened(userId: $userId)
                isUserFavourite(userId: $userId)
                preacher {
                  id
                  name
                  profilePicture
                }
              }
            }
          }
        }
      }
      subscriptions {
        items {
          id 
          preacher {
            id
            name
            sermons {
              items {
                id
                title
                listenCount
			          preacherImage
                preacher {
                  id
                  name
                  profilePicture
                }
                userHasListened(userId: $userId)
                isUserFavourite(userId: $userId)
              }
            }
            
          }
        }
      }
      saves {
        items {
          sermon {
                id
                title
                preacher {
                  id
                  name
                  profilePicture
                }
              userHasListened(userId: $userId)
              isUserFavourite(userId: $userId)
            }
        }
      }
      favourites {
        items {
          sermon {
                id
                title
                preacher {
                  id
                  name
                  profilePicture
                }
              userHasListened(userId: $userId)
              isUserFavourite(userId: $userId)
              
            }
        }
      }
    }
  }`


export const GetManySermons = `
query GetManySermon($ids: [ID!], $userId: ID!) {
  getManySermons(ids: $ids) {
    id
    title
    description
    createdAt
    url
    listenCount
    preacherImage
    preacher {
      id
      name
      profilePicture
    }
    subject {
      subject
    }
    userHasSaved(userId: $userId)
    isUserFavourite(userId: $userId)
  }
}
`



export const GetUserSaves = `query GetUserSaves ($userId: ID!) {
  getUser (id: $userId) {
    saves {
      items {
        id
        sermon {
              id
              title
              listenCount
              preacher {
                id
                name
                profilePicture
              }
            userHasListened(userId: $userId)
            isUserFavourite(userId: $userId)
          }
      }
      nextToken
    }
  }
}`

export const GetUserFavourites = `query GetUserFavourites ($userId: ID!) {
  getUser (id: $userId) {
    favourites {
      items {
        id
        sermon {
              id
              title
              listenCount
              preacher {
                id
                name
                profilePicture
              }
            userHasListened(userId: $userId)
            isUserFavourite(userId: $userId)
          }
      }
      nextToken
    }
  }
}`


export const GetUserCompletions = `query GetUserCompletions ($userId: ID!) {
  getUser (id: $userId) {
    completions {
      items {
        id
        sermon {
              id
              title
              listenCount
              preacher {
                id
                name
                profilePicture
              }
            userHasListened(userId: $userId)
            userHasCompleted(userId: $userId)
            isUserFavourite(userId: $userId)
          }
      }
      nextToken
    }
  }
}`

export const GetUserProfile = `query GetUserProfile ($userId: ID!) {
  getUser (id: $userId) {
    name
    sermonListenCount
    SermonCompletionCount
    credits
    listenGoalPerWeek
  }
}`

export const GetWeeklyListenActivity = `query GetWeeklyListenActivity ($userId: ID!, $weekStartsOn: Int) {
  getUser (id: $userId) {
      listenActivity (filter: {
        fullDate: {
          ge: $weekStartsOn
        },
        
      }) {
        items {
          fullDate
          secondsListened
        }
      }
    }
}`

export const Search = `query Search ($query: String, $userId: ID!, $searchPreachersFetchMoreToken: Int, $searchSermonsFetchMoreToken: Int) {
  searchSubjects (filter:{
    subject: {
      matchPhrasePrefix: $query
    }
  }) {
    items {
      id
      subject
    }
  }
  searchPreachers (filter: {
    or: [
      {name:{
     matchPhrasePrefix: $query
      }},

      {bio:{
        matchPhrasePrefix: $query
         }}
      
    ]
  }
  sort: {
    field: subscriptionCount
    direction: desc
  }
  limit: 50, nextToken: $searchPreachersFetchMoreToken){
    items {
      id
      name
      image
    }
    nextToken
  }
  searchSermons (
    filter: {
   or: [
    {preacherName: {
        matchPhrasePrefix: $query
      
    }},
    {title: {
      matchPhrasePrefix: $query
    }}
  ]  
  }
    limit: 50,
    nextToken: $searchSermonsFetchMoreToken
    sort: {
      field: listenCount
      direction: desc
    }
  ) {
    items {
      id
      title
      preacher {
        id
        name
        image
      }
      preacherImage
      createdAt
      listenCount
      userHasSaved(userId: $userId )
      
    }
    nextToken
  }
}
`

export const GetSermonToPlay = `query GetSermon($id: ID!) {
  getSermon(id: $id) {
    id
    title
    description
    createdAt
    url
    listenCount
    preacherImage
    preacher {
      id
      name
      image
      profilePicture
    }
  }
}
`