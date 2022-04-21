import ProfileSettings from '../ProfileSettings/ProfileSettings'

export const QUERY = gql`
  query ProfileSettingsQuery {
    profileSettings {
      id
      email
      fullName
      photoUrl
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ profileSettings }) => {
  return <ProfileSettings profileSettings={profileSettings} />
}
