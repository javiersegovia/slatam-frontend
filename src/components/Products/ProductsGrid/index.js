import React, {
  useState,
  useMemo,
  useEffect,
  useLayoutEffect,
  useContext,
} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { WindowSizeContext } from '@components/Layout/context/WindowSize'
import Product from './Product'

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.itemsPerRow}, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 25px;
`

const ProductsGrid = ({ products, maxRows = 2 }) => {
  const windowSize = useContext(WindowSizeContext)

  const getItemsPerRow = () => {
    if (windowSize.width >= 1300) return 6
    if (windowSize.width >= 1100) return 5
    if (windowSize.width >= 900) return 4
    if (windowSize.width >= 690) return 3
    return 2
  }

  const [itemsPerRow, setItemsPerRow] = useState(getItemsPerRow())
  const [maxItems, setMaxItems] = useState(maxRows * getItemsPerRow())

  useLayoutEffect(() => setItemsPerRow(getItemsPerRow()), [])

  useLayoutEffect(() => {
    const newItemsPerRow = getItemsPerRow()
    if (newItemsPerRow !== itemsPerRow) setItemsPerRow(newItemsPerRow)
    if (windowSize.width < 690) setMaxItems(newItemsPerRow * 3)
    else setMaxItems(maxRows * itemsPerRow)
  }, [windowSize.width, itemsPerRow])

  const reducedProducts = useMemo(() => {
    if (products.length === 0) return null
    if (products.length > maxItems) {
      return products
        .slice(0, maxItems)
        .map(product => <Product product={product} />)
    }
    return products.map(product => <Product product={product} />)
  }, [products, maxItems])

  return (
    <StyledProductsGrid itemsPerRow={itemsPerRow}>
      {reducedProducts}
    </StyledProductsGrid>
  )
}

ProductsGrid.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ProductsGrid
