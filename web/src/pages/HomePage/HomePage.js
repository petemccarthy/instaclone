import { routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect, useContext } from 'react'
import { AuthContext } from 'src/context/AuthContext'
import { Box } from '@chakra-ui/react'

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
      <Box h={'4xl'}>
        <p>Home page content here</p>
      </Box>
    </>
  )
}

export default HomePage
