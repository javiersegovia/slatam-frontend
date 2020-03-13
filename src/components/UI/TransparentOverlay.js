import React from 'react'
import styled from 'styled-components'
import useLockBodyScroll from '@hooks/useLockBodyScroll'

const StyledTransparentOverlay = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #041231ad;
  z-index: ${({ theme }) => theme.zIndex.transparentOverlay};
`
const TransparentOverlay = props => {
  useLockBodyScroll()
  return <StyledTransparentOverlay {...props} />
}

export default TransparentOverlay
