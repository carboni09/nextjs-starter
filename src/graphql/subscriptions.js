// eslint-disable
// this is an auto generated file. This will be overwritten

export const id = `subscription Id {
  id
}
`;
export const preacher = `subscription Preacher {
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
export const user = `subscription User {
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
export const onCreateUser = `subscription OnCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
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
export const onCreateSermon = `subscription OnCreateSermon {
  onCreateSermon {
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
export const onUpdateSermon = `subscription OnUpdateSermon {
  onUpdateSermon {
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
export const onDeleteSermon = `subscription OnDeleteSermon {
  onDeleteSermon {
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
export const onCreatePreacher = `subscription OnCreatePreacher {
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
export const onUpdatePreacher = `subscription OnUpdatePreacher {
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
export const onDeletePreacher = `subscription OnDeletePreacher {
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
export const onCreateMinistry = `subscription OnCreateMinistry {
  onCreateMinistry {
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
export const onUpdateMinistry = `subscription OnUpdateMinistry {
  onUpdateMinistry {
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
export const onDeleteMinistry = `subscription OnDeleteMinistry {
  onDeleteMinistry {
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
export const onCreateMinistryPreacher = `subscription OnCreateMinistryPreacher {
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
export const onUpdateMinistryPreacher = `subscription OnUpdateMinistryPreacher {
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
export const onDeleteMinistryPreacher = `subscription OnDeleteMinistryPreacher {
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
export const onCreateSubject = `subscription OnCreateSubject {
  onCreateSubject {
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
export const onUpdateSubject = `subscription OnUpdateSubject {
  onUpdateSubject {
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
export const onDeleteSubject = `subscription OnDeleteSubject {
  onDeleteSubject {
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
export const onCreateTag = `subscription OnCreateTag {
  onCreateTag {
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
export const onUpdateTag = `subscription OnUpdateTag {
  onUpdateTag {
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
export const onDeleteTag = `subscription OnDeleteTag {
  onDeleteTag {
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
export const onCreateTagSermon = `subscription OnCreateTagSermon {
  onCreateTagSermon {
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
export const onUpdateTagSermon = `subscription OnUpdateTagSermon {
  onUpdateTagSermon {
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
export const onDeleteTagSermon = `subscription OnDeleteTagSermon {
  onDeleteTagSermon {
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
export const onCreateCollection = `subscription OnCreateCollection {
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
export const onUpdateCollection = `subscription OnUpdateCollection {
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
export const onDeleteCollection = `subscription OnDeleteCollection {
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
export const onCreateCollectionSermon = `subscription OnCreateCollectionSermon {
  onCreateCollectionSermon {
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
export const onUpdateCollectionSermon = `subscription OnUpdateCollectionSermon {
  onUpdateCollectionSermon {
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
export const onDeleteCollectionSermon = `subscription OnDeleteCollectionSermon {
  onDeleteCollectionSermon {
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
export const onCreatePurchase = `subscription OnCreatePurchase {
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
export const onUpdatePurchase = `subscription OnUpdatePurchase {
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
export const onDeletePurchase = `subscription OnDeletePurchase {
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
export const onCreateTransaction = `subscription OnCreateTransaction {
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
export const onUpdateTransaction = `subscription OnUpdateTransaction {
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
export const onDeleteTransaction = `subscription OnDeleteTransaction {
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
export const onCreateWithdrawal = `subscription OnCreateWithdrawal {
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
export const onUpdateWithdrawal = `subscription OnUpdateWithdrawal {
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
export const onDeleteWithdrawal = `subscription OnDeleteWithdrawal {
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
export const onCreateInterest = `subscription OnCreateInterest {
  onCreateInterest {
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
export const onUpdateInterest = `subscription OnUpdateInterest {
  onUpdateInterest {
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
export const onDeleteInterest = `subscription OnDeleteInterest {
  onDeleteInterest {
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
export const onCreateSubscription = `subscription OnCreateSubscription {
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
export const onUpdateSubscription = `subscription OnUpdateSubscription {
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
export const onDeleteSubscription = `subscription OnDeleteSubscription {
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
export const onCreateListen = `subscription OnCreateListen {
  onCreateListen {
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
export const onUpdateListen = `subscription OnUpdateListen {
  onUpdateListen {
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
export const onDeleteListen = `subscription OnDeleteListen {
  onDeleteListen {
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
export const onCreateCompletion = `subscription OnCreateCompletion {
  onCreateCompletion {
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
export const onUpdateCompletion = `subscription OnUpdateCompletion {
  onUpdateCompletion {
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
export const onDeleteCompletion = `subscription OnDeleteCompletion {
  onDeleteCompletion {
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
export const onCreateSave = `subscription OnCreateSave {
  onCreateSave {
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
export const onUpdateSave = `subscription OnUpdateSave {
  onUpdateSave {
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
export const onDeleteSave = `subscription OnDeleteSave {
  onDeleteSave {
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
export const onCreateFavourite = `subscription OnCreateFavourite {
  onCreateFavourite {
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
export const onUpdateFavourite = `subscription OnUpdateFavourite {
  onUpdateFavourite {
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
export const onDeleteFavourite = `subscription OnDeleteFavourite {
  onDeleteFavourite {
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
export const onCreateBadge = `subscription OnCreateBadge {
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
export const onUpdateBadge = `subscription OnUpdateBadge {
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
export const onDeleteBadge = `subscription OnDeleteBadge {
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
export const onCreateListenActivity = `subscription OnCreateListenActivity {
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
export const onUpdateListenActivity = `subscription OnUpdateListenActivity {
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
export const onDeleteListenActivity = `subscription OnDeleteListenActivity {
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
export const onCreateInsight = `subscription OnCreateInsight {
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
export const onUpdateInsight = `subscription OnUpdateInsight {
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
export const onDeleteInsight = `subscription OnDeleteInsight {
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
export const onCreateInsightSave = `subscription OnCreateInsightSave {
  onCreateInsightSave {
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
export const onUpdateInsightSave = `subscription OnUpdateInsightSave {
  onUpdateInsightSave {
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
export const onDeleteInsightSave = `subscription OnDeleteInsightSave {
  onDeleteInsightSave {
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
