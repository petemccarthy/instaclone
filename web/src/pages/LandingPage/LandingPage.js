import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import phone from './phone.png'
import Login from 'src/components/Login/Login'

const LandingPage = () => {
  return (
    <>
      <MetaTags title="Landing" description="Landing page" />
      <main className=" bg-neutral-50">
        <div className="container mx-auto px-6 py-40 min-w-fit flex justify-center align-center">
          <div className="w-96 h-128 py-2 -ml-6 text-center">
            <img src={phone} alt="phone" />
          </div>
          <div className="w-[350px] h-128 text-center flex justify-center ml-6">
            <Login />
          </div>
        </div>
      </main>
    </>
  )
}

export default LandingPage
