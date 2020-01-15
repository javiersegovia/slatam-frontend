import React from 'react'
import PropTypes from 'prop-types'
import Rating from '@material-ui/lab/Rating'
import styled from 'styled-components'

const StyledProductContent = styled.div`
  /* display: none; */
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
    margin-top: 5px;
    span {
      font-weight: 500;
    }
  }

  .ProductContent__title {
    font-size: 1rem;
    margin: 25px 0 0 0;
    text-decoration: underline;
  }

  .ProductContent__companyName {
    font-size: 0.875rem;
    color: ${props => props.theme.palette.primary.main};
    font-weight: 500;
    text-decoration: underline;
    margin: 15px 0 0 0;
    display: inline-block;
  }

  .ProductContent__rating {
    margin-top: 0px;
    display: flex;
    align-items: stretch;
    font-size: 0.875rem;

    .ProductContent__ratingNumber {
      margin-left: 3px;
    }
  }
`

const ProductContent = ({ product }) => {
  return (
    <StyledProductContent className="Product__content">
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
        <a href={`/products/${product.id}`}>
          <h6 className="ProductContent__title">{product.title}</h6>
        </a>
        <div className="ProductContent__minOrder">
          <span>
            {product.minimumOrder} {product.minimumOrder > 1 ? 'Units' : 'Unit'}
          </span>{' '}
          (Min. order)
        </div>
        <a
          href={`/companies/${product.owner.id}`}
          className="ProductContent__companyName"
        >
          {product.owner.name}
        </a>
        <div className="ProductContent__rating">
          <Rating
            value={product.owner.rating.average}
            precision={0.5}
            readOnly
            size="small"
          />
          <span className="ProductContent__ratingNumber">
            {product.owner.rating.numberOfRatings}
          </span>
        </div>
      </div>
    </StyledProductContent>
  )
}

ProductContent.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // TODO: change minPrice and maxPrice to 'number' when using real data
    minPrice: PropTypes.string.isRequired,
    maxPrice: PropTypes.string.isRequired,
    minimumOrder: PropTypes.number.isRequired,
    owner: PropTypes.shape({
      isVerified: PropTypes.bool,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        average: PropTypes.number.isRequired,
        numberOfRatings: PropTypes.number.isRequired,
      }).isRequired,
    }),
  }),
}

export default ProductContent
