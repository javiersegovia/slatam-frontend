import React from 'react'
import styled from 'styled-components'
import ProductsRow from '@components/Products/ProductsRow'
import faker from 'faker'
import ProductGallery from './ProductGallery'
import ProductDescription from './ProductDescription'
import ProductSupplier from './ProductSupplier'
import ProductDetails from './ProductDetails'

const StyledSingleProduct = styled.div`
  .SingleProduct__galleryWrapper {
    width: 50%;
    background: #f5f5f3;
  }

  .SingleProduct__descriptionWrapper {
    flex: 1;
    background: white;
  }

  .SingleProduct__content {
    padding: 60px 0 0;

    ${props => props.theme.breakpoints.down('md')} {
      padding: 30px 0 0;
    }

    ${props => props.theme.breakpoints.down('xs')} {
      padding: 15px 0 0;
    }
  }

  .SingleProduct__relatedProducts,
  .SingleProduct__details {
    padding: 0 60px;

    ${props => props.theme.breakpoints.down('md')} {
      padding: 0 30px;
    }

    ${props => props.theme.breakpoints.down('xs')} {
      padding: 0 10px;
    }
  }

  .SingleProduct__details {
    background: ${({ theme }) => theme.palette.snow.light};
    border-top: 1px solid ${({ theme }) => theme.palette.palelilac.main};
    margin-top: 60px;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: stretch;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: block;
    background: ${({ theme }) => theme.palette.palelilac.extralight};
  }
`

const product = {
  title: faker.commerce.productName(),
  rating: {
    average: 4.5,
    reviewsCount: 106,
  },
  images: [
    {
      main: '',
      medium: '',
      small: '',
      thumbnail: '',
    },
    {
      main: '',
      medium: '',
      small: '',
      thumbnail: '',
    },
    {
      main: '',
      medium: '',
      small: '',
      thumbnail: '',
    },
  ],
  priceRanges: [
    {
      range: [1, 9],
      description: '1-9',
      value: 25600,
    },
    {
      range: [30, 99],
      description: '30-99',
      value: 24000,
    },
    {
      range: [100, 199],
      description: '100-199',
      value: 23000,
    },
    {
      range: [200],
      description: '>=200',
      value: 22000,
    },
  ],
  descriptionDetails: [
    'Set of 6 cloth storage cubes for orgnizing and reducing home or office clutter',
    'Made of stylish, sturdy, breathable fabric with sewn-in, easy-to-grab handles',
    'Function as open-top bins oor as drawers when used with a storage-cube organizer (not included)',
    'Lightweight and easy to carry; collapsible for compact storage; Beige color',
    'Down alternative fill for a plush feel; ideal for allergy sufferers',
    'Comes in a vacuum-sealed pack--allow 24 hours to decompress',
    'Piping along the edge creates a neatly tailored apperance',
  ],
  logisticDetails: {
    minOrder: 10,
    maxOrder: null,
    supplyUnits: 5000,
    supplyInterval: 'week',
    leadTimes: [
      {
        range: [1, 100],
        value: 7,
      },
      {
        range: [101, 500],
        value: 25,
      },
      {
        range: [500],
        value: null,
      },
    ],
    shippingType: "At the buyer's discretion",
    shippingFrom: {
      state: 'VE__4',
      country: 'VE',
    },
    itemDimension: '26 x 20 x 2 inches',
    itemWeight: '4.09 pounds',
    shippingDimension: '191 x 13.6 x 11.8 cm',
    shippingWeight: '5.1 pounds',
  },
  quickDetails: [
    {
      title: 'Product Status',
      content: 'Stock',
    },
    {
      title: 'Screen Size',
      content: 'No Monitor',
    },
    {
      title: 'Graphics Card Type',
      content: 'Integrated Card',
    },
    {
      title: 'Widescreen',
      content: 'Yes',
    },
    {
      title: 'Model Number',
      content: 'P06—J1900',
    },
    {
      title: 'Product Name',
      content: 'Intel Bay Trail J1900 2.42Ghz',
    },
    {
      title: 'LAN',
      content: '1*RJ45 LAN',
    },
    {
      title: 'Storage',
      content: '64GB/128GB SSD',
    },
    {
      title: 'Warranty',
      content: '30 Days free replacement 3 Years free repair',
    },
    {
      title: 'Type',
      content: 'Desktop',
    },
    {
      title: 'Processor Brand',
      content: 'Intel',
    },
    {
      title: 'Display Type',
      content: 'LCD and LED',
    },
    {
      title: 'Optical Drive Type',
      content: 'DVD-ROM',
    },
    {
      title: 'Brand Name',
      content: 'VENOEN',
    },
    {
      title: 'Place of Origin',
      content: 'Guangdong, China',
    },
    {
      title: 'Graphics Card',
      content: 'Intel HD Graphics',
    },
    {
      title: 'RAM',
      content: '4GB/8GB RAM',
    },
    {
      title: 'OS',
      content: 'Linux/Win7/Win10',
    },
  ],
}

const supplier = {
  name: 'Alimentos Polar LLC',
  country: 'VE',
  languages: ['1', '2'],
  images: {
    thumbnail: '',
  },
  shipsTo: [
    'VE',
    'US',
    'GB',
    'AR',
    'CO',
    'ES',
    'AU',
    'GE',
    'FR',
    'IN',
    'PR',
    'PA',
  ],
  membership: {
    type: 'Gold',
    startedAt: 1488356951000,
    updatedAt: 1551428951000,
    expiresAt: 1659846590000,
  },
  acceptedPayment: ['1', '2', '3'],
  rating: {
    average: 3.7,
    tradeCount: 267,
    tradeVolume: 34000000,
  },
}

const relatedProducts = Array(6)
  .fill(null)
  .map(() => ({
    id: faker.random.uuid(),
    title: faker.commerce.productName(),
    slug: faker.lorem.slug(),
    images: [
      {
        thumbnail: '/images/examples/example_product_1.jpg',
      },
    ],
    priceRanges: [
      {
        range: [1, 9],
        description: '1-9',
        value: Math.floor(Math.random() * 500000) + 1000,
      },
      {
        range: [30, 99],
        description: '30-99',
        value: Math.floor(Math.random() * 500000) + 1000,
      },
      {
        range: [100, 199],
        description: '100-199',
        value: Math.floor(Math.random() * 500000) + 1000,
      },
      {
        range: [200],
        description: '>=200',
        value: Math.floor(Math.random() * 500000) + 1000,
      },
    ],
    logisticDetails: {
      shippingFrom: {
        state: 'VE__4',
        country: faker.address.countryCode(),
      },
    },
  }))

const SingleProduct = ({ slug }) => {
  return (
    <StyledSingleProduct>
      <Flex>
        <div className="SingleProduct__galleryWrapper">
          <ProductGallery images={product.images} />
        </div>
        <div className="SingleProduct__descriptionWrapper">
          <ProductDescription product={product} />
          <ProductSupplier supplier={supplier} />
        </div>
      </Flex>
      <div className="SingleProduct__content">
        <div className="SingleProduct__relatedProducts">
          <ProductsRow products={relatedProducts} />
        </div>
        <div className="SingleProduct__details">
          <ProductDetails product={product} />
        </div>
      </div>
    </StyledSingleProduct>
  )
}

export default SingleProduct
