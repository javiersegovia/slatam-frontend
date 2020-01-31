import React from 'react'
import Link from 'next/link'
import { StyledWrapper } from '../styled'

const Completed = () => {
  return (
    <StyledWrapper>
      <h2 className="StyledCard__title">Congratulations!</h2>
      <div className="StyledCard__inner Completed">
        You completed the register succesfully. You will be redirected soon...
      </div>
      <Link href="/">
        <a>If you are not redirected, please click here</a>
      </Link>
    </StyledWrapper>
  )
}

export default Completed
