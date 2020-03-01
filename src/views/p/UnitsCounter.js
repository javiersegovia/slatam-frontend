import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useLongPress from '@hooks/useLongPress'
import cx from 'classnames'

const StyledUnitCounter = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  .UnitsCounter__wrapper {
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.palette.slategray.extralight};
    display: inline-flex;
  }

  .UnitsCounter__button {
    color: ${({ theme }) => theme.palette.blue.main};
    font-weight: 500;
    padding: 8px;
    font-size: 1.75rem;
    line-height: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 35px;

    &.disabled {
      background: ${({ theme }) => theme.palette.snow.main};
    }

    &.left {
      border-right: 1px solid
        ${({ theme }) => theme.palette.slategray.extralight};
    }
    &.right {
      border-left: 1px solid
        ${({ theme }) => theme.palette.slategray.extralight};
    }
  }

  .UnitsCounter__input {
    font-weight: 500;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.palette.blue.main};
    width: 70px;
    text-align: center;
    padding: 8px;
  }

  .UnitsCounter__text {
    margin-left: 5px;
    display: inline-block;
  }
`

const UnitsCounter = ({ count, setCount, minCount, maxCount }) => {
  const increment = () => {
    if (maxCount && count + 1 > maxCount) return
    setCount(count + 1)
  }

  const incrementLongPress = useLongPress(increment, 100)

  const decrement = () => {
    if (count - 1 < minCount) return
    setCount(count - 1)
  }

  const decrementLongPress = useLongPress(decrement, 100)

  return (
    <StyledUnitCounter>
      <div className="UnitsCounter__wrapper">
        <button
          type="button"
          className={cx('UnitsCounter__button left', {
            disabled: count - 1 < minCount,
          })}
          onClick={() => decrement()}
          {...decrementLongPress}
        >
          -
        </button>
        <input type="number" className="UnitsCounter__input" value={count} />
        <button
          type="button"
          className={cx('UnitsCounter__button right', {
            disabled: maxCount && count + 1 > maxCount,
          })}
          onClick={() => increment()}
          {...incrementLongPress}
        >
          +
        </button>
      </div>
      <p className="UnitsCounter__text">Units</p>
    </StyledUnitCounter>
  )
}

UnitsCounter.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  minCount: PropTypes.number.isRequired,
  maxCount: PropTypes.number,
}

export default UnitsCounter
