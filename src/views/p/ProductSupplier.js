import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FlagIcon } from 'react-flag-kit'
import format from 'date-fns/format'
import getTime from 'date-fns/getTime'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import { AppConfigContext } from '@components/Layout/context/AppConfig'
import Rating from '@material-ui/lab/Rating'
import formatMoney from '@lib/formatMoney'

const StyledProductSupplier = styled.div`
  padding: 30px 60px;
  border-top: 2px solid ${({ theme }) => theme.palette.snow.light};
  color: ${({ theme }) => theme.palette.black.light};

  .ProductSupplier__rating {
    padding: 10px 30px;
    border-radius: 6px;
    box-shadow: ${({ theme }) => theme.bShadows.cards};
    margin-left: 60px;

    .rating__main,
    .rating__content {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .rating__content {
    }

    .rating__average {
      font-weight: 700;
      font-size: 1.25rem;
      margin-right: 7px;
    }

    .rating__tradeVolume {
      margin: 5px 0 0 0;
    }
  }

  .ProductSupplier__primaryInfo {
    display: flex;
    align-items: center;

    .ProductSupplier__companyLogo {
      border-radius: 4px;
      width: 75px;
      height: 75px;
      object-fit: contain;
      box-shadow: ${({ theme }) => theme.bShadows.product};
      border: 1px solid ${({ theme }) => theme.palette.snow.light};
    }

    .name {
      font-size: 1.5rem;
      margin: 0;
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  .ProductSupplier__infoWrapper {
    margin: 0 0 0 15px;
  }

  .ProductSupplier__nameWrapper {
    display: flex;
    align-items: center;
  }

  .ProductSupplier__membershipDate {
    display: flex;

    .membershipDate__icon {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.palette.green.main};
    }

    .membershipDate__description {
      margin: 0 0 0 7px;
    }
  }

  .ProductSupplier__details {
    margin-top: 25px;
  }

  .ProductSupplier__singleDetail {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    margin: 7.5px 0;
    min-height: 30px;

    .label {
      font-weight: 700;
    }

    .description {
      margin-left: 7px;
    }

    &.shipsToCountries {
      flex-direction: column;
      align-items: flex-start;

      .description {
        margin: 5px 0 0 0;
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-gap: 5px;
      }

      .ProductSupplier__country {
        font-size: 1.5rem;
      }
    }
  }
`

const StyledCountryBlock = styled.div`
  background: ${({ theme }) => theme.palette.gray.main};
  border: 1px solid ${({ theme }) => theme.palette.palelilac.main};
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  padding: 2px 6px;
  margin-left: 15px;

  span {
    font-size: 0.875rem;
    margin-left: 5px;
  }
`

const CountryBlock = ({ countryCode }) => (
  <StyledCountryBlock>
    <FlagIcon code={countryCode} />
    <span>{countryCode}</span>
  </StyledCountryBlock>
)

CountryBlock.propTypes = {
  countryCode: PropTypes.string.isRequired,
}

const ProductSupplier = ({ supplier }) => {
  const {
    name,
    country,
    languages,
    images,
    shipsTo,
    membership,
    acceptedPayment,
    rating,
  } = supplier

  const getMembershipStartYear = () => {
    return !membership.startedAt || Date.now() > membership.expiresAt
      ? null
      : format(getTime(membership.startedAt), 'yyyy')
  }

  const membershipDate = getMembershipStartYear()

  const { defaultImages } = useContext(AppConfigContext)

  return (
    <StyledProductSupplier>
      <div className="ProductSupplier__primaryInfo">
        <img
          src={images.thumbnail || defaultImages.company}
          alt="Company Logo"
          className="ProductSupplier__companyLogo"
        />
        <div className="ProductSupplier__infoWrapper">
          <div className="ProductSupplier__nameWrapper">
            <h3 className="name">{name}</h3>
            <CountryBlock countryCode={country} />
          </div>
          {membershipDate && (
            <div className="ProductSupplier__membershipDate">
              <VerifiedUserIcon className="membershipDate__icon" />
              <p className="membershipDate__description">
                Featured supplier since <strong>{membershipDate}</strong>
              </p>
            </div>
          )}
        </div>
        {rating && rating.average && (
          <div className="ProductSupplier__rating">
            <div className="rating__main">
              <span className="rating__average">{rating.average}</span>
              <Rating value={rating.average} precision={0.5} readOnly />
            </div>
            <div className="rating__content">
              <p className="rating__tradeVolume">
                <strong>+{formatMoney(rating.tradeVolume)}</strong> on{' '}
                <strong>{rating.tradeCount}</strong> trades
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="ProductSupplier__details">
        {languages && languages.length > 0 && (
          <div className="ProductSupplier__singleDetail">
            <div className="label">Language:</div>
            <div className="description">
              {languages.map(lang => (
                <span key={lang}>{lang}</span>
              ))}
            </div>
          </div>
        )}
        {acceptedPayment && acceptedPayment.length > 0 && (
          <div className="ProductSupplier__singleDetail">
            <div className="label">Payment:</div>
            <div className="description">
              {acceptedPayment.map(payment => (
                <span key={payment}>{payment}</span>
              ))}
            </div>
          </div>
        )}
        {shipsTo && shipsTo.length > 0 && (
          <div className="ProductSupplier__singleDetail shipsToCountries">
            <div className="label">Ready to ship to:</div>
            <div className="description">
              {shipsTo.map(ctry => (
                <FlagIcon
                  key={ctry}
                  code={ctry}
                  className="ProductSupplier__country"
                  title={ctry}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </StyledProductSupplier>
  )
}

ProductSupplier.propTypes = {
  supplier: {
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    languages: PropTypes.array,
    images: PropTypes.array,
    shipsTo: PropTypes.array,
    membership: PropTypes.object,
    acceptedPayment: PropTypes.object,
    rating: PropTypes.object,
  },
}

export default ProductSupplier
