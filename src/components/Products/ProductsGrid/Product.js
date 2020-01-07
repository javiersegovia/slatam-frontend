import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FlagIcon } from 'react-flag-kit'

const StyledProduct = styled.div`
  border-radius: 4px;
  position: relative;
  width: 100%;
  height: 180px;

  .Product__image {
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  .Product__countryCode {
    background: white;
    border-radius: 4px;
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    padding: 2px 6px;

    span {
      font-size: 0.8125rem;
      margin-left: 5px;
    }
  }
`

const Product = ({ product }) => {
  return (
    <StyledProduct>
      <div
        className="Product__image"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      <div className="Product__countryCode">
        <FlagIcon code={product.countryCode} size={22} />
        <span>{product.countryCode}</span>
      </div>
    </StyledProduct>
  )
}

Product.propTypes = {}

export default Product
