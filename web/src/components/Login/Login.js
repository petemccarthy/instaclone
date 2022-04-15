import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { useRef } from 'react'
import { Link, routes } from '@redwoodjs/router'
import logo from './logo.png'
import facebook from './facebook.png'

const Login = () => {
  const usernameRef = useRef()
  function onSubmit(e) {
    e.preventDefault()
    console.log('onSubmit')
  }
  return (
    <div className="bg-neutral-50">
      <div className="w-[350px] px-[42px] pt-[47px] flex flex-col items-center bg-white border border-solid border-zinc-300 mb-2">
        <div className="w-[175px]  mb-10">
          <img src={logo} alt="logo" />
        </div>
        <Form onSubmit={onSubmit} className="rw-form-wrapper 0">
          <Label
            name="username"
            className="hidden"
            errorClassName="rw-label rw-label-error"
          />
          <TextField
            name="username"
            className="rw-input w-full p-2 mb-2 text-sm leading-3 align-baseline rounded-sm border border-solid bg-zinc-50 appearance-none box-border border-zinc-300 text-neutral-800 text-xxs"
            errorClassName="rw-input rw-input-error"
            placeholder="Username or email"
            ref={usernameRef}
            validation={{
              required: {
                value: true,
                message: 'Username is required',
              },
            }}
          />

          <FieldError name="username" className="rw-field-error" />

          <Label
            name="password"
            className="rw-label hidden w-full"
            errorClassName="rw-label rw-label-error"
          >
            Password
          </Label>
          <PasswordField
            name="password"
            placeholder="Password"
            className="rw-input w-full p-2 mb-4 text-sm leading-3 align-baseline rounded-sm border border-solid bg-zinc-50 appearance-none box-border border-zinc-300 text-neutral-800 text-xxsm"
            errorClassName="rw-input rw-input-error"
            autoComplete="current-password"
            validation={{
              required: {
                value: true,
                message: 'Password is required',
              },
            }}
          />
          <div className="rw-button-group w-full p-2 text-center bg-blue-500 text-blue-100 rounded leading-3 font-extrabold mb-6">
            <Submit className="rw-button rw-button-blue">Log In</Submit>
          </div>
          <div className="relative mt-2 mb-4 flex flex-row items-stretch align-baseline leading-4 text-neutral-800 w-full">
            <div className="flex h-px flex-shrink flex-grow flex-col items-stretch border-0 border-solid border-black bg-zinc-300 p-0 align-baseline"></div>
            <div className="relative my-0 mx-4 box-border flex flex-shrink-0 flex-grow-0 flex-col items-stretch border-0 border-solid border-black p-0 align-baseline text-xs font-semibold uppercase text-neutral-400 -mt-2">
              or
            </div>
            <div className="relative m-0 box-border flex h-px flex-shrink flex-grow flex-col items-stretch border-0 border-solid border-black bg-zinc-300 p-0 align-baseline"></div>
          </div>
          <Link className="flex items-center text-center w-full p-1 justify-center text-blue-900 font-semibold leading-3 mb-4">
            <img src={facebook} alt="facebook" className="w-4 mr-4" />
            <p>Login with Facebook</p>
          </Link>

          <div className="rw-forgot-link text-center mb-6">
            <Link
              to={routes.forgotPassword()}
              className="rw-forgot-link w-full text-xs text-blue-900 "
            >
              Forgot Password?
            </Link>
          </div>

          <FieldError name="password" className="rw-field-error" />
        </Form>
      </div>
      <div className="w-[350px] flex  items-center bg-white border border-solid border-zinc-300 text-center py-5 text-small">
        <p className="w-full">
          {`Don't have an account? `}
          <Link className="text-blue-400 font-bold">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
