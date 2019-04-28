export const getUserLocations = `query getUserLocations(
$id: ID!
) {
  getUser(id: $id
  ) {
      id
      locations(limit: 9999) {
          items {
            id
            name
            description
            date
            type
            flagged
            response
            resolved
            locationPicture
            address
            position {
              lat
              lng
            }
          }
        nextToken
      }
    }
}
`;

export const getLocationWithComments = `query getLocationWithComments(
  $filter: ModelLocationFilterInput
) {
  listLocations(
    filter: $filter
  ) {
    items {
      id
      name
      description
      date
      type
      response
      address
      locationPicture
      position {
        lat
        lng
      }
      votes {
        items {
          id
          voteType
          user {
            name
          }
        }
      }
      comments {
        items {
          id
          content
          time
          user {
            name
          }
          commentPicture
        }
      }
    }
  }
}`;

export const getAreaLocations = `query  getAreaLocations($id: ID!) {
  getArea(id: $id) {
     name
  locations(limit: 9999) {
    items {
      id
      name
      description
      date
      user {
        id
        name
      }
      position {
        lat
        lng
      }
      address
      type
      flagged
      response
      resolved
      locationPicture 
    }
  }
  }
}`;
