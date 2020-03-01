import React from 'react'
import styled from 'styled-components'
import ProductGallery from './ProductGallery'
import ProductDescription from './ProductDescription'

const Flex = styled.div`
  display: flex;
  align-items: stretch;

  .SingleProduct__galleryWrapper {
    width: 50%;
    background: #f5f5f3;
  }

  .SingleProduct__descriptionWrapper {
    flex: 1;
    background: white;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: block;
    background: ${({ theme }) => theme.palette.palelilac.extralight};
  }
`

const product = {
  title: 'Farm Fresh Adobo 31/20 - 50kg',
  rating: {
    avg: 4.5,
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
  prices: [
    {
      range: '1-9',
      value: 25600,
    },
    {
      range: '30-99',
      value: 24000,
    },
    {
      range: '100-199',
      value: 23000,
    },
    {
      range: '>=201',
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
    minOrder: 100,
    maxOrder: null,
    supplyUnits: 5000,
    supplyInterval: 'week',
    leadTimes: [
      {
        range: '1-100',
        value: 7,
      },
      {
        range: '101-500',
        value: 25,
      },
      {
        range: '>500',
        value: 'To be negotiated',
      },
    ],
    shippingType: "At the buyer's discretion",
    shippingFrom: {
      state: 'VE__4',
      country: 'VE',
    },
    itemDimensiones: '26 x 20 x 2 inches',
    itemWeight: '4.09 pounds',
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
  languages: ['1', '2'],
  images: {
    thumbnail: '',
  },
  shipsTo: [
    'VE',
    'US',
    'UK',
    'AR',
    'CO',
    'ES',
    'AU',
    'GE',
    'FR',
    'IN',
    'PO',
    'PA',
  ],
  membership: {
    type: 'Gold',
    startedAt: 1488356951,
    updatedAt: 1551428951,
    expiresAt: 1614587351,
  },
  acceptedPayment: ['1', '2', '3'],
  rating: {
    avg: 4.7,
    tradesCount: 267,
    tradeVolume: 34000000,
  },
}

const SingleProduct = ({ slug }) => {
  return (
    <>
      <Flex>
        <div className="SingleProduct__galleryWrapper">
          <ProductGallery images={product.images} />
        </div>
        <div className="SingleProduct__descriptionWrapper">
          <ProductDescription product={product} supplier={supplier} />
        </div>
      </Flex>
    </>
  )
}

export default SingleProduct
