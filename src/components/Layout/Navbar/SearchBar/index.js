import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { SearchBarWrapper, StyledInput } from './styled'

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = event => {
    setInputValue(event.target.value)
  }

  return (
    <SearchBarWrapper>
      <button type="button" className="SearchBar__categories">
        <span>All</span>
      </button>
      <div className="SearchBar__padding">
        <StyledInput
          value={inputValue}
          onChange={handleChange}
          placeholder="Find the best deals..."
        />
        <SearchIcon className="SearchBar__icon" />
      </div>
    </SearchBarWrapper>
  )
}

export default SearchBar
