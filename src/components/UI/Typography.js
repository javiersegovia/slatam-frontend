import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

export const StyledTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 400;
  margin: 0;
  color: ${props => props.theme.palette.primary.main};
`

export const Title = ({ children, ...props }) => {
  return (
    <StyledTitle {...props}>
      <ReactMarkdown disallowedTypes={['paragraph']} unwrapDisallowed>
        {children}
      </ReactMarkdown>
    </StyledTitle>
  )
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  href: PropTypes.string,
}
