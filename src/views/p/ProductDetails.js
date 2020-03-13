import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Title } from '@components/UI/Typography'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

const StyledProductDetails = styled.div`
  padding: 60px 0 120px;
  color: ${({ theme }) => theme.palette.black.light};
  text-align: center;

  .ProductDetails__subtitle {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .ProductDetails__detailsWrapper {
    display: inline-block;
    text-align: left;
    margin-top: 60px;
  }

  .ProductDetails__detailsGrid {
    margin-top: 20px;
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px 60px;
    font-size: 0.875rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    width: 100%;
  }

  .ProductDetails__singleDetail {
    display: flex;

    &.fullRow {
      grid-column: 1 / -1;
    }
  }

  .detail__title {
    font-weight: 500;
    margin-right: 5px;
  }

  .detail__content.withIcon {
    display: flex;
    align-items: center;
  }

  .helpIcon {
    margin-left: 4px;
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1.125rem;
    cursor: help;
  }

  .ProductDetails__content {
    display: inline-flex;
    flex-direction: column;
  }
`

const ProductDetails = ({ product }) => {
  const {
    quickDetails,
    logisticDetails: {
      shippingType = null,
      shippingFrom = null,
      itemDimension = null,
      itemWeight = null,
      shippingDimension = null,
      shippingWeight = null,
      leadTimes = null,
    },
  } = product

  const packagingNotNull = [
    shippingFrom,
    itemDimension,
    itemWeight,
    shippingDimension,
    shippingWeight,
    shippingType,
  ].filter(packageDetail => packageDetail)

  return (
    <StyledProductDetails>
      <Title className="title">Product **overview**</Title>
      <div className="ProductDetails__content">
        {quickDetails?.length > 0 && (
          <div className="ProductDetails__detailsWrapper">
            <div className="ProductDetails__subtitle">Quick details</div>
            <div className="ProductDetails__detailsGrid">
              {quickDetails.map(detail => (
                <div
                  key={detail.title}
                  className="ProductDetails__singleDetail"
                >
                  <div className="detail__title">{detail.title}:</div>
                  <div className="detail__content">{detail.content}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {packagingNotNull?.length > 0 && (
          <div className="ProductDetails__detailsWrapper">
            <div className="ProductDetails__subtitle">Packaging & Delivery</div>
            <div className="ProductDetails__detailsGrid">
              {leadTimes?.length > 0 && (
                <div className="ProductDetails__singleDetail fullRow">
                  <div className="detail__title">Lead time:</div>
                  <div className="detail__content withIcon">
                    {/* TODO: extract leadTimes to its ownComponent, used in
                    ProductDescription too */}
                    {leadTimes[0].value}{' '}
                    {leadTimes[0].value > 1 ? 'days' : 'day'}
                    {leadTimes.length > 1 && (
                      <HelpOutlineIcon className="helpIcon leadTimes" />
                    )}
                  </div>
                </div>
              )}
              {itemDimension && (
                <div className="ProductDetails__singleDetail">
                  <div className="detail__title">Item dimension:</div>
                  <div className="detail__content">{itemDimension}</div>
                </div>
              )}
              {itemWeight && (
                <div className="ProductDetails__singleDetail">
                  <div className="detail__title">Item weight:</div>
                  <div className="detail__content">{itemWeight}</div>
                </div>
              )}
              {shippingDimension && (
                <div className="ProductDetails__singleDetail">
                  <div className="detail__title">Shipping dimension:</div>
                  <div className="detail__content">
                    {shippingDimension.toLowerCase()}
                  </div>
                </div>
              )}
              {shippingWeight && (
                <div className="ProductDetails__singleDetail">
                  <div className="detail__title">Shipping weight:</div>
                  <div className="detail__content">
                    {shippingWeight.toLowerCase()}
                  </div>
                </div>
              )}
              {shippingType && (
                <div className="ProductDetails__singleDetail">
                  <div className="detail__title">Shipping type:</div>
                  <div className="detail__content">{shippingType}</div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </StyledProductDetails>
  )
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    quickDetails: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })
    ),
    logisticDetails: PropTypes.shape({
      shippingType: PropTypes.string,
      shippingFrom: PropTypes.string,
      itemDimension: PropTypes.string,
      itemWeight: PropTypes.string,
      shippingDimension: PropTypes.string,
      shippingWeight: PropTypes.string,
      leadTimes: PropTypes.arrayOf(
        PropTypes.shape({
          range: PropTypes.array,
          value: PropTypes.number,
        })
      ),
    }),
  }),
}

export default ProductDetails
