import { routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect, useContext } from 'react'
import { AuthContext } from 'src/context/AuthContext'

const HomePage = () => {
  const { isAuthenticated, logOut } = useContext(AuthContext)
  useEffect(() => {
    if (!isAuthenticated) {
      navigate(routes.landing())
    }
  }, [isAuthenticated])
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <button
        type="button"
        onClick={logOut}
        className="bg-blue-600 text-blue-100 py-2 px-4 text-center rounded"
      >
        Logout
      </button>
    </>
  )
}

export default HomePage
