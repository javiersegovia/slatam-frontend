import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FlagIcon } from 'react-flag-kit'
import { AppConfigContext } from '@components/Layout/context/AppConfig'
import ProductPrice from './ProductPrice'

const StyledProductSimple = styled.div`
  border-radius: 4px;
  position: relative;
  width: 100%;
  box-shadow: ${props => props.theme.bShadows.product};
  padding: 10px;
  background: white;

  .ProductSimple__image {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    width: 100%;
    height: 150px;
    border-radius: 4px;

    ${props => props.theme.breakpoints.down('lg')} {
      height: 220px;
    }

    ${props => props.theme.breakpoints.down('md')} {
      height: 220px;
    }
  }

  .ProductSimple__countryCode {
    box-shadow: ${props => props.theme.bShadows.product};
    background: white;
    border-radius: 4px;
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    padding: 2px 6px;

    span {
      font-size: 0.8125rem;
      margin-left: 5px;
    }
  }

  .ProductSimple__title,
  .ProductSimple__price {
    margin-top: 10px;
    text-align: center;
  }

  .ProductSimple__title {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 500;
  }

  .titleHref {
    text-decoration: underline;
  }

  .ProductSimple__price {
    font-size: 0.875rem;
  }
`

const ProductSimple = ({ product, ...otherProps }) => {
  const { slug, images, title, priceRanges, logisticDetails } = product
  const { defaultImages } = useContext(AppConfigContext)

  return (
    <StyledProductSimple {...otherProps}>
      <a href={`/p/${slug}`}>
        <div
          className="ProductSimple__image"
          style={{
            backgroundImage: `url(${images[0]?.thumbnail ||
              defaultImages?.product})`,
          }}
        />
      </a>
      <div className="ProductSimple__countryCode">
        <FlagIcon code={logisticDetails.shippingFrom?.country} size={22} />
        <span>{logisticDetails.shippingFrom?.country}</span>
      </div>
      <div className="ProductSimple__title">
        <a href={`/p/${slug}`} className="titleHref">
          {title}
        </a>
      </div>
      <div className="ProductSimple__price">
        <ProductPrice priceRanges={priceRanges} />
      </div>
    </StyledProductSimple>
  )
}

ProductSimple.propTypes = {
  product: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    priceRanges: PropTypes.array.isRequired,
    logisticDetails: PropTypes.shape({
      shippingFrom: PropTypes.shape({
        country: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }),
}

export default ProductSimple
