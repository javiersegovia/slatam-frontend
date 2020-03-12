import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Title } from '@components/UI/Typography'
import ProductSimple from './ProductSimple'

const StyledProductsRow = styled.div`
  .productsWrapper {
    display: grid;
    margin: 30px auto 0;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 25px;

    ${props => props.theme.breakpoints.down('lg')} {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .Product__popper {
    z-index: 5;
  }
`

const ProductsRow = ({ products }) => {
  return (
    <StyledProductsRow>
      <Title className="title">Related **products**</Title>
      <div className="productsWrapper">
        {products.map(product => (
          <ProductSimple key={product.id} product={product} />
        ))}
      </div>
    </StyledProductsRow>
  )
}

ProductsRow.propTypes = {}

export default ProductsRow
