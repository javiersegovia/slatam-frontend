import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cx from 'classnames'
import Supplier from './Supplier'

const StyledSuppliersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;

  ${props => props.theme.breakpoints.down('lg')} {
    grid-template-columns: repeat(4, 1fr);

    .hideLG {
      display: none;
    }
  }

  ${props => props.theme.breakpoints.down('md')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${props => props.theme.breakpoints.down('sm')} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }
`

const SuppliersGrid = ({ suppliers }) => {
  return (
    <StyledSuppliersGrid>
      {suppliers.map((supplier, idx) => (
        <Supplier
          key={supplier.id}
          supplier={supplier}
          className={cx({
            hideLG: idx > 3,
          })}
        />
      ))}
    </StyledSuppliersGrid>
  )
}

SuppliersGrid.propTypes = {
  suppliers: PropTypes.array.isRequired,
}

export default SuppliersGrid
