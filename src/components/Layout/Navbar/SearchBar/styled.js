import styled from 'styled-components'
import { rgba } from 'polished'

export const SearchBarWrapper = styled.div`
  flex: 1 1 30%;
  border-radius: 35px;
  box-shadow: ${props => props.theme.bShadows.searchBar};
  display: flex;
  background: white;
  align-items: stretch;
  margin: auto auto auto 30px;
  color: ${props => rgba(props.theme.palette.gray.dark, 0.65)};
  font-size: 1rem;

  ${props => props.theme.breakpoints.up('sm')} {
    min-width: 370px;
  }
  ${props => props.theme.breakpoints.down('sm')} {
    margin-left: 15px;
  }

  .SearchBar__categories {
    border-right: 1px solid
      ${props => rgba(props.theme.palette.gray.dark, 0.45)};
    padding: 0 15px;
    cursor: pointer;

    ${props => props.theme.breakpoints.down('md')} {
      display: none;
    }

    span {
      display: flex;
      align-items: center;
      color: ${props => rgba(props.theme.palette.gray.dark, 0.65)};
    }
    span:after {
      content: '';
      border: solid ${props => rgba(props.theme.palette.gray.dark, 0.65)};
      border-width: 0 1.5px 1.5px 0;
      display: inline-block;
      margin-left: 5px;
      margin-bottom: 2px;
      padding: 3px;
      transform: rotate(45deg);
    }
  }

  .SearchBar__padding {
    flex: 1;
    display: flex;
    align-items: center;
    position: relative;
  }

  .SearchBar__icon {
    margin-left: auto;
    cursor: pointer;
    margin-right: 15px;
  }
`

export const StyledInput = styled.input`
  padding: 15px;
  border: none;
  outline: none;
  border-radius: 35px;
  flex: 1;
  margin-top: 2px;
  color: ${props => props.theme.palette.black.dark};
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.secondary};

  &::placeholder {
    color: ${props => rgba(props.theme.palette.gray.dark, 0.65)};
  }
`
