import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cx from 'classnames'
import Product from './Product'

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 25px;

  ${props => props.theme.breakpoints.down('lg')} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${props => props.theme.breakpoints.down('md')} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${props => props.theme.breakpoints.down('sm')} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }

  .Product__popper {
    z-index: 5;
  }
`

const ProductsGrid = ({ products }) => {
  return (
    <StyledProductsGrid>
      {products.map((product, idx) => (
        <Product
          key={product.id}
          product={product}
          className={cx({
            hideMobile: idx > 5,
          })}
        />
      ))}
    </StyledProductsGrid>
  )
}

ProductsGrid.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ProductsGrid
