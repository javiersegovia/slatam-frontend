import React from 'react'
import PropTypes from 'prop-types'
import { Title } from '@components/UI/Typography'
import styled from 'styled-components'

const SeeMoreButton = styled.span`
  margin-left: 20px;
  font-size: 1rem;
  color: ${props => props.theme.palette.primary.main};

  ${props => props.theme.breakpoints.down('md')} {
    font-size: 0.9375rem;
  }

  ${props => props.theme.breakpoints.down('sm')} {
    font-size: 0.875rem;
  }

  @media only screen and (max-width: 390px) {
    display: none;
  }

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

const Wrapper = styled.a`
  display: inline-flex;
  align-items: center;
  margin-bottom: 60px;

  ${props => props.theme.breakpoints.down('xs')} {
    margin-bottom: 30px;
  }
`

const SectionTitle = ({ children, href, seeMore }) => {
  return (
    <Wrapper href={href}>
      <Title>{children}</Title>
      <SeeMoreButton>{seeMore}</SeeMoreButton>
    </Wrapper>
  )
}

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
  seeMore: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}
export default SectionTitle
