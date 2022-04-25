import ProfileSettings from './ProfileSettings'
const profileSettings = {
  email: 'petefromsf@gmail.com',
  fullName: 'Pete McCarthy',
  photoUrl: 'https://bit.ly/sage-adebayo',
}

export const generated = () => {
  return <ProfileSettings user={profileSettings} />
}

export default { title: 'Components/ProfileSettings' }
