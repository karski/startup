// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateArea = `subscription OnCreateArea {
  onCreateArea {
    id
    name
    contact
    description
    bounds {
      ne_lat
      ne_lng
      sw_lat
      sw_lng
    }
    locations {
      items {
        id
        name
        description
        date
        address
        flagged
        response
        resolved
        locationPicture
      }
      nextToken
    }
    users {
      items {
        id
        name
        uid
        profilePicture
      }
      nextToken
    }
    userCanCreateLocations
    geoJson
  }
}
`;
export const onUpdateArea = `subscription OnUpdateArea {
  onUpdateArea {
    id
    name
    contact
    description
    bounds {
      ne_lat
      ne_lng
      sw_lat
      sw_lng
    }
    locations {
      items {
        id
        name
        description
        date
        address
        flagged
        response
        resolved
        locationPicture
      }
      nextToken
    }
    users {
      items {
        id
        name
        uid
        profilePicture
      }
      nextToken
    }
    userCanCreateLocations
    geoJson
  }
}
`;
export const onDeleteArea = `subscription OnDeleteArea {
  onDeleteArea {
    id
    name
    contact
    description
    bounds {
      ne_lat
      ne_lng
      sw_lat
      sw_lng
    }
    locations {
      items {
        id
        name
        description
        date
        address
        flagged
        response
        resolved
        locationPicture
      }
      nextToken
    }
    users {
      items {
        id
        name
        uid
        profilePicture
      }
      nextToken
    }
    userCanCreateLocations
    geoJson
  }
}
`;
export const onCreateLocation = `subscription OnCreateLocation {
  onCreateLocation {
    id
    area {
      id
      name
      contact
      description
      bounds {
        ne_lat
        ne_lng
        sw_lat
        sw_lng
      }
      locations {
        nextToken
      }
      users {
        nextToken
      }
      userCanCreateLocations
      geoJson
    }
    name
    description
    date
    user {
      id
      area {
        id
        name
        contact
        description
        userCanCreateLocations
        geoJson
      }
      userType
      name
      uid
      locations {
        nextToken
      }
      comments {
        nextToken
      }
      votes {
        nextToken
      }
      profilePicture
    }
    position {
      lat
      lng
    }
    address
    type
    comments {
      items {
        id
        content
        time
        commentPicture
      }
      nextToken
    }
    votes {
      items {
        id
      }
      nextToken
    }
    flagged
    response
    resolved
    locationPicture
  }
}
`;
export const onUpdateLocation = `subscription OnUpdateLocation {
  onUpdateLocation {
    id
    area {
      id
      name
      contact
      description
      bounds {
        ne_lat
        ne_lng
        sw_lat
        sw_lng
      }
      locations {
        nextToken
      }
      users {
        nextToken
      }
      userCanCreateLocations
      geoJson
    }
    name
    description
    date
    user {
      id
      area {
        id
        name
        contact
        description
        userCanCreateLocations
        geoJson
      }
      userType
      name
      uid
      locations {
        nextToken
      }
      comments {
        nextToken
      }
      votes {
        nextToken
      }
      profilePicture
    }
    position {
      lat
      lng
    }
    address
    type
    comments {
      items {
        id
        content
        time
        commentPicture
      }
      nextToken
    }
    votes {
      items {
        id
      }
      nextToken
    }
    flagged
    response
    resolved
    locationPicture
  }
}
`;
export const onDeleteLocation = `subscription OnDeleteLocation {
  onDeleteLocation {
    id
    area {
      id
      name
      contact
      description
      bounds {
        ne_lat
        ne_lng
        sw_lat
        sw_lng
      }
      locations {
        nextToken
      }
      users {
        nextToken
      }
      userCanCreateLocations
      geoJson
    }
    name
    description
    date
    user {
      id
      area {
        id
        name
        contact
        description
        userCanCreateLocations
        geoJson
      }
      userType
      name
      uid
      locations {
        nextToken
      }
      comments {
        nextToken
      }
      votes {
        nextToken
      }
      profilePicture
    }
    position {
      lat
      lng
    }
    address
    type
    comments {
      items {
        id
        content
        time
        commentPicture
      }
      nextToken
    }
    votes {
      items {
        id
      }
      nextToken
    }
    flagged
    response
    resolved
    locationPicture
  }
}
`;
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    area {
      id
      name
      contact
      description
      bounds {
        ne_lat
        ne_lng
        sw_lat
        sw_lng
      }
      locations {
        nextToken
      }
      users {
        nextToken
      }
      userCanCreateLocations
      geoJson
    }
    userType
    name
    uid
    locations {
      items {
        id
        name
        description
        date
        address
        flagged
        response
        resolved
        locationPicture
      }
      nextToken
    }
    comments {
      items {
        id
        content
        time
        commentPicture
      }
      nextToken
    }
    votes {
      items {
        id
      }
      nextToken
    }
    profilePicture
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    area {
      id
      name
      contact
      description
      bounds {
        ne_lat
        ne_lng
        sw_lat
        sw_lng
      }
      locations {
        nextToken
      }
      users {
        nextToken
      }
      userCanCreateLocations
      geoJson
    }
    userType
    name
    uid
    locations {
      items {
        id
        name
        description
        date
        address
        flagged
        response
        resolved
        locationPicture
      }
      nextToken
    }
    comments {
      items {
        id
        content
        time
        commentPicture
      }
      nextToken
    }
    votes {
      items {
        id
      }
      nextToken
    }
    profilePicture
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    area {
      id
      name
      contact
      description
      bounds {
        ne_lat
        ne_lng
        sw_lat
        sw_lng
      }
      locations {
        nextToken
      }
      users {
        nextToken
      }
      userCanCreateLocations
      geoJson
    }
    userType
    name
    uid
    locations {
      items {
        id
        name
        description
        date
        address
        flagged
        response
        resolved
        locationPicture
      }
      nextToken
    }
    comments {
      items {
        id
        content
        time
        commentPicture
      }
      nextToken
    }
    votes {
      items {
        id
      }
      nextToken
    }
    profilePicture
  }
}
`;
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
    id
    content
    time
    location {
      id
      area {
        id
        name
        contact
        description
        userCanCreateLocations
        geoJson
      }
      name
      description
      date
      user {
        id
        name
        uid
        profilePicture
      }
      position {
        lat
        lng
      }
      address
      type
      comments {
        nextToken
      }
      votes {
        nextToken
      }
      flagged
      response
      resolved
      locationPicture
    }
    user {
      id
      area {
        id
        name
        contact
        description
        userCanCreateLocations
        geoJson
      }
      userType
      name
      uid
      locations {
        nextToken
      }
      comments {
        nextToken
      }
      votes {
        nextToken
      }
      profilePicture
    }
    commentPicture
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
    id
    content
    time
    location {
      id
      area {
        id
        name
        contact
        description
        userCanCreateLocations
        geoJson
      }
      name
      description
      date
      user {
        id
        name
        uid
        profilePicture
      }
      position {
        lat
        lng
      }
      address
      type
      comments {
        nextToken
      }
      votes {
        nextToken
      }
      flagged
      response
      resolved
      locationPicture
    }
    user {
      id
      area {
        id
        name
        contact
        description
        userCanCreateLocations
        geoJson
      }
      userType
      name
      uid
      locations {
        nextToken
      }
      comments {
        nextToken
      }
      votes {
        nextToken
      }
      profilePicture
    }
    commentPicture
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
    id
    content
    time
    location {
      id
      area {
        id
        name
        contact
        description
        userCanCreateLocations
        geoJson
      }
      name
      description
      date
      user {
        id
        name
        uid
        profilePicture
      }
      position {
        lat
        lng
      }
      address
      type
      comments {
        nextToken
      }
      votes {
        nextToken
      }
      flagged
      response
      resolved
      locationPicture
    }
    user {
      id
      area {
        id
        name
        contact
        description
        userCanCreateLocations
        geoJson
      }
      userType
      name
      uid
      locations {
        nextToken
      }
      comments {
        nextToken
      }
      votes {
        nextToken
      }
      profilePicture
    }
    commentPicture
  }
}
`;
export const onCreateVote = `subscription OnCreateVote {
  onCreateVote {
    id
    voteType
    user {
      id
      area {
        id
        name
        contact
        description
        userCanCreateLocations
        geoJson
      }
      userType
      name
      uid
      locations {
        nextToken
      }
      comments {
        nextToken
      }
      votes {
        nextToken
      }
      profilePicture
    }
    location {
      id
      area {
        id
        name
        contact
        description
        userCanCreateLocations
        geoJson
      }
      name
      description
      date
      user {
        id
        name
        uid
        profilePicture
      }
      position {
        lat
        lng
      }
      address
      type
      comments {
        nextToken
      }
      votes {
        nextToken
      }
      flagged
      response
      resolved
      locationPicture
    }
  }
}
`;
export const onUpdateVote = `subscription OnUpdateVote {
  onUpdateVote {
    id
    voteType
    user {
      id
      area {
        id
        name
        contact
        description
        userCanCreateLocations
        geoJson
      }
      userType
      name
      uid
      locations {
        nextToken
      }
      comments {
        nextToken
      }
      votes {
        nextToken
      }
      profilePicture
    }
    location {
      id
      area {
        id
        name
        contact
        description
        userCanCreateLocations
        geoJson
      }
      name
      description
      date
      user {
        id
        name
        uid
        profilePicture
      }
      position {
        lat
        lng
      }
      address
      type
      comments {
        nextToken
      }
      votes {
        nextToken
      }
      flagged
      response
      resolved
      locationPicture
    }
  }
}
`;
export const onDeleteVote = `subscription OnDeleteVote {
  onDeleteVote {
    id
    voteType
    user {
      id
      area {
        id
        name
        contact
        description
        userCanCreateLocations
        geoJson
      }
      userType
      name
      uid
      locations {
        nextToken
      }
      comments {
        nextToken
      }
      votes {
        nextToken
      }
      profilePicture
    }
    location {
      id
      area {
        id
        name
        contact
        description
        userCanCreateLocations
        geoJson
      }
      name
      description
      date
      user {
        id
        name
        uid
        profilePicture
      }
      position {
        lat
        lng
      }
      address
      type
      comments {
        nextToken
      }
      votes {
        nextToken
      }
      flagged
      response
      resolved
      locationPicture
    }
  }
}
`;
