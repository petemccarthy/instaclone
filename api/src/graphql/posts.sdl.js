export const schema = gql`
  type Post {
    id: Int!
    caption: String
    imageUrl: String
    user: User!
    userId: Int!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    caption: String
    userId: Int!
    imageUrl: String
  }

  input UpdatePostInput {
    caption: String
    userId: Int
    imageUrl: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
