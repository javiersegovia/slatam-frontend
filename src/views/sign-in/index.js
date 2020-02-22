import React from 'react'
import FullScreen from '@components/UI/FullScreen'
import SignInCard from '@components/Session/SignIn'
import styled from 'styled-components'

const StyledFullScreen = styled(FullScreen)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.gradients.primary.left};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: block;
    background: ${({ theme }) => theme.palette.palelilac.extralight};
  }
`

const SignIn = () => {
  return (
    <>
      <StyledFullScreen>
        <SignInCard />
      </StyledFullScreen>
    </>
  )
}

export default SignIn
