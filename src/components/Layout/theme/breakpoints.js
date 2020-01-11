export const breakpointSizes = {
  mo: 0,
  xxs: 375,
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1300,
  xl: 1900,
}

const breakpoints = {
  sizes: {
    ...breakpointSizes,
  },
  up(size) {
    return `@media only screen and (min-width: ${breakpointSizes[size]}px)`
  },
  down(size) {
    return `@media only screen and (max-width: ${breakpointSizes[size]}px)`
  },
  between(min, max) {
    return `@media only screen and (min-width: ${breakpointSizes[min]}px) and (max-width: ${breakpointSizes[max]}px)`
  },
  only(...allSizes) {
    const { xxs, xs, sm, md, lg, xl } = breakpointSizes
    const sizes = []
    allSizes.forEach(size => {
      switch (size) {
        case 'mo':
          sizes.push(`(max-width: ${xs}px)`)
          break
        case 'xxs':
          sizes.push(`(min-width: ${xxs}px) and (max-width: ${xs}px)`)
          break
        case 'xs':
          sizes.push(`(min-width: ${xs}px) and (max-width: ${sm}px)`)
          break
        case 'sm':
          sizes.push(`(min-width: ${sm}px) and (max-width: ${md}px)`)
          break
        case 'md':
          sizes.push(`(min-width: ${md}px) and (max-width: ${lg}px)`)
          break
        case 'lg':
          sizes.push(`(min-width: ${lg}px) and (max-width: ${xl}px)`)
          break
        case 'xl':
          sizes.push(`(min-width: ${xl}px)`)
          break
        default:
          break
      }
    })
    let rest = null
    if (sizes.length > 1) rest = sizes.slice(1)
    return `@media only screen and ${sizes[0]}${
      rest ? rest.map(m => `, ${m}`) : ''
    }`
  },
}

export default breakpoints
