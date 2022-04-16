import { routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect, useContext } from 'react'
import Logo from 'src/components/Logo/Logo'
import NavBar from 'src/components/NavBar/NavBar'
import { AuthContext } from 'src/context/AuthContext'

const HomePage = () => {
  const { isAuthenticated } = useContext(AuthContext)
  useEffect(() => {
    if (!isAuthenticated) {
      navigate(routes.landing())
    }
  }, [isAuthenticated])
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <NavBar logo={Logo} />
    </>
  )
}

export default HomePage
