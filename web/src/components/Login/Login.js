import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { Link, routes, navigate } from '@redwoodjs/router'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'

import { useRef } from 'react'
import { useEffect, useState } from 'react'

import logo from './logo.png'
import facebook from './facebook.png'

const Login = () => {
  const usernameRef = useRef()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const { isAuthenticated, logIn } = useAuth()
  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  // const [isValidCred, setIsValidCred] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  // function checkForValid() {
  //   if (formData.username.length > 0 && formData.password.length > 4) {
  //     setIsValidCred(true)
  //   } else {
  //     setIsValidCred(false)
  //   }
  // }

  const handleSubmit = async () => {
    console.log('submit')
    const response = await logIn({ ...formData })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }
  return (
    <div className="bg-neutral-50">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <div className="w-[350px] px-[42px] pt-[47px] flex flex-col items-center bg-white border border-solid border-zinc-300 mb-2">
        <div className="w-[175px]  mb-10">
          <img src={logo} alt="logo" />
        </div>
        <Form className="rw-form-wrapper w-full" onSubmit={handleSubmit}>
          <TextField
            name="username"
            className="rw-input w-full p-2 mb-2 text-sm leading-3 align-baseline rounded-sm border border-solid bg-zinc-50 appearance-none box-border border-zinc-300 text-neutral-800 text-xxs"
            placeholder="Username or email"
            ref={usernameRef}
            value={formData.username}
            onChange={handleChange}
          />

          <PasswordField
            name="password"
            placeholder="Password"
            className="rw-input w-full p-2 mb-4 text-sm leading-3 align-baseline rounded-sm border border-solid bg-zinc-50 appearance-none box-border border-zinc-300 text-neutral-800 text-xxsm"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <Submit
            className={`w-full p-2 text-center bg-blue-500 rounded leading-3 mb-6 cursor-pointer text-blue-100 font-extrabold`}
          >
            Log In
          </Submit>
          <div className="relative mt-2 mb-4 flex flex-row items-stretch align-baseline leading-4 text-neutral-800 w-full">
            <div className="flex h-px flex-shrink flex-grow flex-col items-stretch border-0 border-solid border-black bg-zinc-300 p-0 align-baseline"></div>
            <div className="relative my-0 mx-4 box-border flex flex-shrink-0 flex-grow-0 flex-col items-stretch border-0 border-solid border-black p-0 align-baseline text-xs font-semibold uppercase text-neutral-400 -mt-2">
              or
            </div>
            <div className="relative m-0 box-border flex h-px flex-shrink flex-grow flex-col items-stretch border-0 border-solid border-black bg-zinc-300 p-0 align-baseline"></div>
          </div>
          <div className="flex items-center text-center w-full p-1 justify-center text-blue-900 font-semibold leading-3 mb-4 cursor-pointer">
            <img src={facebook} alt="facebook" className="w-4 mr-4" />
            <p>Login with Facebook</p>
          </div>

          <div className="rw-forgot-link text-center mb-6">
            <Link
              to={routes.forgotPassword()}
              className="rw-forgot-link w-full text-xs text-blue-900 "
            >
              Forgot Password?
            </Link>
          </div>
        </Form>
      </div>
      <div className="w-[350px] flex  items-center bg-white border border-solid border-zinc-300 text-center py-5 text-small">
        <p className="w-full">
          {`Don't have an account? `}
          <Link to={routes.signup()} className="text-blue-400 font-bold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
