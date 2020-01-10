import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FlagIcon } from 'react-flag-kit'
import { MD } from '@components/UI/Typography'
import format from 'date-fns/format'

const StyledSupplier = styled.div`
  border-radius: 4px;
  position: relative;
  width: 100%;
  box-shadow: ${props => props.theme.bShadows.product};
  background: white;
  display: flex;
  flex-direction: column;
  padding: 40px 20px 20px;

  .Supplier__image {
    object-fit: contain;
    margin: 0 auto;
    width: 100%;
    max-height: 100px;
  }

  .Supplier__name {
    color: ${props => props.theme.palette.primary.main};
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
  }

  .Supplier__countryCode {
    margin-top: auto;
    background: ${props => props.theme.palette.snow.light};
    border: 1px solid ${props => props.theme.palette.gray.light};
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: 2px 6px;
    align-self: center;

    span {
      font-size: 0.8125rem;
      margin-left: 5px;
    }
  }

  .Supplier__date {
    text-align: center;
    font-size: 0.8125rem;
  }
`

const Supplier = ({ supplier, ...otherProps }) => {
  const { name, countryCode, country, createdAt, image } = supplier
  const date = format(supplier.createdAt, 'yyyy')
  return (
    <StyledSupplier {...otherProps}>
      <img src={image} className="Supplier__image" alt="Supplier Logo" />
      <h6 className="Supplier__name">{name}</h6>
      <div className="Supplier__countryCode">
        <FlagIcon code={countryCode} size={22} />
        <span>{country}</span>
      </div>
      <p className="Supplier__date">
        <MD>{`Featured supplier since **${date}**`}</MD>
      </p>
    </StyledSupplier>
  )
}

Supplier.propTypes = {}

export default Supplier
