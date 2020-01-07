import React from 'react'
import PropTypes from 'prop-types'
import { Title } from '@components/UI/Typography'
import styled from 'styled-components'

const SeeMoreButton = styled.a`
  margin-left: 20px;
  font-size: 1rem;
  color: ${props => props.theme.palette.primary.main};

  &:after {
    content: '';
    border-style: solid;
    border-width: 0 1.5px 1.5px 0;
    display: inline-block;
    margin-left: 6px;
    margin-top: 3px;
    padding: 3px;
    transform: rotate(-45deg);
    transition: all 0.15s ease;
  }
`

const SectionTitle = ({ children, href, seeMore }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 60,
      }}
    >
      <Title>{children}</Title>
      <SeeMoreButton href={href}>{seeMore}</SeeMoreButton>
    </div>
  )
}

SectionTitle.propTypes = {}

export default SectionTitle
