import { MetaTags } from '@redwoodjs/web'

import { useContext } from 'react'
import { AuthContext } from 'src/context/AuthContext'
import ProfileSettingsCell from 'src/components/ProfileSettingsCell/ProfileSettingsCell'

export default function ProfileSettingsPage() {
  const { currentUser } = useContext(AuthContext)

  return (
    <>
      <MetaTags title="Profile settings" description="Profile settings page" />
      <ProfileSettingsCell id={currentUser.id} />
    </>
  )
}
