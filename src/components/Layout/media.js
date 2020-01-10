import { createMedia } from '@artsy/fresnel'
import { breakpointSizes } from './theme/breakpoints'

const ExampleAppMedia = createMedia({
  breakpoints: {
    ...breakpointSizes,
  },
})

export const mediaStyles = ExampleAppMedia.createMediaStyle()

export const { Media, MediaContextProvider } = ExampleAppMedia
