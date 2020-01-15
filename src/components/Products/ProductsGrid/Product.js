import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FlagIcon } from 'react-flag-kit'
import ProductContent from './ProductContent'

const StyledProduct = styled.a`
  border-radius: 4px;
  position: relative;
  width: 100%;
  box-shadow: ${props => props.theme.bShadows.product};
  cursor: pointer;

  ${props => props.theme.breakpoints.down('md')} {
    &.hideMobile {
      display: none;
    }
  }

  .Product__image {
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 200px;
    border-radius: 4px;

    ${props => props.theme.breakpoints.down('lg')} {
      height: 220px;
    }

    ${props => props.theme.breakpoints.down('md')} {
      height: 220px;
    }
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

  ${props =>
    props.isActive &&
    `
  .Product__content {
    display: block;
  }
  `}
`

const Product = ({ product, ...otherProps }) => {
  const [isHovered, setIsHovered] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  return (
    <StyledProduct
      {...otherProps}
      href={`/products/${product.id}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="Product__image"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      <div className="Product__countryCode">
        <FlagIcon code={product.countryCode} size={22} />
        <span>{product.countryCode}</span>
      </div>
      <ProductContent product={product} isActive={isHovered} />
    </StyledProduct>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
    // TODO: uncomment when using real data
    // minPrice: PropTypes.number.isRequired,
    // maxPrice: PropTypes.number.isRequired,
  }),
}

export default Product
