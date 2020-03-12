import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useLongPress from '@hooks/useLongPress'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
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
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }

  .UnitsCounter__wrapper {
    display: inline-flex;
    border-radius: 6px;
    box-shadow: ${props => props.theme.bShadows.button};
  }

  .UnitsCounter__button {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 500;
    padding: 8px;
    font-size: 1.75rem;
    line-height: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    border: 1px solid ${({ theme }) => theme.palette.slategray.extralight};

    &:hover {
      border: 2px solid ${({ theme }) => theme.palette.primary.main};
    }

    &.disabled,
    &.disabled:hover {
      background: ${({ theme }) => theme.palette.snow.main};
      border: 1px solid ${({ theme }) => theme.palette.slategray.extralight};
      cursor: not-allowed;
    }

    &.left {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &.right {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  .UnitsCounter__input {
    font-weight: 500;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.palette.primary.main};
    width: 70px;
    text-align: center;
    padding: 8px;
    border-top: 1px solid ${({ theme }) => theme.palette.slategray.extralight};
    border-bottom: 1px solid
      ${({ theme }) => theme.palette.slategray.extralight};
  }

  .UnitsCounter__text {
    margin-left: 5px;
    display: inline-block;
    font-size: 1.125rem;
  }
`

const UnitsCounter = ({ count, setCount, minCount, maxCount }) => {
  const [inputValue, setInputValue] = useState(count)

  const increment = () => {
    if (maxCount && count + 1 > maxCount) return
    setCount(count + 1)
  }

  const decrement = () => {
    if (count - 1 < minCount) return
    setCount(count - 1)
  }

  const incrementLongPress = useLongPress(increment, 100)
  const decrementLongPress = useLongPress(decrement, 100)

  const handleInputChange = event => {
    setCount(Number(event.target.value))
  }

  const handleInputBlur = event => {
    if (maxCount && count > maxCount) setCount(maxCount, 10)
    else if (count < minCount) setCount(minCount, 10)
  }

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
        <input
          type="number"
          className="UnitsCounter__input"
          value={count}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
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
