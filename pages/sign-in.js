import React from 'react'
import SignIn from '@components/Session/SignIn'
import SignUp from '@components/Session/SignUp'
import RequestReset from '@components/Session/RequestReset'
import ResetPassword from '@components/Session/ResetPassword'

const SignInPage = () => (
  <>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ flex: '0 1 50%' }}>
        <h1 style={{ textAlign: 'center' }}>Sign In</h1>
        <SignIn />
        <br />
      </div>
      <div style={{ flex: '0 1 50%' }}>
        <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
        <SignUp />
        <br />
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ flex: '0 1 50%' }}>
        <h1 style={{ textAlign: 'center' }}>Request Reset</h1>
        <RequestReset />
        <br />
      </div>
      <div style={{ flex: '0 1 50%' }}>
        <h1 style={{ textAlign: 'center' }}>Reset Password</h1>
        <ResetPassword />
        <br />
      </div>
    </div>
  </>
)

export default SignInPage
