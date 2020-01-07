import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styles = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  ${props => props.theme.breakpoints.only('xs')} {
    max-width: 100%;
    padding: 0 30px;
  }

  ${props =>
    props.limited &&
    `
    max-width: 1300px;
  `}
`

const Container = ({ children, ...otherProps }) => (
  <Styles {...otherProps}>{children}</Styles>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
