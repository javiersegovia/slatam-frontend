import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import formatMoney from '@lib/formatMoney'
import betweenRange from '@lib/betweenRange'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import FavoriteBorderIcon from '@material-ui/icons/Favorite'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import Rating from '@material-ui/lab/Rating'
import Button from '@components/UI/Button'
import ProductPrice from '@components/Products/ProductPrice'
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

  .ProductDescription__rating {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 0.875rem;

    .description {
      border-left: 1px double ${({ theme }) => theme.palette.black.light};
      padding-left: 8px;
      margin: 0 0 0 5px;
    }
  }

  .ProductDescription__content {
    margin-top: 20px;
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

    .perUnit {
      margin-left: 7px;
      font-size: 0.875rem;
    }
  }

  .ProductDescription__actions {
    display: inline-grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    margin-top: 30px;

    .buyButton {
      min-width: 170px;
    }
  }

  .ProductDescription__whatsApp {
    display: flex;
    align-items: center;
    margin-top: 10px;

    .WhatsAppIcon {
      color: #25d366;
    }

    p {
      display: inline-block;
      margin: 0 0 0 5px;
    }
  }
`

const ProductDescription = ({ product }) => {
  const {
    title,
    rating,
    priceRanges,
    descriptionDetails,
    logisticDetails,
  } = product

  const defaultValuePerUnit = priceRanges[0].value

  const [unitCount, setUnitCount] = useState(logisticDetails.minOrder)
  const [unitPrice, setUnitPrice] = useState(defaultValuePerUnit)

  useEffect(() => {
    let valuePerUnit = defaultValuePerUnit

    if (priceRanges.length > 1) {
      const price = priceRanges.find(item =>
        betweenRange(unitCount, item.range)
      )
      valuePerUnit = price ? price.value : defaultValuePerUnit
    }

    setUnitPrice(valuePerUnit)
  }, [unitCount])

  return (
    <StyledProductDescription>
      <h1 className="ProductDescription__title">{title}</h1>
      <div className="ProductDescription__tags">
        <span>Ready to Ship</span>
        <span>In Stock</span>
        <span>Fast Dispatch</span>
      </div>
      {rating && rating.average && (
        <div className="ProductDescription__rating">
          <Rating value={rating.average} precision={0.5} readOnly />
          {rating.reviewsCount && (
            <p className="description">{rating.reviewsCount} reviews</p>
          )}
        </div>
      )}
      <div className="ProductDescription__content">
        <div className="ProductDescription__row price multiple">
          <div className="title">
            FOB USD Price{priceRanges.length > 1 ? ' Range:' : ':'}
          </div>
          <ProductPrice className="value" priceRanges={priceRanges} showIcon />
        </div>
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
              <li key={detail} className="ProductDescription__listItem">
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>
      <UnitsCounter
        count={unitCount}
        setCount={setUnitCount}
        minCount={logisticDetails.minOrder}
        maxCount={logisticDetails.maxOrder || null}
      />
      <div className="ProductDescription__totalPrice">
        <div className="title">Total:</div>
        <div className="value">{formatMoney(unitCount * unitPrice)}</div>
        {priceRanges.length > 1 && unitCount > 1 && (
          <div className="perUnit">{`(${formatMoney(unitPrice)} each)`}</div>
        )}
      </div>
      <div className="ProductDescription__actions">
        <Button size="lg" className="buyButton">
          Buy now
        </Button>
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

      {process.env.CONTACT_PHONE && (
        <div className="ProductDescription__whatsApp">
          <WhatsAppIcon className="WhatsAppIcon" />
          <p>
            Chat with us in real time via Whatsapp Business at{' '}
            {process.env.CONTACT_PHONE}
          </p>
        </div>
      )}
    </StyledProductDescription>
  )
}

ProductDescription.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      average: PropTypes.number.isRequired,
      reviewsCount: PropTypes.number.isRequired,
    }),
    priceRanges: PropTypes.arrayOf(
      PropTypes.shape({
        range: PropTypes.arrayOf(PropTypes.number).isRequired,
        value: PropTypes.number.isRequired,
      })
    ).isRequired,
    descriptionDetails: PropTypes.arrayOf(PropTypes.string),
    logisticDetails: PropTypes.shape({
      minOrder: PropTypes.number.isRequired,
      maxOrder: PropTypes.number,
      supplyUnits: PropTypes.number,
      supplyInterval: PropTypes.string,
      leadTimes: PropTypes.arrayOf(
        PropTypes.shape({
          range: PropTypes.arrayOf(PropTypes.number),
          value: PropTypes.number,
        })
      ).isRequired,
      shippingType: PropTypes.string,
      shippingFrom: PropTypes.shape({
        state: PropTypes.string,
        country: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }).isRequired,
}

export default ProductDescription
