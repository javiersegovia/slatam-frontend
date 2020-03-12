import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FlagIcon } from 'react-flag-kit'
import ProductContent from './ProductContent'

const StyledProduct = styled.div`
  border-radius: 4px;
  position: relative;
  width: 100%;
  box-shadow: ${props => props.theme.bShadows.product};

  ${props => props.theme.breakpoints.down('md')} {
    &.hideMobile {
      display: none;
    }
  }

  .Product__image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
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
    box-shadow: ${props => props.theme.bShadows.product};
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

const Product = ({ product, ...otherProps }) => {
  const [isHovered, setIsHovered] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  const memoProductContent = useMemo(
    () => <ProductContent product={product} />,
    [product]
  )

  return (
    <StyledProduct
      {...otherProps}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a href={`/p/${product.slug}`}>
        <div
          className="Product__image"
          style={{ backgroundImage: `url(${product.image})` }}
        />
      </a>
      <div className="Product__countryCode">
        <FlagIcon code={product.countryCode} size={22} />
        <span>{product.countryCode}</span>
      </div>
      {isHovered && memoProductContent}
    </StyledProduct>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
  }),
}

export default Product
