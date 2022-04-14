import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import phone from './phone.png'

const LandingPage = () => {
  return (
    <>
      <MetaTags title="Landing" description="Landing page" />
      <main className="min-h-screen bg-neutral-50">
        <div className="container mx-auto px-6 py-40 min-w-fit flex justify-center align-center">
          <div className="w-96 h-128 py-2 -ml-6 bg-slate-100 text-center">
            <img src={phone} alt="phone" />
          </div>
          <div className="w-96 h-128 bg-slate-100 text-center">
            Right Cointainer
          </div>
        </div>
      </main>
    </>
  )
}

export default LandingPage
