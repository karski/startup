// eslint-disable
// this is an auto generated file. This will be overwritten

export const createArea = `mutation CreateArea($input: CreateAreaInput!) {
  createArea(input: $input) {
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
export const updateArea = `mutation UpdateArea($input: UpdateAreaInput!) {
  updateArea(input: $input) {
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
export const deleteArea = `mutation DeleteArea($input: DeleteAreaInput!) {
  deleteArea(input: $input) {
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
export const createLocation = `mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
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
export const updateLocation = `mutation UpdateLocation($input: UpdateLocationInput!) {
  updateLocation(input: $input) {
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
export const deleteLocation = `mutation DeleteLocation($input: DeleteLocationInput!) {
  deleteLocation(input: $input) {
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
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
export const createVote = `mutation CreateVote($input: CreateVoteInput!) {
  createVote(input: $input) {
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
export const updateVote = `mutation UpdateVote($input: UpdateVoteInput!) {
  updateVote(input: $input) {
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
export const deleteVote = `mutation DeleteVote($input: DeleteVoteInput!) {
  deleteVote(input: $input) {
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
