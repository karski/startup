// eslint-disable
// this is an auto generated file. This will be overwritten

export const getArea = `query GetArea($id: ID!) {
  getArea(id: $id) {
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
export const listAreas = `query ListAreas(
  $filter: ModelAreaFilterInput
  $limit: Int
  $nextToken: String
) {
  listAreas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getLocation = `query GetLocation($id: ID!) {
  getLocation(id: $id) {
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
export const listLocations = `query ListLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      time
      location {
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
      user {
        id
        name
        uid
        profilePicture
      }
      commentPicture
    }
    nextToken
  }
}
`;
export const getVote = `query GetVote($id: ID!) {
  getVote(id: $id) {
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
export const listVotes = `query ListVotes(
  $filter: ModelVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      voteType
      user {
        id
        name
        uid
        profilePicture
      }
      location {
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
    }
    nextToken
  }
}
`;
export const searchAreas = `query SearchAreas(
  $filter: SearchableAreaFilterInput
  $sort: SearchableAreaSortInput
  $limit: Int
  $nextToken: Int
) {
  searchAreas(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const searchLocations = `query SearchLocations(
  $filter: SearchableLocationFilterInput
  $sort: SearchableLocationSortInput
  $limit: Int
  $nextToken: Int
) {
  searchLocations(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const searchUsers = `query SearchUsers(
  $filter: SearchableUserFilterInput
  $sort: SearchableUserSortInput
  $limit: Int
  $nextToken: Int
) {
  searchUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
