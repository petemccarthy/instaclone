export const schema = gql`
  type Image {
    id: Int!
    url: String!
    post: Post!
    postId: Int!
  }

  type Query {
    images: [Image!]! @requireAuth
    image(id: Int!): Image @requireAuth
  }

  input CreateImageInput {
    url: String!
    postId: Int!
  }

  input UpdateImageInput {
    url: String
    postId: Int
  }

  type Mutation {
    createImage(input: CreateImageInput!): Image! @requireAuth
    updateImage(id: Int!, input: UpdateImageInput!): Image! @requireAuth
    deleteImage(id: Int!): Image! @requireAuth
  }
`
