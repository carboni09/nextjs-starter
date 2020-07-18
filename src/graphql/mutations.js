// eslint-disable
// this is an auto generated file. This will be overwritten

export const createManySermons = `mutation CreateManySermons($input: [CreateSermonInput!]!) {
  createManySermons(input: $input) {
    id
    title
    description
    subject {
      id
      subject
      sermons {
        nextToken
      }
      interests {
        nextToken
      }
      userIsInterested
    }
    preacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    coPreachers {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    uploadedBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    image
    sermonDate
    canDownload
    canListen
    isPremium
    isPublished
    isPrivate
    isExpress
    canSave
    downloadUrl
    isFeatured
    isMultipart
    isHostedOnSoundCloud
    isHostedByThirdParty
    soundcloudUrl
    length
    listenCount
    preacherName
    preacherImage
    price
    fileSize
    fileType
    url
    createdAt
    listens {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      nextToken
    }
    completions {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      nextToken
    }
    saves {
      items {
        id
        isSaved
        createdAt
      }
      nextToken
    }
    favourites {
      items {
        id
        isFavourite
        createdAt
      }
      nextToken
    }
    collectionSermons {
      items {
        id
        createdAt
        keywords
      }
      nextToken
    }
    tagSermons {
      items {
        id
      }
      nextToken
    }
    purchases {
      items {
        id
        credits
        createdAt
      }
      nextToken
    }
    insights {
      items {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      nextToken
    }
    listenStatus {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
      createdAt
    }
    isUserFavourite
    userHasLiked
    userHasListened
    userHasCompleted
    userHasSaved
    userHasPurchased
    keywords
  }
}
`;
export const incrementListenCount = `mutation IncrementListenCount($id: ID!) {
  incrementListenCount(id: $id) {
    id
    title
    description
    subject {
      id
      subject
      sermons {
        nextToken
      }
      interests {
        nextToken
      }
      userIsInterested
    }
    preacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    coPreachers {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    uploadedBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    image
    sermonDate
    canDownload
    canListen
    isPremium
    isPublished
    isPrivate
    isExpress
    canSave
    downloadUrl
    isFeatured
    isMultipart
    isHostedOnSoundCloud
    isHostedByThirdParty
    soundcloudUrl
    length
    listenCount
    preacherName
    preacherImage
    price
    fileSize
    fileType
    url
    createdAt
    listens {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      nextToken
    }
    completions {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      nextToken
    }
    saves {
      items {
        id
        isSaved
        createdAt
      }
      nextToken
    }
    favourites {
      items {
        id
        isFavourite
        createdAt
      }
      nextToken
    }
    collectionSermons {
      items {
        id
        createdAt
        keywords
      }
      nextToken
    }
    tagSermons {
      items {
        id
      }
      nextToken
    }
    purchases {
      items {
        id
        credits
        createdAt
      }
      nextToken
    }
    insights {
      items {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      nextToken
    }
    listenStatus {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
      createdAt
    }
    isUserFavourite
    userHasLiked
    userHasListened
    userHasCompleted
    userHasSaved
    userHasPurchased
    keywords
  }
}
`;
export const incrementSubscriberCount = `mutation IncrementSubscriberCount($id: ID!) {
  incrementSubscriberCount(id: $id) {
    id
    name
    bio
    image
    externalLink
    profilePicture
    subscriptionCount
    sermonCount
    createdBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    sermons {
      items {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      nextToken
    }
    subscriptions {
      items {
        id
      }
      nextToken
    }
    userIsSubscribed
    ministries {
      items {
        id
      }
      nextToken
    }
    keywords
  }
}
`;
export const decrementSubscriberCount = `mutation DecrementSubscriberCount($id: ID!) {
  decrementSubscriberCount(id: $id) {
    id
    name
    bio
    image
    externalLink
    profilePicture
    subscriptionCount
    sermonCount
    createdBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    sermons {
      items {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      nextToken
    }
    subscriptions {
      items {
        id
      }
      nextToken
    }
    userIsSubscribed
    ministries {
      items {
        id
      }
      nextToken
    }
    keywords
  }
}
`;
export const incrementUserSecondsListened = `mutation IncrementUserSecondsListened(
  $id: ID!
  $secondsListened: Int!
  $fullDate: AWSTimestamp
) {
  incrementUserSecondsListened(
    id: $id
    secondsListened: $secondsListened
    fullDate: $fullDate
  ) {
    id
    name
    username
    type
    isMinistry
    isActivated
    canUpload
    createdAt
    bio
    image
    email
    credits
    sermons {
      items {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      nextToken
    }
    collections {
      items {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      nextToken
    }
    interests {
      items {
        id
      }
      nextToken
    }
    listens {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      nextToken
    }
    completions {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      nextToken
    }
    saves {
      items {
        id
        isSaved
        createdAt
      }
      nextToken
    }
    favourites {
      items {
        id
        isFavourite
        createdAt
      }
      nextToken
    }
    subscriptions {
      items {
        id
      }
      nextToken
    }
    transactions {
      items {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      nextToken
    }
    purchases {
      items {
        id
        credits
        createdAt
      }
      nextToken
    }
    withdrawals {
      items {
        id
        amount
        createdAt
        method
        processor
      }
      nextToken
    }
    badges {
      items {
        id
        name
        description
      }
      nextToken
    }
    insights {
      items {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      nextToken
    }
    insightSaves {
      items {
        id
        isSaved
      }
      nextToken
    }
    ministries {
      items {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      nextToken
    }
    secondsListened
    sermonPurchaseCount
    sermonListenCount
    SermonCompletionCount
    sermonUploadCount
    collectionCreatedCount
    bagdeCount
    goalCompletionCount
    listenGoalPerDay
    listenGoalPerWeek
    listenActivity {
      items {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      nextToken
    }
    lastListenActivityDate
    lastUpdatedSecondsListened
    isInterestedInExpress
  }
}
`;
export const incrementUserGoalCompletionCount = `mutation IncrementUserGoalCompletionCount($id: ID!) {
  incrementUserGoalCompletionCount(id: $id) {
    id
    name
    username
    type
    isMinistry
    isActivated
    canUpload
    createdAt
    bio
    image
    email
    credits
    sermons {
      items {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      nextToken
    }
    collections {
      items {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      nextToken
    }
    interests {
      items {
        id
      }
      nextToken
    }
    listens {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      nextToken
    }
    completions {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      nextToken
    }
    saves {
      items {
        id
        isSaved
        createdAt
      }
      nextToken
    }
    favourites {
      items {
        id
        isFavourite
        createdAt
      }
      nextToken
    }
    subscriptions {
      items {
        id
      }
      nextToken
    }
    transactions {
      items {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      nextToken
    }
    purchases {
      items {
        id
        credits
        createdAt
      }
      nextToken
    }
    withdrawals {
      items {
        id
        amount
        createdAt
        method
        processor
      }
      nextToken
    }
    badges {
      items {
        id
        name
        description
      }
      nextToken
    }
    insights {
      items {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      nextToken
    }
    insightSaves {
      items {
        id
        isSaved
      }
      nextToken
    }
    ministries {
      items {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      nextToken
    }
    secondsListened
    sermonPurchaseCount
    sermonListenCount
    SermonCompletionCount
    sermonUploadCount
    collectionCreatedCount
    bagdeCount
    goalCompletionCount
    listenGoalPerDay
    listenGoalPerWeek
    listenActivity {
      items {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      nextToken
    }
    lastListenActivityDate
    lastUpdatedSecondsListened
    isInterestedInExpress
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    username
    type
    isMinistry
    isActivated
    canUpload
    createdAt
    bio
    image
    email
    credits
    sermons {
      items {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      nextToken
    }
    collections {
      items {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      nextToken
    }
    interests {
      items {
        id
      }
      nextToken
    }
    listens {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      nextToken
    }
    completions {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      nextToken
    }
    saves {
      items {
        id
        isSaved
        createdAt
      }
      nextToken
    }
    favourites {
      items {
        id
        isFavourite
        createdAt
      }
      nextToken
    }
    subscriptions {
      items {
        id
      }
      nextToken
    }
    transactions {
      items {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      nextToken
    }
    purchases {
      items {
        id
        credits
        createdAt
      }
      nextToken
    }
    withdrawals {
      items {
        id
        amount
        createdAt
        method
        processor
      }
      nextToken
    }
    badges {
      items {
        id
        name
        description
      }
      nextToken
    }
    insights {
      items {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      nextToken
    }
    insightSaves {
      items {
        id
        isSaved
      }
      nextToken
    }
    ministries {
      items {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      nextToken
    }
    secondsListened
    sermonPurchaseCount
    sermonListenCount
    SermonCompletionCount
    sermonUploadCount
    collectionCreatedCount
    bagdeCount
    goalCompletionCount
    listenGoalPerDay
    listenGoalPerWeek
    listenActivity {
      items {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      nextToken
    }
    lastListenActivityDate
    lastUpdatedSecondsListened
    isInterestedInExpress
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
    username
    type
    isMinistry
    isActivated
    canUpload
    createdAt
    bio
    image
    email
    credits
    sermons {
      items {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      nextToken
    }
    collections {
      items {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      nextToken
    }
    interests {
      items {
        id
      }
      nextToken
    }
    listens {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      nextToken
    }
    completions {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      nextToken
    }
    saves {
      items {
        id
        isSaved
        createdAt
      }
      nextToken
    }
    favourites {
      items {
        id
        isFavourite
        createdAt
      }
      nextToken
    }
    subscriptions {
      items {
        id
      }
      nextToken
    }
    transactions {
      items {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      nextToken
    }
    purchases {
      items {
        id
        credits
        createdAt
      }
      nextToken
    }
    withdrawals {
      items {
        id
        amount
        createdAt
        method
        processor
      }
      nextToken
    }
    badges {
      items {
        id
        name
        description
      }
      nextToken
    }
    insights {
      items {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      nextToken
    }
    insightSaves {
      items {
        id
        isSaved
      }
      nextToken
    }
    ministries {
      items {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      nextToken
    }
    secondsListened
    sermonPurchaseCount
    sermonListenCount
    SermonCompletionCount
    sermonUploadCount
    collectionCreatedCount
    bagdeCount
    goalCompletionCount
    listenGoalPerDay
    listenGoalPerWeek
    listenActivity {
      items {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      nextToken
    }
    lastListenActivityDate
    lastUpdatedSecondsListened
    isInterestedInExpress
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    name
    username
    type
    isMinistry
    isActivated
    canUpload
    createdAt
    bio
    image
    email
    credits
    sermons {
      items {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      nextToken
    }
    collections {
      items {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      nextToken
    }
    interests {
      items {
        id
      }
      nextToken
    }
    listens {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      nextToken
    }
    completions {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      nextToken
    }
    saves {
      items {
        id
        isSaved
        createdAt
      }
      nextToken
    }
    favourites {
      items {
        id
        isFavourite
        createdAt
      }
      nextToken
    }
    subscriptions {
      items {
        id
      }
      nextToken
    }
    transactions {
      items {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      nextToken
    }
    purchases {
      items {
        id
        credits
        createdAt
      }
      nextToken
    }
    withdrawals {
      items {
        id
        amount
        createdAt
        method
        processor
      }
      nextToken
    }
    badges {
      items {
        id
        name
        description
      }
      nextToken
    }
    insights {
      items {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      nextToken
    }
    insightSaves {
      items {
        id
        isSaved
      }
      nextToken
    }
    ministries {
      items {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      nextToken
    }
    secondsListened
    sermonPurchaseCount
    sermonListenCount
    SermonCompletionCount
    sermonUploadCount
    collectionCreatedCount
    bagdeCount
    goalCompletionCount
    listenGoalPerDay
    listenGoalPerWeek
    listenActivity {
      items {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      nextToken
    }
    lastListenActivityDate
    lastUpdatedSecondsListened
    isInterestedInExpress
  }
}
`;
export const createSermon = `mutation CreateSermon($input: CreateSermonInput!) {
  createSermon(input: $input) {
    id
    title
    description
    subject {
      id
      subject
      sermons {
        nextToken
      }
      interests {
        nextToken
      }
      userIsInterested
    }
    preacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    coPreachers {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    uploadedBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    image
    sermonDate
    canDownload
    canListen
    isPremium
    isPublished
    isPrivate
    isExpress
    canSave
    downloadUrl
    isFeatured
    isMultipart
    isHostedOnSoundCloud
    isHostedByThirdParty
    soundcloudUrl
    length
    listenCount
    preacherName
    preacherImage
    price
    fileSize
    fileType
    url
    createdAt
    listens {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      nextToken
    }
    completions {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      nextToken
    }
    saves {
      items {
        id
        isSaved
        createdAt
      }
      nextToken
    }
    favourites {
      items {
        id
        isFavourite
        createdAt
      }
      nextToken
    }
    collectionSermons {
      items {
        id
        createdAt
        keywords
      }
      nextToken
    }
    tagSermons {
      items {
        id
      }
      nextToken
    }
    purchases {
      items {
        id
        credits
        createdAt
      }
      nextToken
    }
    insights {
      items {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      nextToken
    }
    listenStatus {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
      createdAt
    }
    isUserFavourite
    userHasLiked
    userHasListened
    userHasCompleted
    userHasSaved
    userHasPurchased
    keywords
  }
}
`;
export const updateSermon = `mutation UpdateSermon($input: UpdateSermonInput!) {
  updateSermon(input: $input) {
    id
    title
    description
    subject {
      id
      subject
      sermons {
        nextToken
      }
      interests {
        nextToken
      }
      userIsInterested
    }
    preacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    coPreachers {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    uploadedBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    image
    sermonDate
    canDownload
    canListen
    isPremium
    isPublished
    isPrivate
    isExpress
    canSave
    downloadUrl
    isFeatured
    isMultipart
    isHostedOnSoundCloud
    isHostedByThirdParty
    soundcloudUrl
    length
    listenCount
    preacherName
    preacherImage
    price
    fileSize
    fileType
    url
    createdAt
    listens {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      nextToken
    }
    completions {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      nextToken
    }
    saves {
      items {
        id
        isSaved
        createdAt
      }
      nextToken
    }
    favourites {
      items {
        id
        isFavourite
        createdAt
      }
      nextToken
    }
    collectionSermons {
      items {
        id
        createdAt
        keywords
      }
      nextToken
    }
    tagSermons {
      items {
        id
      }
      nextToken
    }
    purchases {
      items {
        id
        credits
        createdAt
      }
      nextToken
    }
    insights {
      items {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      nextToken
    }
    listenStatus {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
      createdAt
    }
    isUserFavourite
    userHasLiked
    userHasListened
    userHasCompleted
    userHasSaved
    userHasPurchased
    keywords
  }
}
`;
export const deleteSermon = `mutation DeleteSermon($input: DeleteSermonInput!) {
  deleteSermon(input: $input) {
    id
    title
    description
    subject {
      id
      subject
      sermons {
        nextToken
      }
      interests {
        nextToken
      }
      userIsInterested
    }
    preacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    coPreachers {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    uploadedBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    image
    sermonDate
    canDownload
    canListen
    isPremium
    isPublished
    isPrivate
    isExpress
    canSave
    downloadUrl
    isFeatured
    isMultipart
    isHostedOnSoundCloud
    isHostedByThirdParty
    soundcloudUrl
    length
    listenCount
    preacherName
    preacherImage
    price
    fileSize
    fileType
    url
    createdAt
    listens {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      nextToken
    }
    completions {
      items {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      nextToken
    }
    saves {
      items {
        id
        isSaved
        createdAt
      }
      nextToken
    }
    favourites {
      items {
        id
        isFavourite
        createdAt
      }
      nextToken
    }
    collectionSermons {
      items {
        id
        createdAt
        keywords
      }
      nextToken
    }
    tagSermons {
      items {
        id
      }
      nextToken
    }
    purchases {
      items {
        id
        credits
        createdAt
      }
      nextToken
    }
    insights {
      items {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      nextToken
    }
    listenStatus {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
      createdAt
    }
    isUserFavourite
    userHasLiked
    userHasListened
    userHasCompleted
    userHasSaved
    userHasPurchased
    keywords
  }
}
`;
export const createPreacher = `mutation CreatePreacher($input: CreatePreacherInput!) {
  createPreacher(input: $input) {
    id
    name
    bio
    image
    externalLink
    profilePicture
    subscriptionCount
    sermonCount
    createdBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    sermons {
      items {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      nextToken
    }
    subscriptions {
      items {
        id
      }
      nextToken
    }
    userIsSubscribed
    ministries {
      items {
        id
      }
      nextToken
    }
    keywords
  }
}
`;
export const updatePreacher = `mutation UpdatePreacher($input: UpdatePreacherInput!) {
  updatePreacher(input: $input) {
    id
    name
    bio
    image
    externalLink
    profilePicture
    subscriptionCount
    sermonCount
    createdBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    sermons {
      items {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      nextToken
    }
    subscriptions {
      items {
        id
      }
      nextToken
    }
    userIsSubscribed
    ministries {
      items {
        id
      }
      nextToken
    }
    keywords
  }
}
`;
export const deletePreacher = `mutation DeletePreacher($input: DeletePreacherInput!) {
  deletePreacher(input: $input) {
    id
    name
    bio
    image
    externalLink
    profilePicture
    subscriptionCount
    sermonCount
    createdBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    sermons {
      items {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      nextToken
    }
    subscriptions {
      items {
        id
      }
      nextToken
    }
    userIsSubscribed
    ministries {
      items {
        id
      }
      nextToken
    }
    keywords
  }
}
`;
export const createMinistry = `mutation CreateMinistry($input: CreateMinistryInput!) {
  createMinistry(input: $input) {
    id
    name
    summary
    logoUrl
    externalLink
    ministryPreachers {
      items {
        id
      }
      nextToken
    }
    createdBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    keywords
  }
}
`;
export const updateMinistry = `mutation UpdateMinistry($input: UpdateMinistryInput!) {
  updateMinistry(input: $input) {
    id
    name
    summary
    logoUrl
    externalLink
    ministryPreachers {
      items {
        id
      }
      nextToken
    }
    createdBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    keywords
  }
}
`;
export const deleteMinistry = `mutation DeleteMinistry($input: DeleteMinistryInput!) {
  deleteMinistry(input: $input) {
    id
    name
    summary
    logoUrl
    externalLink
    ministryPreachers {
      items {
        id
      }
      nextToken
    }
    createdBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    keywords
  }
}
`;
export const createMinistryPreacher = `mutation CreateMinistryPreacher($input: CreateMinistryPreacherInput!) {
  createMinistryPreacher(input: $input) {
    id
    preacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    ministry {
      id
      name
      summary
      logoUrl
      externalLink
      ministryPreachers {
        nextToken
      }
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      keywords
    }
  }
}
`;
export const updateMinistryPreacher = `mutation UpdateMinistryPreacher($input: UpdateMinistryPreacherInput!) {
  updateMinistryPreacher(input: $input) {
    id
    preacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    ministry {
      id
      name
      summary
      logoUrl
      externalLink
      ministryPreachers {
        nextToken
      }
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      keywords
    }
  }
}
`;
export const deleteMinistryPreacher = `mutation DeleteMinistryPreacher($input: DeleteMinistryPreacherInput!) {
  deleteMinistryPreacher(input: $input) {
    id
    preacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    ministry {
      id
      name
      summary
      logoUrl
      externalLink
      ministryPreachers {
        nextToken
      }
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      keywords
    }
  }
}
`;
export const createSubject = `mutation CreateSubject($input: CreateSubjectInput!) {
  createSubject(input: $input) {
    id
    subject
    sermons {
      items {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      nextToken
    }
    interests {
      items {
        id
      }
      nextToken
    }
    userIsInterested
  }
}
`;
export const updateSubject = `mutation UpdateSubject($input: UpdateSubjectInput!) {
  updateSubject(input: $input) {
    id
    subject
    sermons {
      items {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      nextToken
    }
    interests {
      items {
        id
      }
      nextToken
    }
    userIsInterested
  }
}
`;
export const deleteSubject = `mutation DeleteSubject($input: DeleteSubjectInput!) {
  deleteSubject(input: $input) {
    id
    subject
    sermons {
      items {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      nextToken
    }
    interests {
      items {
        id
      }
      nextToken
    }
    userIsInterested
  }
}
`;
export const createTag = `mutation CreateTag($input: CreateTagInput!) {
  createTag(input: $input) {
    id
    name
    tagSermons {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const updateTag = `mutation UpdateTag($input: UpdateTagInput!) {
  updateTag(input: $input) {
    id
    name
    tagSermons {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const deleteTag = `mutation DeleteTag($input: DeleteTagInput!) {
  deleteTag(input: $input) {
    id
    name
    tagSermons {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const createTagSermon = `mutation CreateTagSermon($input: CreateTagSermonInput!) {
  createTagSermon(input: $input) {
    id
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    tag {
      id
      name
      tagSermons {
        nextToken
      }
    }
  }
}
`;
export const updateTagSermon = `mutation UpdateTagSermon($input: UpdateTagSermonInput!) {
  updateTagSermon(input: $input) {
    id
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    tag {
      id
      name
      tagSermons {
        nextToken
      }
    }
  }
}
`;
export const deleteTagSermon = `mutation DeleteTagSermon($input: DeleteTagSermonInput!) {
  deleteTagSermon(input: $input) {
    id
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    tag {
      id
      name
      tagSermons {
        nextToken
      }
    }
  }
}
`;
export const createCollection = `mutation CreateCollection($input: CreateCollectionInput!) {
  createCollection(input: $input) {
    id
    name
    summary
    sermonCount
    createdBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    collectionSermons {
      items {
        id
        createdAt
        keywords
      }
      nextToken
    }
    createdAt
    keywords
  }
}
`;
export const updateCollection = `mutation UpdateCollection($input: UpdateCollectionInput!) {
  updateCollection(input: $input) {
    id
    name
    summary
    sermonCount
    createdBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    collectionSermons {
      items {
        id
        createdAt
        keywords
      }
      nextToken
    }
    createdAt
    keywords
  }
}
`;
export const deleteCollection = `mutation DeleteCollection($input: DeleteCollectionInput!) {
  deleteCollection(input: $input) {
    id
    name
    summary
    sermonCount
    createdBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    collectionSermons {
      items {
        id
        createdAt
        keywords
      }
      nextToken
    }
    createdAt
    keywords
  }
}
`;
export const createCollectionSermon = `mutation CreateCollectionSermon($input: CreateCollectionSermonInput!) {
  createCollectionSermon(input: $input) {
    id
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    collection {
      id
      name
      summary
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      collectionSermons {
        nextToken
      }
      createdAt
      keywords
    }
    createdAt
    keywords
  }
}
`;
export const updateCollectionSermon = `mutation UpdateCollectionSermon($input: UpdateCollectionSermonInput!) {
  updateCollectionSermon(input: $input) {
    id
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    collection {
      id
      name
      summary
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      collectionSermons {
        nextToken
      }
      createdAt
      keywords
    }
    createdAt
    keywords
  }
}
`;
export const deleteCollectionSermon = `mutation DeleteCollectionSermon($input: DeleteCollectionSermonInput!) {
  deleteCollectionSermon(input: $input) {
    id
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    collection {
      id
      name
      summary
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      collectionSermons {
        nextToken
      }
      createdAt
      keywords
    }
    createdAt
    keywords
  }
}
`;
export const createPurchase = `mutation CreatePurchase($input: CreatePurchaseInput!) {
  createPurchase(input: $input) {
    id
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    credits
    createdAt
  }
}
`;
export const updatePurchase = `mutation UpdatePurchase($input: UpdatePurchaseInput!) {
  updatePurchase(input: $input) {
    id
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    credits
    createdAt
  }
}
`;
export const deletePurchase = `mutation DeletePurchase($input: DeletePurchaseInput!) {
  deletePurchase(input: $input) {
    id
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    credits
    createdAt
  }
}
`;
export const createTransaction = `mutation CreateTransaction($input: CreateTransactionInput!) {
  createTransaction(input: $input) {
    id
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    transactionId
    amount
    credits
    createdAt
    method
    currency
    processor
  }
}
`;
export const updateTransaction = `mutation UpdateTransaction($input: UpdateTransactionInput!) {
  updateTransaction(input: $input) {
    id
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    transactionId
    amount
    credits
    createdAt
    method
    currency
    processor
  }
}
`;
export const deleteTransaction = `mutation DeleteTransaction($input: DeleteTransactionInput!) {
  deleteTransaction(input: $input) {
    id
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    transactionId
    amount
    credits
    createdAt
    method
    currency
    processor
  }
}
`;
export const createWithdrawal = `mutation CreateWithdrawal($input: CreateWithdrawalInput!) {
  createWithdrawal(input: $input) {
    id
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    amount
    createdAt
    method
    processor
  }
}
`;
export const updateWithdrawal = `mutation UpdateWithdrawal($input: UpdateWithdrawalInput!) {
  updateWithdrawal(input: $input) {
    id
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    amount
    createdAt
    method
    processor
  }
}
`;
export const deleteWithdrawal = `mutation DeleteWithdrawal($input: DeleteWithdrawalInput!) {
  deleteWithdrawal(input: $input) {
    id
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    amount
    createdAt
    method
    processor
  }
}
`;
export const createInterest = `mutation CreateInterest($input: CreateInterestInput!) {
  createInterest(input: $input) {
    id
    subject {
      id
      subject
      sermons {
        nextToken
      }
      interests {
        nextToken
      }
      userIsInterested
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
  }
}
`;
export const updateInterest = `mutation UpdateInterest($input: UpdateInterestInput!) {
  updateInterest(input: $input) {
    id
    subject {
      id
      subject
      sermons {
        nextToken
      }
      interests {
        nextToken
      }
      userIsInterested
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
  }
}
`;
export const deleteInterest = `mutation DeleteInterest($input: DeleteInterestInput!) {
  deleteInterest(input: $input) {
    id
    subject {
      id
      subject
      sermons {
        nextToken
      }
      interests {
        nextToken
      }
      userIsInterested
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
  }
}
`;
export const createSubscription = `mutation CreateSubscription($input: CreateSubscriptionInput!) {
  createSubscription(input: $input) {
    id
    preacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    onCreateUser {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    onUpdateUser {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    onDeleteUser {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    onCreateSermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    onUpdateSermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    onDeleteSermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    onCreatePreacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    onUpdatePreacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    onDeletePreacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    onCreateMinistry {
      id
      name
      summary
      logoUrl
      externalLink
      ministryPreachers {
        nextToken
      }
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      keywords
    }
    onUpdateMinistry {
      id
      name
      summary
      logoUrl
      externalLink
      ministryPreachers {
        nextToken
      }
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      keywords
    }
    onDeleteMinistry {
      id
      name
      summary
      logoUrl
      externalLink
      ministryPreachers {
        nextToken
      }
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      keywords
    }
    onCreateMinistryPreacher {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      ministry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
    }
    onUpdateMinistryPreacher {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      ministry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
    }
    onDeleteMinistryPreacher {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      ministry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
    }
    onCreateSubject {
      id
      subject
      sermons {
        nextToken
      }
      interests {
        nextToken
      }
      userIsInterested
    }
    onUpdateSubject {
      id
      subject
      sermons {
        nextToken
      }
      interests {
        nextToken
      }
      userIsInterested
    }
    onDeleteSubject {
      id
      subject
      sermons {
        nextToken
      }
      interests {
        nextToken
      }
      userIsInterested
    }
    onCreateTag {
      id
      name
      tagSermons {
        nextToken
      }
    }
    onUpdateTag {
      id
      name
      tagSermons {
        nextToken
      }
    }
    onDeleteTag {
      id
      name
      tagSermons {
        nextToken
      }
    }
    onCreateTagSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      tag {
        id
        name
      }
    }
    onUpdateTagSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      tag {
        id
        name
      }
    }
    onDeleteTagSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      tag {
        id
        name
      }
    }
    onCreateCollection {
      id
      name
      summary
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      collectionSermons {
        nextToken
      }
      createdAt
      keywords
    }
    onUpdateCollection {
      id
      name
      summary
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      collectionSermons {
        nextToken
      }
      createdAt
      keywords
    }
    onDeleteCollection {
      id
      name
      summary
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      collectionSermons {
        nextToken
      }
      createdAt
      keywords
    }
    onCreateCollectionSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      collection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      createdAt
      keywords
    }
    onUpdateCollectionSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      collection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      createdAt
      keywords
    }
    onDeleteCollectionSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      collection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      createdAt
      keywords
    }
    onCreatePurchase {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      credits
      createdAt
    }
    onUpdatePurchase {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      credits
      createdAt
    }
    onDeletePurchase {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      credits
      createdAt
    }
    onCreateTransaction {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      transactionId
      amount
      credits
      createdAt
      method
      currency
      processor
    }
    onUpdateTransaction {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      transactionId
      amount
      credits
      createdAt
      method
      currency
      processor
    }
    onDeleteTransaction {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      transactionId
      amount
      credits
      createdAt
      method
      currency
      processor
    }
    onCreateWithdrawal {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      amount
      createdAt
      method
      processor
    }
    onUpdateWithdrawal {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      amount
      createdAt
      method
      processor
    }
    onDeleteWithdrawal {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      amount
      createdAt
      method
      processor
    }
    onCreateInterest {
      id
      subject {
        id
        subject
        userIsInterested
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onUpdateInterest {
      id
      subject {
        id
        subject
        userIsInterested
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onDeleteInterest {
      id
      subject {
        id
        subject
        userIsInterested
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onCreateSubscription {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onUpdateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onDeleteUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onUpdateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onDeleteSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onCreatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onUpdatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onDeletePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onCreateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onUpdateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onDeleteMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onCreateMinistryPreacher {
        id
      }
      onUpdateMinistryPreacher {
        id
      }
      onDeleteMinistryPreacher {
        id
      }
      onCreateSubject {
        id
        subject
        userIsInterested
      }
      onUpdateSubject {
        id
        subject
        userIsInterested
      }
      onDeleteSubject {
        id
        subject
        userIsInterested
      }
      onCreateTag {
        id
        name
      }
      onUpdateTag {
        id
        name
      }
      onDeleteTag {
        id
        name
      }
      onCreateTagSermon {
        id
      }
      onUpdateTagSermon {
        id
      }
      onDeleteTagSermon {
        id
      }
      onCreateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onUpdateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onDeleteCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onCreateCollectionSermon {
        id
        createdAt
        keywords
      }
      onUpdateCollectionSermon {
        id
        createdAt
        keywords
      }
      onDeleteCollectionSermon {
        id
        createdAt
        keywords
      }
      onCreatePurchase {
        id
        credits
        createdAt
      }
      onUpdatePurchase {
        id
        credits
        createdAt
      }
      onDeletePurchase {
        id
        credits
        createdAt
      }
      onCreateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onUpdateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onDeleteTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onCreateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onUpdateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onDeleteWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onCreateInterest {
        id
      }
      onUpdateInterest {
        id
      }
      onDeleteInterest {
        id
      }
      onCreateSubscription {
        id
      }
      onUpdateSubscription {
        id
      }
      onDeleteSubscription {
        id
      }
      onCreateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onUpdateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onDeleteListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onCreateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onUpdateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onDeleteCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onCreateSave {
        id
        isSaved
        createdAt
      }
      onUpdateSave {
        id
        isSaved
        createdAt
      }
      onDeleteSave {
        id
        isSaved
        createdAt
      }
      onCreateFavourite {
        id
        isFavourite
        createdAt
      }
      onUpdateFavourite {
        id
        isFavourite
        createdAt
      }
      onDeleteFavourite {
        id
        isFavourite
        createdAt
      }
      onCreateBadge {
        id
        name
        description
      }
      onUpdateBadge {
        id
        name
        description
      }
      onDeleteBadge {
        id
        name
        description
      }
      onCreateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onUpdateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onDeleteListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onCreateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onUpdateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onDeleteInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onCreateInsightSave {
        id
        isSaved
      }
      onUpdateInsightSave {
        id
        isSaved
      }
      onDeleteInsightSave {
        id
        isSaved
      }
    }
    onUpdateSubscription {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onUpdateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onDeleteUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onUpdateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onDeleteSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onCreatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onUpdatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onDeletePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onCreateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onUpdateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onDeleteMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onCreateMinistryPreacher {
        id
      }
      onUpdateMinistryPreacher {
        id
      }
      onDeleteMinistryPreacher {
        id
      }
      onCreateSubject {
        id
        subject
        userIsInterested
      }
      onUpdateSubject {
        id
        subject
        userIsInterested
      }
      onDeleteSubject {
        id
        subject
        userIsInterested
      }
      onCreateTag {
        id
        name
      }
      onUpdateTag {
        id
        name
      }
      onDeleteTag {
        id
        name
      }
      onCreateTagSermon {
        id
      }
      onUpdateTagSermon {
        id
      }
      onDeleteTagSermon {
        id
      }
      onCreateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onUpdateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onDeleteCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onCreateCollectionSermon {
        id
        createdAt
        keywords
      }
      onUpdateCollectionSermon {
        id
        createdAt
        keywords
      }
      onDeleteCollectionSermon {
        id
        createdAt
        keywords
      }
      onCreatePurchase {
        id
        credits
        createdAt
      }
      onUpdatePurchase {
        id
        credits
        createdAt
      }
      onDeletePurchase {
        id
        credits
        createdAt
      }
      onCreateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onUpdateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onDeleteTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onCreateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onUpdateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onDeleteWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onCreateInterest {
        id
      }
      onUpdateInterest {
        id
      }
      onDeleteInterest {
        id
      }
      onCreateSubscription {
        id
      }
      onUpdateSubscription {
        id
      }
      onDeleteSubscription {
        id
      }
      onCreateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onUpdateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onDeleteListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onCreateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onUpdateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onDeleteCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onCreateSave {
        id
        isSaved
        createdAt
      }
      onUpdateSave {
        id
        isSaved
        createdAt
      }
      onDeleteSave {
        id
        isSaved
        createdAt
      }
      onCreateFavourite {
        id
        isFavourite
        createdAt
      }
      onUpdateFavourite {
        id
        isFavourite
        createdAt
      }
      onDeleteFavourite {
        id
        isFavourite
        createdAt
      }
      onCreateBadge {
        id
        name
        description
      }
      onUpdateBadge {
        id
        name
        description
      }
      onDeleteBadge {
        id
        name
        description
      }
      onCreateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onUpdateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onDeleteListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onCreateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onUpdateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onDeleteInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onCreateInsightSave {
        id
        isSaved
      }
      onUpdateInsightSave {
        id
        isSaved
      }
      onDeleteInsightSave {
        id
        isSaved
      }
    }
    onDeleteSubscription {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onUpdateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onDeleteUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onUpdateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onDeleteSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onCreatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onUpdatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onDeletePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onCreateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onUpdateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onDeleteMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onCreateMinistryPreacher {
        id
      }
      onUpdateMinistryPreacher {
        id
      }
      onDeleteMinistryPreacher {
        id
      }
      onCreateSubject {
        id
        subject
        userIsInterested
      }
      onUpdateSubject {
        id
        subject
        userIsInterested
      }
      onDeleteSubject {
        id
        subject
        userIsInterested
      }
      onCreateTag {
        id
        name
      }
      onUpdateTag {
        id
        name
      }
      onDeleteTag {
        id
        name
      }
      onCreateTagSermon {
        id
      }
      onUpdateTagSermon {
        id
      }
      onDeleteTagSermon {
        id
      }
      onCreateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onUpdateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onDeleteCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onCreateCollectionSermon {
        id
        createdAt
        keywords
      }
      onUpdateCollectionSermon {
        id
        createdAt
        keywords
      }
      onDeleteCollectionSermon {
        id
        createdAt
        keywords
      }
      onCreatePurchase {
        id
        credits
        createdAt
      }
      onUpdatePurchase {
        id
        credits
        createdAt
      }
      onDeletePurchase {
        id
        credits
        createdAt
      }
      onCreateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onUpdateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onDeleteTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onCreateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onUpdateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onDeleteWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onCreateInterest {
        id
      }
      onUpdateInterest {
        id
      }
      onDeleteInterest {
        id
      }
      onCreateSubscription {
        id
      }
      onUpdateSubscription {
        id
      }
      onDeleteSubscription {
        id
      }
      onCreateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onUpdateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onDeleteListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onCreateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onUpdateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onDeleteCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onCreateSave {
        id
        isSaved
        createdAt
      }
      onUpdateSave {
        id
        isSaved
        createdAt
      }
      onDeleteSave {
        id
        isSaved
        createdAt
      }
      onCreateFavourite {
        id
        isFavourite
        createdAt
      }
      onUpdateFavourite {
        id
        isFavourite
        createdAt
      }
      onDeleteFavourite {
        id
        isFavourite
        createdAt
      }
      onCreateBadge {
        id
        name
        description
      }
      onUpdateBadge {
        id
        name
        description
      }
      onDeleteBadge {
        id
        name
        description
      }
      onCreateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onUpdateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onDeleteListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onCreateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onUpdateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onDeleteInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onCreateInsightSave {
        id
        isSaved
      }
      onUpdateInsightSave {
        id
        isSaved
      }
      onDeleteInsightSave {
        id
        isSaved
      }
    }
    onCreateListen {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
      createdAt
    }
    onUpdateListen {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
      createdAt
    }
    onDeleteListen {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
      createdAt
    }
    onCreateCompletion {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
    }
    onUpdateCompletion {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
    }
    onDeleteCompletion {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
    }
    onCreateSave {
      id
      isSaved
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onUpdateSave {
      id
      isSaved
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onDeleteSave {
      id
      isSaved
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onCreateFavourite {
      id
      isFavourite
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onUpdateFavourite {
      id
      isFavourite
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onDeleteFavourite {
      id
      isFavourite
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onCreateBadge {
      id
      name
      description
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onUpdateBadge {
      id
      name
      description
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onDeleteBadge {
      id
      name
      description
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onCreateListenActivity {
      id
      secondsListened
      date
      day
      month
      year
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
      fullDate
    }
    onUpdateListenActivity {
      id
      secondsListened
      date
      day
      month
      year
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
      fullDate
    }
    onDeleteListenActivity {
      id
      secondsListened
      date
      day
      month
      year
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
      fullDate
    }
    onCreateInsight {
      id
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      caption
      notes
      scriptures
      meditations
      isPublic
      createdAt
      saveCount
      saves {
        nextToken
      }
    }
    onUpdateInsight {
      id
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      caption
      notes
      scriptures
      meditations
      isPublic
      createdAt
      saveCount
      saves {
        nextToken
      }
    }
    onDeleteInsight {
      id
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      caption
      notes
      scriptures
      meditations
      isPublic
      createdAt
      saveCount
      saves {
        nextToken
      }
    }
    onCreateInsightSave {
      id
      isSaved
      insight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onUpdateInsightSave {
      id
      isSaved
      insight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onDeleteInsightSave {
      id
      isSaved
      insight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
  }
}
`;
export const updateSubscription = `mutation UpdateSubscription($input: UpdateSubscriptionInput!) {
  updateSubscription(input: $input) {
    id
    preacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    onCreateUser {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    onUpdateUser {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    onDeleteUser {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    onCreateSermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    onUpdateSermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    onDeleteSermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    onCreatePreacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    onUpdatePreacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    onDeletePreacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    onCreateMinistry {
      id
      name
      summary
      logoUrl
      externalLink
      ministryPreachers {
        nextToken
      }
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      keywords
    }
    onUpdateMinistry {
      id
      name
      summary
      logoUrl
      externalLink
      ministryPreachers {
        nextToken
      }
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      keywords
    }
    onDeleteMinistry {
      id
      name
      summary
      logoUrl
      externalLink
      ministryPreachers {
        nextToken
      }
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      keywords
    }
    onCreateMinistryPreacher {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      ministry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
    }
    onUpdateMinistryPreacher {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      ministry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
    }
    onDeleteMinistryPreacher {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      ministry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
    }
    onCreateSubject {
      id
      subject
      sermons {
        nextToken
      }
      interests {
        nextToken
      }
      userIsInterested
    }
    onUpdateSubject {
      id
      subject
      sermons {
        nextToken
      }
      interests {
        nextToken
      }
      userIsInterested
    }
    onDeleteSubject {
      id
      subject
      sermons {
        nextToken
      }
      interests {
        nextToken
      }
      userIsInterested
    }
    onCreateTag {
      id
      name
      tagSermons {
        nextToken
      }
    }
    onUpdateTag {
      id
      name
      tagSermons {
        nextToken
      }
    }
    onDeleteTag {
      id
      name
      tagSermons {
        nextToken
      }
    }
    onCreateTagSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      tag {
        id
        name
      }
    }
    onUpdateTagSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      tag {
        id
        name
      }
    }
    onDeleteTagSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      tag {
        id
        name
      }
    }
    onCreateCollection {
      id
      name
      summary
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      collectionSermons {
        nextToken
      }
      createdAt
      keywords
    }
    onUpdateCollection {
      id
      name
      summary
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      collectionSermons {
        nextToken
      }
      createdAt
      keywords
    }
    onDeleteCollection {
      id
      name
      summary
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      collectionSermons {
        nextToken
      }
      createdAt
      keywords
    }
    onCreateCollectionSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      collection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      createdAt
      keywords
    }
    onUpdateCollectionSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      collection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      createdAt
      keywords
    }
    onDeleteCollectionSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      collection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      createdAt
      keywords
    }
    onCreatePurchase {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      credits
      createdAt
    }
    onUpdatePurchase {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      credits
      createdAt
    }
    onDeletePurchase {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      credits
      createdAt
    }
    onCreateTransaction {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      transactionId
      amount
      credits
      createdAt
      method
      currency
      processor
    }
    onUpdateTransaction {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      transactionId
      amount
      credits
      createdAt
      method
      currency
      processor
    }
    onDeleteTransaction {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      transactionId
      amount
      credits
      createdAt
      method
      currency
      processor
    }
    onCreateWithdrawal {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      amount
      createdAt
      method
      processor
    }
    onUpdateWithdrawal {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      amount
      createdAt
      method
      processor
    }
    onDeleteWithdrawal {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      amount
      createdAt
      method
      processor
    }
    onCreateInterest {
      id
      subject {
        id
        subject
        userIsInterested
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onUpdateInterest {
      id
      subject {
        id
        subject
        userIsInterested
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onDeleteInterest {
      id
      subject {
        id
        subject
        userIsInterested
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onCreateSubscription {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onUpdateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onDeleteUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onUpdateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onDeleteSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onCreatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onUpdatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onDeletePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onCreateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onUpdateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onDeleteMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onCreateMinistryPreacher {
        id
      }
      onUpdateMinistryPreacher {
        id
      }
      onDeleteMinistryPreacher {
        id
      }
      onCreateSubject {
        id
        subject
        userIsInterested
      }
      onUpdateSubject {
        id
        subject
        userIsInterested
      }
      onDeleteSubject {
        id
        subject
        userIsInterested
      }
      onCreateTag {
        id
        name
      }
      onUpdateTag {
        id
        name
      }
      onDeleteTag {
        id
        name
      }
      onCreateTagSermon {
        id
      }
      onUpdateTagSermon {
        id
      }
      onDeleteTagSermon {
        id
      }
      onCreateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onUpdateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onDeleteCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onCreateCollectionSermon {
        id
        createdAt
        keywords
      }
      onUpdateCollectionSermon {
        id
        createdAt
        keywords
      }
      onDeleteCollectionSermon {
        id
        createdAt
        keywords
      }
      onCreatePurchase {
        id
        credits
        createdAt
      }
      onUpdatePurchase {
        id
        credits
        createdAt
      }
      onDeletePurchase {
        id
        credits
        createdAt
      }
      onCreateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onUpdateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onDeleteTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onCreateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onUpdateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onDeleteWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onCreateInterest {
        id
      }
      onUpdateInterest {
        id
      }
      onDeleteInterest {
        id
      }
      onCreateSubscription {
        id
      }
      onUpdateSubscription {
        id
      }
      onDeleteSubscription {
        id
      }
      onCreateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onUpdateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onDeleteListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onCreateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onUpdateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onDeleteCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onCreateSave {
        id
        isSaved
        createdAt
      }
      onUpdateSave {
        id
        isSaved
        createdAt
      }
      onDeleteSave {
        id
        isSaved
        createdAt
      }
      onCreateFavourite {
        id
        isFavourite
        createdAt
      }
      onUpdateFavourite {
        id
        isFavourite
        createdAt
      }
      onDeleteFavourite {
        id
        isFavourite
        createdAt
      }
      onCreateBadge {
        id
        name
        description
      }
      onUpdateBadge {
        id
        name
        description
      }
      onDeleteBadge {
        id
        name
        description
      }
      onCreateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onUpdateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onDeleteListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onCreateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onUpdateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onDeleteInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onCreateInsightSave {
        id
        isSaved
      }
      onUpdateInsightSave {
        id
        isSaved
      }
      onDeleteInsightSave {
        id
        isSaved
      }
    }
    onUpdateSubscription {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onUpdateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onDeleteUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onUpdateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onDeleteSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onCreatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onUpdatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onDeletePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onCreateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onUpdateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onDeleteMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onCreateMinistryPreacher {
        id
      }
      onUpdateMinistryPreacher {
        id
      }
      onDeleteMinistryPreacher {
        id
      }
      onCreateSubject {
        id
        subject
        userIsInterested
      }
      onUpdateSubject {
        id
        subject
        userIsInterested
      }
      onDeleteSubject {
        id
        subject
        userIsInterested
      }
      onCreateTag {
        id
        name
      }
      onUpdateTag {
        id
        name
      }
      onDeleteTag {
        id
        name
      }
      onCreateTagSermon {
        id
      }
      onUpdateTagSermon {
        id
      }
      onDeleteTagSermon {
        id
      }
      onCreateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onUpdateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onDeleteCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onCreateCollectionSermon {
        id
        createdAt
        keywords
      }
      onUpdateCollectionSermon {
        id
        createdAt
        keywords
      }
      onDeleteCollectionSermon {
        id
        createdAt
        keywords
      }
      onCreatePurchase {
        id
        credits
        createdAt
      }
      onUpdatePurchase {
        id
        credits
        createdAt
      }
      onDeletePurchase {
        id
        credits
        createdAt
      }
      onCreateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onUpdateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onDeleteTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onCreateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onUpdateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onDeleteWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onCreateInterest {
        id
      }
      onUpdateInterest {
        id
      }
      onDeleteInterest {
        id
      }
      onCreateSubscription {
        id
      }
      onUpdateSubscription {
        id
      }
      onDeleteSubscription {
        id
      }
      onCreateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onUpdateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onDeleteListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onCreateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onUpdateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onDeleteCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onCreateSave {
        id
        isSaved
        createdAt
      }
      onUpdateSave {
        id
        isSaved
        createdAt
      }
      onDeleteSave {
        id
        isSaved
        createdAt
      }
      onCreateFavourite {
        id
        isFavourite
        createdAt
      }
      onUpdateFavourite {
        id
        isFavourite
        createdAt
      }
      onDeleteFavourite {
        id
        isFavourite
        createdAt
      }
      onCreateBadge {
        id
        name
        description
      }
      onUpdateBadge {
        id
        name
        description
      }
      onDeleteBadge {
        id
        name
        description
      }
      onCreateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onUpdateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onDeleteListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onCreateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onUpdateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onDeleteInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onCreateInsightSave {
        id
        isSaved
      }
      onUpdateInsightSave {
        id
        isSaved
      }
      onDeleteInsightSave {
        id
        isSaved
      }
    }
    onDeleteSubscription {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onUpdateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onDeleteUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onUpdateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onDeleteSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onCreatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onUpdatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onDeletePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onCreateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onUpdateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onDeleteMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onCreateMinistryPreacher {
        id
      }
      onUpdateMinistryPreacher {
        id
      }
      onDeleteMinistryPreacher {
        id
      }
      onCreateSubject {
        id
        subject
        userIsInterested
      }
      onUpdateSubject {
        id
        subject
        userIsInterested
      }
      onDeleteSubject {
        id
        subject
        userIsInterested
      }
      onCreateTag {
        id
        name
      }
      onUpdateTag {
        id
        name
      }
      onDeleteTag {
        id
        name
      }
      onCreateTagSermon {
        id
      }
      onUpdateTagSermon {
        id
      }
      onDeleteTagSermon {
        id
      }
      onCreateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onUpdateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onDeleteCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onCreateCollectionSermon {
        id
        createdAt
        keywords
      }
      onUpdateCollectionSermon {
        id
        createdAt
        keywords
      }
      onDeleteCollectionSermon {
        id
        createdAt
        keywords
      }
      onCreatePurchase {
        id
        credits
        createdAt
      }
      onUpdatePurchase {
        id
        credits
        createdAt
      }
      onDeletePurchase {
        id
        credits
        createdAt
      }
      onCreateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onUpdateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onDeleteTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onCreateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onUpdateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onDeleteWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onCreateInterest {
        id
      }
      onUpdateInterest {
        id
      }
      onDeleteInterest {
        id
      }
      onCreateSubscription {
        id
      }
      onUpdateSubscription {
        id
      }
      onDeleteSubscription {
        id
      }
      onCreateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onUpdateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onDeleteListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onCreateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onUpdateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onDeleteCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onCreateSave {
        id
        isSaved
        createdAt
      }
      onUpdateSave {
        id
        isSaved
        createdAt
      }
      onDeleteSave {
        id
        isSaved
        createdAt
      }
      onCreateFavourite {
        id
        isFavourite
        createdAt
      }
      onUpdateFavourite {
        id
        isFavourite
        createdAt
      }
      onDeleteFavourite {
        id
        isFavourite
        createdAt
      }
      onCreateBadge {
        id
        name
        description
      }
      onUpdateBadge {
        id
        name
        description
      }
      onDeleteBadge {
        id
        name
        description
      }
      onCreateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onUpdateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onDeleteListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onCreateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onUpdateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onDeleteInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onCreateInsightSave {
        id
        isSaved
      }
      onUpdateInsightSave {
        id
        isSaved
      }
      onDeleteInsightSave {
        id
        isSaved
      }
    }
    onCreateListen {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
      createdAt
    }
    onUpdateListen {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
      createdAt
    }
    onDeleteListen {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
      createdAt
    }
    onCreateCompletion {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
    }
    onUpdateCompletion {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
    }
    onDeleteCompletion {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
    }
    onCreateSave {
      id
      isSaved
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onUpdateSave {
      id
      isSaved
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onDeleteSave {
      id
      isSaved
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onCreateFavourite {
      id
      isFavourite
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onUpdateFavourite {
      id
      isFavourite
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onDeleteFavourite {
      id
      isFavourite
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onCreateBadge {
      id
      name
      description
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onUpdateBadge {
      id
      name
      description
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onDeleteBadge {
      id
      name
      description
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onCreateListenActivity {
      id
      secondsListened
      date
      day
      month
      year
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
      fullDate
    }
    onUpdateListenActivity {
      id
      secondsListened
      date
      day
      month
      year
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
      fullDate
    }
    onDeleteListenActivity {
      id
      secondsListened
      date
      day
      month
      year
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
      fullDate
    }
    onCreateInsight {
      id
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      caption
      notes
      scriptures
      meditations
      isPublic
      createdAt
      saveCount
      saves {
        nextToken
      }
    }
    onUpdateInsight {
      id
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      caption
      notes
      scriptures
      meditations
      isPublic
      createdAt
      saveCount
      saves {
        nextToken
      }
    }
    onDeleteInsight {
      id
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      caption
      notes
      scriptures
      meditations
      isPublic
      createdAt
      saveCount
      saves {
        nextToken
      }
    }
    onCreateInsightSave {
      id
      isSaved
      insight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onUpdateInsightSave {
      id
      isSaved
      insight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onDeleteInsightSave {
      id
      isSaved
      insight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
  }
}
`;
export const deleteSubscription = `mutation DeleteSubscription($input: DeleteSubscriptionInput!) {
  deleteSubscription(input: $input) {
    id
    preacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    onCreateUser {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    onUpdateUser {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    onDeleteUser {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    onCreateSermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    onUpdateSermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    onDeleteSermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    onCreatePreacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    onUpdatePreacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    onDeletePreacher {
      id
      name
      bio
      image
      externalLink
      profilePicture
      subscriptionCount
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermons {
        nextToken
      }
      subscriptions {
        nextToken
      }
      userIsSubscribed
      ministries {
        nextToken
      }
      keywords
    }
    onCreateMinistry {
      id
      name
      summary
      logoUrl
      externalLink
      ministryPreachers {
        nextToken
      }
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      keywords
    }
    onUpdateMinistry {
      id
      name
      summary
      logoUrl
      externalLink
      ministryPreachers {
        nextToken
      }
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      keywords
    }
    onDeleteMinistry {
      id
      name
      summary
      logoUrl
      externalLink
      ministryPreachers {
        nextToken
      }
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      keywords
    }
    onCreateMinistryPreacher {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      ministry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
    }
    onUpdateMinistryPreacher {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      ministry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
    }
    onDeleteMinistryPreacher {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      ministry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
    }
    onCreateSubject {
      id
      subject
      sermons {
        nextToken
      }
      interests {
        nextToken
      }
      userIsInterested
    }
    onUpdateSubject {
      id
      subject
      sermons {
        nextToken
      }
      interests {
        nextToken
      }
      userIsInterested
    }
    onDeleteSubject {
      id
      subject
      sermons {
        nextToken
      }
      interests {
        nextToken
      }
      userIsInterested
    }
    onCreateTag {
      id
      name
      tagSermons {
        nextToken
      }
    }
    onUpdateTag {
      id
      name
      tagSermons {
        nextToken
      }
    }
    onDeleteTag {
      id
      name
      tagSermons {
        nextToken
      }
    }
    onCreateTagSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      tag {
        id
        name
      }
    }
    onUpdateTagSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      tag {
        id
        name
      }
    }
    onDeleteTagSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      tag {
        id
        name
      }
    }
    onCreateCollection {
      id
      name
      summary
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      collectionSermons {
        nextToken
      }
      createdAt
      keywords
    }
    onUpdateCollection {
      id
      name
      summary
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      collectionSermons {
        nextToken
      }
      createdAt
      keywords
    }
    onDeleteCollection {
      id
      name
      summary
      sermonCount
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      collectionSermons {
        nextToken
      }
      createdAt
      keywords
    }
    onCreateCollectionSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      collection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      createdAt
      keywords
    }
    onUpdateCollectionSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      collection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      createdAt
      keywords
    }
    onDeleteCollectionSermon {
      id
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      collection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      createdAt
      keywords
    }
    onCreatePurchase {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      credits
      createdAt
    }
    onUpdatePurchase {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      credits
      createdAt
    }
    onDeletePurchase {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      credits
      createdAt
    }
    onCreateTransaction {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      transactionId
      amount
      credits
      createdAt
      method
      currency
      processor
    }
    onUpdateTransaction {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      transactionId
      amount
      credits
      createdAt
      method
      currency
      processor
    }
    onDeleteTransaction {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      transactionId
      amount
      credits
      createdAt
      method
      currency
      processor
    }
    onCreateWithdrawal {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      amount
      createdAt
      method
      processor
    }
    onUpdateWithdrawal {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      amount
      createdAt
      method
      processor
    }
    onDeleteWithdrawal {
      id
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      amount
      createdAt
      method
      processor
    }
    onCreateInterest {
      id
      subject {
        id
        subject
        userIsInterested
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onUpdateInterest {
      id
      subject {
        id
        subject
        userIsInterested
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onDeleteInterest {
      id
      subject {
        id
        subject
        userIsInterested
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onCreateSubscription {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onUpdateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onDeleteUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onUpdateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onDeleteSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onCreatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onUpdatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onDeletePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onCreateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onUpdateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onDeleteMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onCreateMinistryPreacher {
        id
      }
      onUpdateMinistryPreacher {
        id
      }
      onDeleteMinistryPreacher {
        id
      }
      onCreateSubject {
        id
        subject
        userIsInterested
      }
      onUpdateSubject {
        id
        subject
        userIsInterested
      }
      onDeleteSubject {
        id
        subject
        userIsInterested
      }
      onCreateTag {
        id
        name
      }
      onUpdateTag {
        id
        name
      }
      onDeleteTag {
        id
        name
      }
      onCreateTagSermon {
        id
      }
      onUpdateTagSermon {
        id
      }
      onDeleteTagSermon {
        id
      }
      onCreateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onUpdateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onDeleteCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onCreateCollectionSermon {
        id
        createdAt
        keywords
      }
      onUpdateCollectionSermon {
        id
        createdAt
        keywords
      }
      onDeleteCollectionSermon {
        id
        createdAt
        keywords
      }
      onCreatePurchase {
        id
        credits
        createdAt
      }
      onUpdatePurchase {
        id
        credits
        createdAt
      }
      onDeletePurchase {
        id
        credits
        createdAt
      }
      onCreateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onUpdateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onDeleteTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onCreateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onUpdateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onDeleteWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onCreateInterest {
        id
      }
      onUpdateInterest {
        id
      }
      onDeleteInterest {
        id
      }
      onCreateSubscription {
        id
      }
      onUpdateSubscription {
        id
      }
      onDeleteSubscription {
        id
      }
      onCreateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onUpdateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onDeleteListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onCreateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onUpdateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onDeleteCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onCreateSave {
        id
        isSaved
        createdAt
      }
      onUpdateSave {
        id
        isSaved
        createdAt
      }
      onDeleteSave {
        id
        isSaved
        createdAt
      }
      onCreateFavourite {
        id
        isFavourite
        createdAt
      }
      onUpdateFavourite {
        id
        isFavourite
        createdAt
      }
      onDeleteFavourite {
        id
        isFavourite
        createdAt
      }
      onCreateBadge {
        id
        name
        description
      }
      onUpdateBadge {
        id
        name
        description
      }
      onDeleteBadge {
        id
        name
        description
      }
      onCreateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onUpdateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onDeleteListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onCreateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onUpdateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onDeleteInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onCreateInsightSave {
        id
        isSaved
      }
      onUpdateInsightSave {
        id
        isSaved
      }
      onDeleteInsightSave {
        id
        isSaved
      }
    }
    onUpdateSubscription {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onUpdateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onDeleteUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onUpdateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onDeleteSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onCreatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onUpdatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onDeletePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onCreateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onUpdateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onDeleteMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onCreateMinistryPreacher {
        id
      }
      onUpdateMinistryPreacher {
        id
      }
      onDeleteMinistryPreacher {
        id
      }
      onCreateSubject {
        id
        subject
        userIsInterested
      }
      onUpdateSubject {
        id
        subject
        userIsInterested
      }
      onDeleteSubject {
        id
        subject
        userIsInterested
      }
      onCreateTag {
        id
        name
      }
      onUpdateTag {
        id
        name
      }
      onDeleteTag {
        id
        name
      }
      onCreateTagSermon {
        id
      }
      onUpdateTagSermon {
        id
      }
      onDeleteTagSermon {
        id
      }
      onCreateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onUpdateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onDeleteCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onCreateCollectionSermon {
        id
        createdAt
        keywords
      }
      onUpdateCollectionSermon {
        id
        createdAt
        keywords
      }
      onDeleteCollectionSermon {
        id
        createdAt
        keywords
      }
      onCreatePurchase {
        id
        credits
        createdAt
      }
      onUpdatePurchase {
        id
        credits
        createdAt
      }
      onDeletePurchase {
        id
        credits
        createdAt
      }
      onCreateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onUpdateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onDeleteTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onCreateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onUpdateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onDeleteWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onCreateInterest {
        id
      }
      onUpdateInterest {
        id
      }
      onDeleteInterest {
        id
      }
      onCreateSubscription {
        id
      }
      onUpdateSubscription {
        id
      }
      onDeleteSubscription {
        id
      }
      onCreateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onUpdateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onDeleteListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onCreateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onUpdateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onDeleteCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onCreateSave {
        id
        isSaved
        createdAt
      }
      onUpdateSave {
        id
        isSaved
        createdAt
      }
      onDeleteSave {
        id
        isSaved
        createdAt
      }
      onCreateFavourite {
        id
        isFavourite
        createdAt
      }
      onUpdateFavourite {
        id
        isFavourite
        createdAt
      }
      onDeleteFavourite {
        id
        isFavourite
        createdAt
      }
      onCreateBadge {
        id
        name
        description
      }
      onUpdateBadge {
        id
        name
        description
      }
      onDeleteBadge {
        id
        name
        description
      }
      onCreateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onUpdateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onDeleteListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onCreateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onUpdateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onDeleteInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onCreateInsightSave {
        id
        isSaved
      }
      onUpdateInsightSave {
        id
        isSaved
      }
      onDeleteInsightSave {
        id
        isSaved
      }
    }
    onDeleteSubscription {
      id
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onUpdateUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onDeleteUser {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      onCreateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onUpdateSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onDeleteSermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      onCreatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onUpdatePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onDeletePreacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      onCreateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onUpdateMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onDeleteMinistry {
        id
        name
        summary
        logoUrl
        externalLink
        keywords
      }
      onCreateMinistryPreacher {
        id
      }
      onUpdateMinistryPreacher {
        id
      }
      onDeleteMinistryPreacher {
        id
      }
      onCreateSubject {
        id
        subject
        userIsInterested
      }
      onUpdateSubject {
        id
        subject
        userIsInterested
      }
      onDeleteSubject {
        id
        subject
        userIsInterested
      }
      onCreateTag {
        id
        name
      }
      onUpdateTag {
        id
        name
      }
      onDeleteTag {
        id
        name
      }
      onCreateTagSermon {
        id
      }
      onUpdateTagSermon {
        id
      }
      onDeleteTagSermon {
        id
      }
      onCreateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onUpdateCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onDeleteCollection {
        id
        name
        summary
        sermonCount
        createdAt
        keywords
      }
      onCreateCollectionSermon {
        id
        createdAt
        keywords
      }
      onUpdateCollectionSermon {
        id
        createdAt
        keywords
      }
      onDeleteCollectionSermon {
        id
        createdAt
        keywords
      }
      onCreatePurchase {
        id
        credits
        createdAt
      }
      onUpdatePurchase {
        id
        credits
        createdAt
      }
      onDeletePurchase {
        id
        credits
        createdAt
      }
      onCreateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onUpdateTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onDeleteTransaction {
        id
        transactionId
        amount
        credits
        createdAt
        method
        currency
        processor
      }
      onCreateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onUpdateWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onDeleteWithdrawal {
        id
        amount
        createdAt
        method
        processor
      }
      onCreateInterest {
        id
      }
      onUpdateInterest {
        id
      }
      onDeleteInterest {
        id
      }
      onCreateSubscription {
        id
      }
      onUpdateSubscription {
        id
      }
      onDeleteSubscription {
        id
      }
      onCreateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onUpdateListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onDeleteListen {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      onCreateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onUpdateCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onDeleteCompletion {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
      }
      onCreateSave {
        id
        isSaved
        createdAt
      }
      onUpdateSave {
        id
        isSaved
        createdAt
      }
      onDeleteSave {
        id
        isSaved
        createdAt
      }
      onCreateFavourite {
        id
        isFavourite
        createdAt
      }
      onUpdateFavourite {
        id
        isFavourite
        createdAt
      }
      onDeleteFavourite {
        id
        isFavourite
        createdAt
      }
      onCreateBadge {
        id
        name
        description
      }
      onUpdateBadge {
        id
        name
        description
      }
      onDeleteBadge {
        id
        name
        description
      }
      onCreateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onUpdateListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onDeleteListenActivity {
        id
        secondsListened
        date
        day
        month
        year
        createdAt
        fullDate
      }
      onCreateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onUpdateInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onDeleteInsight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      onCreateInsightSave {
        id
        isSaved
      }
      onUpdateInsightSave {
        id
        isSaved
      }
      onDeleteInsightSave {
        id
        isSaved
      }
    }
    onCreateListen {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
      createdAt
    }
    onUpdateListen {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
      createdAt
    }
    onDeleteListen {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
      createdAt
    }
    onCreateCompletion {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
    }
    onUpdateCompletion {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
    }
    onDeleteCompletion {
      id
      isFinished
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      minutesListened
      totalLength
      currentStatus
    }
    onCreateSave {
      id
      isSaved
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onUpdateSave {
      id
      isSaved
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onDeleteSave {
      id
      isSaved
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onCreateFavourite {
      id
      isFavourite
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onUpdateFavourite {
      id
      isFavourite
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onDeleteFavourite {
      id
      isFavourite
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
    }
    onCreateBadge {
      id
      name
      description
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onUpdateBadge {
      id
      name
      description
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onDeleteBadge {
      id
      name
      description
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onCreateListenActivity {
      id
      secondsListened
      date
      day
      month
      year
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
      fullDate
    }
    onUpdateListenActivity {
      id
      secondsListened
      date
      day
      month
      year
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
      fullDate
    }
    onDeleteListenActivity {
      id
      secondsListened
      date
      day
      month
      year
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      createdAt
      fullDate
    }
    onCreateInsight {
      id
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      caption
      notes
      scriptures
      meditations
      isPublic
      createdAt
      saveCount
      saves {
        nextToken
      }
    }
    onUpdateInsight {
      id
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      caption
      notes
      scriptures
      meditations
      isPublic
      createdAt
      saveCount
      saves {
        nextToken
      }
    }
    onDeleteInsight {
      id
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      caption
      notes
      scriptures
      meditations
      isPublic
      createdAt
      saveCount
      saves {
        nextToken
      }
    }
    onCreateInsightSave {
      id
      isSaved
      insight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onUpdateInsightSave {
      id
      isSaved
      insight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
    onDeleteInsightSave {
      id
      isSaved
      insight {
        id
        caption
        notes
        scriptures
        meditations
        isPublic
        createdAt
        saveCount
      }
      user {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
    }
  }
}
`;
export const createListen = `mutation CreateListen($input: CreateListenInput!) {
  createListen(input: $input) {
    id
    isFinished
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    minutesListened
    totalLength
    currentStatus
    createdAt
  }
}
`;
export const updateListen = `mutation UpdateListen($input: UpdateListenInput!) {
  updateListen(input: $input) {
    id
    isFinished
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    minutesListened
    totalLength
    currentStatus
    createdAt
  }
}
`;
export const deleteListen = `mutation DeleteListen($input: DeleteListenInput!) {
  deleteListen(input: $input) {
    id
    isFinished
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    minutesListened
    totalLength
    currentStatus
    createdAt
  }
}
`;
export const createCompletion = `mutation CreateCompletion($input: CreateCompletionInput!) {
  createCompletion(input: $input) {
    id
    isFinished
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    minutesListened
    totalLength
    currentStatus
  }
}
`;
export const updateCompletion = `mutation UpdateCompletion($input: UpdateCompletionInput!) {
  updateCompletion(input: $input) {
    id
    isFinished
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    minutesListened
    totalLength
    currentStatus
  }
}
`;
export const deleteCompletion = `mutation DeleteCompletion($input: DeleteCompletionInput!) {
  deleteCompletion(input: $input) {
    id
    isFinished
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    minutesListened
    totalLength
    currentStatus
  }
}
`;
export const createSave = `mutation CreateSave($input: CreateSaveInput!) {
  createSave(input: $input) {
    id
    isSaved
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    createdAt
  }
}
`;
export const updateSave = `mutation UpdateSave($input: UpdateSaveInput!) {
  updateSave(input: $input) {
    id
    isSaved
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    createdAt
  }
}
`;
export const deleteSave = `mutation DeleteSave($input: DeleteSaveInput!) {
  deleteSave(input: $input) {
    id
    isSaved
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    createdAt
  }
}
`;
export const createFavourite = `mutation CreateFavourite($input: CreateFavouriteInput!) {
  createFavourite(input: $input) {
    id
    isFavourite
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    createdAt
  }
}
`;
export const updateFavourite = `mutation UpdateFavourite($input: UpdateFavouriteInput!) {
  updateFavourite(input: $input) {
    id
    isFavourite
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    createdAt
  }
}
`;
export const deleteFavourite = `mutation DeleteFavourite($input: DeleteFavouriteInput!) {
  deleteFavourite(input: $input) {
    id
    isFavourite
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    createdAt
  }
}
`;
export const createBadge = `mutation CreateBadge($input: CreateBadgeInput!) {
  createBadge(input: $input) {
    id
    name
    description
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
  }
}
`;
export const updateBadge = `mutation UpdateBadge($input: UpdateBadgeInput!) {
  updateBadge(input: $input) {
    id
    name
    description
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
  }
}
`;
export const deleteBadge = `mutation DeleteBadge($input: DeleteBadgeInput!) {
  deleteBadge(input: $input) {
    id
    name
    description
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
  }
}
`;
export const createListenActivity = `mutation CreateListenActivity($input: CreateListenActivityInput!) {
  createListenActivity(input: $input) {
    id
    secondsListened
    date
    day
    month
    year
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    createdAt
    fullDate
  }
}
`;
export const updateListenActivity = `mutation UpdateListenActivity($input: UpdateListenActivityInput!) {
  updateListenActivity(input: $input) {
    id
    secondsListened
    date
    day
    month
    year
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    createdAt
    fullDate
  }
}
`;
export const deleteListenActivity = `mutation DeleteListenActivity($input: DeleteListenActivityInput!) {
  deleteListenActivity(input: $input) {
    id
    secondsListened
    date
    day
    month
    year
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    createdAt
    fullDate
  }
}
`;
export const createInsight = `mutation CreateInsight($input: CreateInsightInput!) {
  createInsight(input: $input) {
    id
    createdBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    caption
    notes
    scriptures
    meditations
    isPublic
    createdAt
    saveCount
    saves {
      items {
        id
        isSaved
      }
      nextToken
    }
  }
}
`;
export const updateInsight = `mutation UpdateInsight($input: UpdateInsightInput!) {
  updateInsight(input: $input) {
    id
    createdBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    caption
    notes
    scriptures
    meditations
    isPublic
    createdAt
    saveCount
    saves {
      items {
        id
        isSaved
      }
      nextToken
    }
  }
}
`;
export const deleteInsight = `mutation DeleteInsight($input: DeleteInsightInput!) {
  deleteInsight(input: $input) {
    id
    createdBy {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
    sermon {
      id
      title
      description
      subject {
        id
        subject
        userIsInterested
      }
      preacher {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      coPreachers {
        id
        name
        bio
        image
        externalLink
        profilePicture
        subscriptionCount
        sermonCount
        userIsSubscribed
        keywords
      }
      uploadedBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      image
      sermonDate
      canDownload
      canListen
      isPremium
      isPublished
      isPrivate
      isExpress
      canSave
      downloadUrl
      isFeatured
      isMultipart
      isHostedOnSoundCloud
      isHostedByThirdParty
      soundcloudUrl
      length
      listenCount
      preacherName
      preacherImage
      price
      fileSize
      fileType
      url
      createdAt
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      collectionSermons {
        nextToken
      }
      tagSermons {
        nextToken
      }
      purchases {
        nextToken
      }
      insights {
        nextToken
      }
      listenStatus {
        id
        isFinished
        minutesListened
        totalLength
        currentStatus
        createdAt
      }
      isUserFavourite
      userHasLiked
      userHasListened
      userHasCompleted
      userHasSaved
      userHasPurchased
      keywords
    }
    caption
    notes
    scriptures
    meditations
    isPublic
    createdAt
    saveCount
    saves {
      items {
        id
        isSaved
      }
      nextToken
    }
  }
}
`;
export const createInsightSave = `mutation CreateInsightSave($input: CreateInsightSaveInput!) {
  createInsightSave(input: $input) {
    id
    isSaved
    insight {
      id
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      caption
      notes
      scriptures
      meditations
      isPublic
      createdAt
      saveCount
      saves {
        nextToken
      }
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
  }
}
`;
export const updateInsightSave = `mutation UpdateInsightSave($input: UpdateInsightSaveInput!) {
  updateInsightSave(input: $input) {
    id
    isSaved
    insight {
      id
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      caption
      notes
      scriptures
      meditations
      isPublic
      createdAt
      saveCount
      saves {
        nextToken
      }
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
  }
}
`;
export const deleteInsightSave = `mutation DeleteInsightSave($input: DeleteInsightSaveInput!) {
  deleteInsightSave(input: $input) {
    id
    isSaved
    insight {
      id
      createdBy {
        id
        name
        username
        type
        isMinistry
        isActivated
        canUpload
        createdAt
        bio
        image
        email
        credits
        secondsListened
        sermonPurchaseCount
        sermonListenCount
        SermonCompletionCount
        sermonUploadCount
        collectionCreatedCount
        bagdeCount
        goalCompletionCount
        listenGoalPerDay
        listenGoalPerWeek
        lastListenActivityDate
        lastUpdatedSecondsListened
        isInterestedInExpress
      }
      sermon {
        id
        title
        description
        image
        sermonDate
        canDownload
        canListen
        isPremium
        isPublished
        isPrivate
        isExpress
        canSave
        downloadUrl
        isFeatured
        isMultipart
        isHostedOnSoundCloud
        isHostedByThirdParty
        soundcloudUrl
        length
        listenCount
        preacherName
        preacherImage
        price
        fileSize
        fileType
        url
        createdAt
        isUserFavourite
        userHasLiked
        userHasListened
        userHasCompleted
        userHasSaved
        userHasPurchased
        keywords
      }
      caption
      notes
      scriptures
      meditations
      isPublic
      createdAt
      saveCount
      saves {
        nextToken
      }
    }
    user {
      id
      name
      username
      type
      isMinistry
      isActivated
      canUpload
      createdAt
      bio
      image
      email
      credits
      sermons {
        nextToken
      }
      collections {
        nextToken
      }
      interests {
        nextToken
      }
      listens {
        nextToken
      }
      completions {
        nextToken
      }
      saves {
        nextToken
      }
      favourites {
        nextToken
      }
      subscriptions {
        nextToken
      }
      transactions {
        nextToken
      }
      purchases {
        nextToken
      }
      withdrawals {
        nextToken
      }
      badges {
        nextToken
      }
      insights {
        nextToken
      }
      insightSaves {
        nextToken
      }
      ministries {
        nextToken
      }
      secondsListened
      sermonPurchaseCount
      sermonListenCount
      SermonCompletionCount
      sermonUploadCount
      collectionCreatedCount
      bagdeCount
      goalCompletionCount
      listenGoalPerDay
      listenGoalPerWeek
      listenActivity {
        nextToken
      }
      lastListenActivityDate
      lastUpdatedSecondsListened
      isInterestedInExpress
    }
  }
}
`;
