import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import formatMoney from '@lib/formatMoney'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import FavoriteBorderIcon from '@material-ui/icons/Favorite'
import Button from '@components/UI/Button'
import UnitsCounter from './UnitsCounter'

const StyledProductDescription = styled.div`
  padding: 30px 60px;
  color: ${({ theme }) => theme.palette.black.light};

  .ProductDescription__title {
    font-size: 2.25rem;
    font-weight: 500;
    margin: 0;
  }

  .ProductDescription__tags {
    margin-bottom: 20px;
    display: inline-grid;
    grid-auto-flow: column;
    grid-gap: 15px;

    span {
      font-size: 0.8125rem;
      background: lightblue;
      border-radius: 6px;
      padding: 2px 8px;
    }
  }

  .ProductDescription__row {
    display: flex;
    align-items: center;
    margin: 7.5px 0;
    font-size: 0.875rem;

    .title {
      font-weight: 700;
    }

    .value {
      margin-left: 7px;
    }

    .helpIcon {
      margin-left: 4px;
      color: ${({ theme }) => theme.palette.primary.main};
      font-size: 1.125rem;
      cursor: help;
    }

    .value.withIcon {
      display: flex;
      align-items: center;
    }

    &.price strong {
      font-size: 1rem;
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  .ProductDescription__list {
    margin: 20px 0 0 5px;
    font-size: 0.875rem;

    .ProductDescription__listItem {
      list-style: inside;
      margin: 5px 0;
    }
  }

  .ProductDescription__totalPrice {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    margin-top: 10px;
    color: ${({ theme }) => theme.palette.primary.main};

    .value {
      margin-left: 7px;
      font-weight: 500;
    }
  }

  .ProductDescription__actions {
    display: inline-grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    margin-top: 30px;
  }
`

const ProductDescription = ({ product }) => {
  const {
    title,
    rating,
    prices,
    descriptionDetails,
    logisticDetails,
    quickDetails,
  } = product

  const [unitsCount, setUnitsCount] = useState(logisticDetails.minOrder)

  return (
    <StyledProductDescription>
      <h1 className="ProductDescription__title">{title}</h1>
      <div className="ProductDescription__tags">
        <span>Ready to Ship</span>
        <span>In Stock</span>
        <span>Fast Dispatch</span>
      </div>
      <div className="ProductDescription__content">
        {prices.length > 1 ? (
          <div className="ProductDescription__row price multiple">
            <div className="title">FOB USD Price Range:</div>
            <div className="value withIcon">
              <span>
                <strong>{formatMoney(prices.slice(-1)[0].value)}</strong> —{' '}
                <strong>{formatMoney(prices[0].value)}</strong> per unit{' '}
              </span>
              <HelpOutlineIcon className="helpIcon prices" />
            </div>
          </div>
        ) : (
          <div className="ProductDescription__row price">
            <div className="title">FOB USD Price:</div>
            <div className="value">
              <strong>{prices[0].value}</strong> per unit
            </div>
          </div>
        )}
        {logisticDetails.minOrder && (
          <div className="ProductDescription__row">
            <div className="title">Min. Order:</div>
            <div className="value">
              {logisticDetails.minOrder}{' '}
              {logisticDetails.minOrder > 1 ? 'units' : 'unit'}
            </div>
          </div>
        )}
        {logisticDetails.supplyUnits && logisticDetails.supplyInterval && (
          <div className="ProductDescription__row">
            <div className="title">Supply Ability:</div>
            <div className="value">
              {logisticDetails.supplyUnits} per {logisticDetails.supplyInterval}
            </div>
          </div>
        )}
        {logisticDetails.leadTimes.length > 0 && (
          <div className="ProductDescription__row">
            <div className="title">Lead time:</div>
            <div
              className={`value ${
                logisticDetails.leadTimes.length > 1 ? 'withIcon' : ''
              }`}
            >
              {logisticDetails.leadTimes[0].value}{' '}
              {logisticDetails.leadTimes[0].value > 1 ? 'days' : 'day'}
              {logisticDetails.leadTimes.length > 1 && (
                <HelpOutlineIcon className="helpIcon leadTimes" />
              )}
            </div>
          </div>
        )}
        {logisticDetails.shippingType && (
          <div className="ProductDescription__row">
            <div className="title">Shipping type:</div>
            <div className="value">{logisticDetails.shippingType}</div>
          </div>
        )}
        {logisticDetails.shippingFrom.country && (
          <div className="ProductDescription__row">
            <div className="title">Product location:</div>
            <div className="value">
              {logisticDetails.shippingFrom.state &&
                `${logisticDetails.shippingFrom.state}, `}
              {logisticDetails.shippingFrom.country}
            </div>
          </div>
        )}
        {descriptionDetails.length > 0 && (
          <ul className="ProductDescription__list">
            {descriptionDetails.map(detail => (
              <li className="ProductDescription__listItem">{detail}</li>
            ))}
          </ul>
        )}
      </div>
      <UnitsCounter
        count={unitsCount}
        setCount={setUnitsCount}
        minCount={logisticDetails.minOrder}
        maxCount={logisticDetails.maxOrder || null}
      />
      <div className="ProductDescription__totalPrice">
        <div className="title">Total:</div>
        <div className="value">{formatMoney(prices[0].value)}</div>
      </div>
      <div className="ProductDescription__actions">
        <Button size="lg">Buy now</Button>
        <Button size="lg" outlined>
          Add to cart
        </Button>
        <Button size="lg" outlined>
          Request sample
        </Button>
        <Button size="lg" outlined>
          <FavoriteBorderIcon />
        </Button>
      </div>
    </StyledProductDescription>
  )
}

ProductDescription.propTypes = {}

export default ProductDescription
