import React from 'react'
import FullScreen from '@components/UI/FullScreen'
import SignUpCard from '@components/Session/SignUp'
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

const SignUp = () => {
  return (
    <>
      <StyledFullScreen>
        <SignUpCard />
      </StyledFullScreen>
    </>
  )
}

export default SignUp
