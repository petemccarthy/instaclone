import ProfileSettings from '../ProfileSettings/ProfileSettings'

export const QUERY = gql`
  query FindUserById($id: Int!) {
    user: user(id: $id) {
      fullName
      email
      username
      photoUrl
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ user }) => {
  return <ProfileSettings user={user} />
}
