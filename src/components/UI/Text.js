import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styled = styled.div`
  line-height: 2;
  ${props => props.theme.breakpoint.only('md')} {
    line-height: 1.75;
  }
  ${props => props.theme.breakpoint.down('md')} {
    line-height: 1.5;
  }
  p:first-child {
    margin-top: 5px;
  }
  p:not(:first-child) {
    margin: 25px 0;
  }
  p:last-child {
    margin-bottom: 0;
  }
`

const Text = ({ children, ...otherProps }) => (
  <Styled {...otherProps}>{children}</Styled>
)

Text.propTypes = {
  children: PropTypes.node.isRequired
}

export default Text
