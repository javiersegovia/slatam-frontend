import React, { useState } from 'react'
import { Transition, animated } from 'react-spring'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import CarouselButtons from '../../components/CarouselButtons'

const CarouselWrapper = styled.div`
  height: 400px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.palette.gray.main};

  .Header__Animated {
    position: absolute;
    width: 100%;
    height: 100%;
    will-change: opacity, transform;
  }
`

const HeaderWrapper = styled.header`
  padding: 50px 120px;
  height: 100%;
  background-position: 'center center';
  background-size: cover;
  background-repeat: no-repeat;
`

const Header1 = () => (
  <HeaderWrapper
    style={{
      background: 'url(/images/bg__world.jpg)',
    }}
  >
    <h1>1 Trade without borders </h1>
    <p>Paragraph now</p>
    <Button color="primary" variant="contained">
      Material
    </Button>
  </HeaderWrapper>
)

const Header2 = () => (
  <HeaderWrapper
    style={{
      background: 'url(/images/stock-girl.jpg)',
    }}
  >
    <h1>2 Limited offers</h1>
    <p>Paragraph now</p>
    <Button color="primary" variant="contained">
      Material
    </Button>
  </HeaderWrapper>
)

const Header3 = () => (
  <HeaderWrapper
    style={{
      background: 'url(/images/stock-girl.jpg)',
    }}
  >
    <h1>3 Suppliers of Latin America</h1>
    <p>Paragraph now</p>
    <Button color="primary" variant="contained">
      Material
    </Button>
  </HeaderWrapper>
)

const carouselItems = [
  style => (
    <animated.div className="Header__Animated" style={{ ...style }}>
      <Header1 />
    </animated.div>
  ),
  style => (
    <animated.div className="Header__Animated" style={{ ...style }}>
      <Header2 />
    </animated.div>
  ),
  style => (
    <animated.div className="Header__Animated" style={{ ...style }}>
      <Header3 />
    </animated.div>
  ),
]

const Header = props => {
  const maxIndex = carouselItems.length - 1
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState('PREV')

  const handlePrev = () => {
    setDirection('PREV')
    if (activeIndex - 1 < 0) setActiveIndex(maxIndex)
    else setActiveIndex(activeIndex - 1)
  }

  const handleNext = () => {
    setDirection('NEXT')
    if (activeIndex + 1 > maxIndex) setActiveIndex(0)
    else setActiveIndex(activeIndex + 1)
  }

  return (
    <CarouselWrapper>
      <Transition
        items={activeIndex}
        from={{
          opacity: 0,
          transform: `translate3d(${
            direction === 'PREV' ? '-100%' : '100%'
          }, 0, 0)`,
        }}
        enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
        leave={{
          opacity: 0,
          transform: `translate3d(${
            direction === 'NEXT' ? '-90%' : '100%'
          }, 0, 0)`,
          pointerEvents: 'none',
        }}
      >
        {index => carouselItems[index]}
      </Transition>
      <CarouselButtons>
        <button
          type="button"
          className="CarouselButtons__prev"
          onClick={handlePrev}
        />
        <button
          type="button"
          className="CarouselButtons__next"
          onClick={handleNext}
        />
      </CarouselButtons>
    </CarouselWrapper>
  )
}

Header.propTypes = {}

export default Header
