import styled from 'styled-components'

const CarouselButtons = styled.div`
  position: absolute;
  padding: 0 30px;
  display: flex;
  width: 100%;
  z-index: 20;
  .CarouselButtons__prev,
  .CarouselButtons__next {
    position: relative;
    padding: 5px;
    outline: none;
    cursor: pointer;
    /* border: 2px solid black; */
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:after {
      content: '';
      border: solid ${props => props.theme.palette.black.main};
      border-width: 0 2px 2px 0;
      padding: 12px;
    }
  }
  .CarouselButtons__prev {
    margin-right: auto;
    &:after {
      transform: rotate(135deg);
      margin-left: 5px;
    }
  }
  .CarouselButtons__next {
    margin-left: auto;
    &:after {
      transform: rotate(-45deg);
      margin-right: 5px;
    }
  }
`

export default CarouselButtons
