// eslint-disable
// this is an auto generated file. This will be overwritten

export const getManySermons = `query GetManySermons($ids: [ID!]) {
  getManySermons(ids: $ids) {
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
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    username
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      username
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
    nextToken
  }
}
`;
export const getSermon = `query GetSermon($id: ID!) {
  getSermon(id: $id) {
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
export const listSermons = `query ListSermons(
  $filter: ModelSermonFilterInput
  $limit: Int
  $nextToken: String
) {
  listSermons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPreacher = `query GetPreacher($id: ID!) {
  getPreacher(id: $id) {
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
export const listPreachers = `query ListPreachers(
  $filter: ModelPreacherFilterInput
  $limit: Int
  $nextToken: String
) {
  listPreachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getMinistry = `query GetMinistry($id: ID!) {
  getMinistry(id: $id) {
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
export const listMinistrys = `query ListMinistrys(
  $filter: ModelMinistryFilterInput
  $limit: Int
  $nextToken: String
) {
  listMinistrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getMinistryPreacher = `query GetMinistryPreacher($id: ID!) {
  getMinistryPreacher(id: $id) {
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
export const listMinistryPreachers = `query ListMinistryPreachers(
  $filter: ModelMinistryPreacherFilterInput
  $limit: Int
  $nextToken: String
) {
  listMinistryPreachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getSubject = `query GetSubject($id: ID!) {
  getSubject(id: $id) {
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
export const listSubjects = `query ListSubjects(
  $filter: ModelSubjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTag = `query GetTag($id: ID!) {
  getTag(id: $id) {
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
export const listTags = `query ListTags($filter: ModelTagFilterInput, $limit: Int, $nextToken: String) {
  listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      tagSermons {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTagSermon = `query GetTagSermon($id: ID!) {
  getTagSermon(id: $id) {
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
export const listTagSermons = `query ListTagSermons(
  $filter: ModelTagSermonFilterInput
  $limit: Int
  $nextToken: String
) {
  listTagSermons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getCollection = `query GetCollection($id: ID!) {
  getCollection(id: $id) {
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
export const listCollections = `query ListCollections(
  $filter: ModelCollectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getCollectionSermon = `query GetCollectionSermon($id: ID!) {
  getCollectionSermon(id: $id) {
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
export const listCollectionSermons = `query ListCollectionSermons(
  $filter: ModelCollectionSermonFilterInput
  $limit: Int
  $nextToken: String
) {
  listCollectionSermons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPurchase = `query GetPurchase($id: ID!) {
  getPurchase(id: $id) {
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
export const listPurchases = `query ListPurchases(
  $filter: ModelPurchaseFilterInput
  $limit: Int
  $nextToken: String
) {
  listPurchases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTransaction = `query GetTransaction($id: ID!) {
  getTransaction(id: $id) {
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
export const listTransactions = `query ListTransactions(
  $filter: ModelTransactionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getWithdrawal = `query GetWithdrawal($id: ID!) {
  getWithdrawal(id: $id) {
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
export const listWithdrawals = `query ListWithdrawals(
  $filter: ModelWithdrawalFilterInput
  $limit: Int
  $nextToken: String
) {
  listWithdrawals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getInterest = `query GetInterest($id: ID!) {
  getInterest(id: $id) {
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
export const listInterests = `query ListInterests(
  $filter: ModelInterestFilterInput
  $limit: Int
  $nextToken: String
) {
  listInterests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getSubscription = `query GetSubscription($id: ID!) {
  getSubscription(id: $id) {
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
export const listSubscriptions = `query ListSubscriptions(
  $filter: ModelSubscriptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubscriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getListen = `query GetListen($id: ID!) {
  getListen(id: $id) {
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
export const listListens = `query ListListens(
  $filter: ModelListenFilterInput
  $limit: Int
  $nextToken: String
) {
  listListens(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getCompletion = `query GetCompletion($id: ID!) {
  getCompletion(id: $id) {
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
export const listCompletions = `query ListCompletions(
  $filter: ModelCompletionFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompletions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getSave = `query GetSave($id: ID!) {
  getSave(id: $id) {
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
export const listSaves = `query ListSaves(
  $filter: ModelSaveFilterInput
  $limit: Int
  $nextToken: String
) {
  listSaves(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getFavourite = `query GetFavourite($id: ID!) {
  getFavourite(id: $id) {
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
export const listFavourites = `query ListFavourites(
  $filter: ModelFavouriteFilterInput
  $limit: Int
  $nextToken: String
) {
  listFavourites(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getBadge = `query GetBadge($id: ID!) {
  getBadge(id: $id) {
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
export const listBadges = `query ListBadges(
  $filter: ModelBadgeFilterInput
  $limit: Int
  $nextToken: String
) {
  listBadges(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getListenActivity = `query GetListenActivity($id: ID!) {
  getListenActivity(id: $id) {
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
export const listListenActivitys = `query ListListenActivitys(
  $filter: ModellistenActivityFilterInput
  $limit: Int
  $nextToken: String
) {
  listListenActivitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getInsight = `query GetInsight($id: ID!) {
  getInsight(id: $id) {
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
export const listInsights = `query ListInsights(
  $filter: ModelInsightFilterInput
  $limit: Int
  $nextToken: String
) {
  listInsights(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getInsightSave = `query GetInsightSave($id: ID!) {
  getInsightSave(id: $id) {
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
export const listInsightSaves = `query ListInsightSaves(
  $filter: ModelInsightSaveFilterInput
  $limit: Int
  $nextToken: String
) {
  listInsightSaves(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const searchSermons = `query SearchSermons(
  $filter: SearchableSermonFilterInput
  $sort: SearchableSermonSortInput
  $limit: Int
  $nextToken: Int
) {
  searchSermons(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const searchPreachers = `query SearchPreachers(
  $filter: SearchablePreacherFilterInput
  $sort: SearchablePreacherSortInput
  $limit: Int
  $nextToken: Int
) {
  searchPreachers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const searchSubjects = `query SearchSubjects(
  $filter: SearchableSubjectFilterInput
  $sort: SearchableSubjectSortInput
  $limit: Int
  $nextToken: Int
) {
  searchSubjects(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const searchCollections = `query SearchCollections(
  $filter: SearchableCollectionFilterInput
  $sort: SearchableCollectionSortInput
  $limit: Int
  $nextToken: Int
) {
  searchCollections(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const searchCollectionSermons = `query SearchCollectionSermons(
  $filter: SearchableCollectionSermonFilterInput
  $sort: SearchableCollectionSermonSortInput
  $limit: Int
  $nextToken: Int
) {
  searchCollectionSermons(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const searchInsights = `query SearchInsights(
  $filter: SearchableInsightFilterInput
  $sort: SearchableInsightSortInput
  $limit: Int
  $nextToken: Int
) {
  searchInsights(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
