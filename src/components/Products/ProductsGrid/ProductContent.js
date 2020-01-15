import React from 'react'
import PropTypes from 'prop-types'
import Rating from '@material-ui/lab/Rating'
import styled from 'styled-components'

const StyledProductContent = styled.div`
  display: none;
  width: 100%;
  position: absolute;
  background: white;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: ${props => props.theme.bShadows.product};
  z-index: 5;
  padding: 0 15px;

  ${props =>
    props.isActive &&
    `
    display: block;
  `}

  .ProductContent__wrapper {
    position: relative;
    padding: 25px 0 20px;
  }

  .ProductContent__price {
    position: absolute;
    width: 100%;
    top: -25px;
    background: white;
    box-shadow: ${props => props.theme.bShadows.product};
    border-radius: 4px;
    padding: 15px;
    text-align: center;

    strong {
      font-weight: 500;
    }
  }

  .ProductContent__minOrder {
    font-size: 0.875rem;

    span {
      font-weight: 500;
    }
  }

  .ProductContent__title {
    font-size: 1rem;
    margin-bottom: 0;
  }

  .ProductContent__companyName {
    font-size: 1rem;
    color: ${props => props.theme.palette.primary.main};
    font-weight: 700;
    margin: 20px 0 0 0;
  }

  .ProductContent__rating {
    margin-top: 5px;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
  }
`

const ProductContent = ({ product, isActive }) => {
  return (
    <StyledProductContent className="Product__content" isActive={isActive}>
      <div className="ProductContent__wrapper">
        <div className="ProductContent__price">
          <strong>${product.minPrice}</strong>
          {product.maxPrice && (
            <>
              {' '}
              - <strong>${product.maxPrice}</strong>
            </>
          )}
        </div>
        <h6 className="ProductContent__title">{product.title}</h6>
        <div className="ProductContent__minOrder">
          <span>
            {product.minimumOrder} {product.minimumOrder > 1 ? 'Units' : 'Unit'}
          </span>{' '}
          (Min. order)
        </div>
        <p className="ProductContent__companyName">{product.owner.name}</p>
        <div className="ProductContent__rating">
          <Rating
            value={product.owner.rating.average}
            precision={0.5}
            readOnly
            size="small"
          />
          {product.owner.rating.numberOfRatings}
        </div>
      </div>
    </StyledProductContent>
  )
}

ProductContent.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    // TODO: change minPrice and maxPrice to 'number' when using real data
    minPrice: PropTypes.string.isRequired,
    maxPrice: PropTypes.string.isRequired,
    minimumOrder: PropTypes.number.isRequired,
    owner: PropTypes.shape({
      isVerified: PropTypes.bool,
      name: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        average: PropTypes.number.isRequired,
        numberOfRatings: PropTypes.number.isRequired,
      }).isRequired,
    }),
  }),
  isActive: PropTypes.bool.isRequired,
}

export default ProductContent
