import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

export const StyledTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 400;
  margin: 0;
  color: ${props => props.theme.palette.primary.main};

  ${props => props.theme.breakpoints.down('sm')} {
    font-size: 1.5rem;
  }
`
export const StyledText = styled.p`
  font-size: 1.125rem;
  line-height: 34px;

  ${props =>
    props.size === 'body2' &&
    `
    font-size: 1rem;
    line-height: 30px;
  `}

  ${props => props.theme.breakpoints.down('sm')} {
    font-size: 1rem;

    ${props =>
      props.size === 'body2' &&
      `
    font-size: 0.875rem;
  `}
  }
`

export const MD = ({ children }) => (
  <ReactMarkdown disallowedTypes={['paragraph']} unwrapDisallowed>
    {children}
  </ReactMarkdown>
)

export const Title = ({ children, ...props }) => {
  return (
    <StyledTitle {...props}>
      {typeof children === 'string' ? (
        <ReactMarkdown disallowedTypes={['paragraph']} unwrapDisallowed>
          {children}
        </ReactMarkdown>
      ) : (
        children
      )}
    </StyledTitle>
  )
}

export const Text = ({ children, ...props }) => {
  return (
    <StyledText {...props}>
      <ReactMarkdown disallowedTypes={['paragraph']} unwrapDisallowed>
        {children}
      </ReactMarkdown>
    </StyledText>
  )
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  href: PropTypes.string,
}
