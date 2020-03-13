import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ImageMagnify from 'react-image-magnify'
import styled from 'styled-components'
import cx from 'classnames'

const StyledProductGallery = styled.div`
  width: 100%;
  display: inline-flex;
  position: relative;

  .ProductGallery__thumbnails {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 60px;
    top: 60px;
    z-index: 10;
  }

  .ProductGallery__singleThumbnail {
    border-radius: 4px;
    box-shadow: ${({ theme }) => theme.bShadows.cards};
    border: 2px solid transparent;
    margin: 2.5px 0;
    border: 2px solid ${({ theme }) => theme.palette.slategray.light};
    overflow: hidden;
    padding: 0 5px;
    cursor: pointer;

    &.active {
      border: 2px solid ${({ theme }) => theme.palette.primary.main};
      box-shadow: 0px 1px 6px 1px #002882;
    }
  }

  .ProductGallery__magnifyWrapper {
    max-width: 70%;
    margin: 60px auto 0;
  }

  .ProductGallery__magnifyContainer {
    width: auto;
    height: 100%;
  }

  .ProductGallery__mainImage {
    width: auto !important;
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
  }

  .ProductGallery__largeImageContainer {
    z-index: ${({ theme }) => theme.zIndex.modal};
  }
  .ProductGallery__largeImage {
  }
`

const ProductGallery = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const currentMainImage = images[imageIndex].main
  const currentLargeImage = images[imageIndex].large

  return (
    <StyledProductGallery maxWidthMainImage={currentMainImage?.width}>
      {images?.length > 1 && (
        <div className="ProductGallery__thumbnails">
          {images.map((img, index) => {
            if (!img.main?.url || !img.thumbnail?.url) return null
            return (
              <div
                key={img.thumbnail.url}
                onMouseEnter={() => setImageIndex(index)}
                name={index}
                className={cx('ProductGallery__singleThumbnail', {
                  active: imageIndex === index,
                })}
              >
                <img
                  src={img.thumbnail.url}
                  alt={`Thumbnail #${index}`}
                  name={index}
                />
              </div>
            )
          })}
        </div>
      )}
      <div className="ProductGallery__magnifyWrapper">
        <ImageMagnify
          smallImage={{
            src: currentMainImage?.url,
            isFluidWidth: true,
            height: 700,
          }}
          largeImage={{
            src: currentLargeImage?.url || currentMainImage?.url,
            width: currentLargeImage?.width || currentMainImage?.width,
            height: currentLargeImage?.height || currentMainImage?.height,
          }}
          enlargedImageContainerDimensions={{
            width: '200%',
            height: '100%',
          }}
          shouldUsePositiveSpaceLens
          className="ProductGallery__magnifyContainer"
          imageClassName="ProductGallery__mainImage"
          enlargedImageContainerClassName="ProductGallery__largeImageContainer"
          enlargedImageClassName="ProductGallery__largeImage"
        />
      </div>
    </StyledProductGallery>
  )
}

ProductGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      main: PropTypes.shape({
        url: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }).isRequired,
      large: PropTypes.shape({
        url: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }).isRequired,
      thumbnail: PropTypes.shape({
        url: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default ProductGallery
