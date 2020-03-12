import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import formatMoney from '@lib/formatMoney'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

const StyledProductPrice = styled.div`
  ${props =>
    props.showIcon &&
    `
      display: flex;
      align-items: center;
  `}

  .helpIcon {
    margin-left: 4px;
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1.125rem;
    cursor: help;
  }
`

const ProductPrice = ({ priceRanges, showIcon = false, className = null }) => {
  return (
    <StyledProductPrice className={className} showIcon={showIcon}>
      {priceRanges.length > 1 ? (
        <>
          <span>
            <strong>{formatMoney(priceRanges.slice(-1)[0].value)}</strong> —{' '}
            <strong>{formatMoney(priceRanges[0].value)}</strong> per unit{' '}
          </span>
          {showIcon && <HelpOutlineIcon className="helpIcon prices" />}
        </>
      ) : (
        <>
          <strong>{formatMoney(priceRanges[0].value)}</strong> per unit
        </>
      )}
    </StyledProductPrice>
  )
}

ProductPrice.propTypes = {}

export default ProductPrice
