import styled from 'styled-components'
import { rgba } from 'polished'

const StyledDropdown = styled.ul`
  background: white;
  border-radius: 6px;
  box-shadow: ${props => props.theme.bShadows.searchBar};
  padding: 10px 20px;
  font-size: 0.875rem;
  font-family: ${props => props.theme.fonts.secondary};
  margin-top: 5px;

  .StyledDropdown__arrow,
  .StyledDropdown__arrowInner {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${({ theme }) => theme.palette.gray.dark};
    position: absolute;
    top: -5px;
    right: 15px;
  }

  .StyledDropdown__arrowInner {
    border-bottom: 10px solid white;
    right: -10px;
    top: 0;
  }

  .HelpDropdown__listItem {
    margin: 10px 0;
    font-weight: 500;
  }

  .HelpDropdown__listButton:hover {
    text-decoration: underline;
  }

  .LanguagesDropdown__listButton {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 4px 8px;
    width: 100%;
    font-family: ${props => props.theme.fonts.secondary};

    &:hover {
      background: ${props => props.theme.palette.gray.main};
    }

    span {
      margin-left: 7px;
      font-size: 0.875rem;
    }
  }

  .LanguagesDropdown__listButton.active {
    font-weight: 500;
  }

  .LanguagesDropdown__description,
  .Shipping__description {
    max-width: 200px;
    color: ${props => props.theme.palette.black.dark};
    font-weight: 500;
    margin: 20px auto;
    text-align: center;
    letter-spacing: 0;
  }

  .Shipping__searchInput {
    border-radius: 6px;
    padding: 10px;
    width: 100%;
    border: 1px solid ${props => props.theme.palette.gray.main};
    background: ${props => props.theme.palette.gray.extralight};
    font-family: ${props => props.theme.fonts.secondary};

    &::placeholder {
      color: ${props => rgba(props.theme.palette.gray.dark, 0.75)};
    }
  }

  .LanguagesDropdown__list,
  .Shipping__list {
    margin-top: 20px;
    background: ${props => props.theme.palette.snow.extralight};
    border: 1px solid ${props => props.theme.palette.gray.main};
    border-radius: 6px;
    margin-bottom: 10px;
    max-height: 300px;
    max-width: 280px;
    overflow: hidden;
  }

  .Shipping__windowWrapper {
    overflow-x: hidden !important;
  }

  .Shipping__listItem {
    display: flex;
    align-items: center;
    padding: 0 10px;

    &:hover {
      background: ${props => props.theme.palette.gray.main};
    }
  }

  .Shipping__checkboxWrapper {
    flex: 1;
    justify-content: space-between;
  }

  .Shipping__label {
    font-family: ${props => props.theme.fonts.secondary};
  }

  .Shipping__button {
    width: 100%;
    height: 100%;
  }

  .Shipping__checkbox {
    padding-left: 35px;
    padding-top: 0;
    padding-bottom: 0;
    &:hover {
      background-color: transparent;
    }

    &.Mui-focusVisible & {
      outline: 2px auto rgba(19, 124, 189, 0.6);
      outline-offset: 2px;
    }

    .checkbox__icon {
      border-radius: 4px;
      width: 19px;
      height: 19px;
      background-color: #f2f4f9;
      box-shadow: 0px 0px 4px rgb(226, 226, 230) inset;
      border: 1px solid gray;
      border: 1px solid #e0e0e0;

      input:hover ~ & {
        background-color: #ebf1f5;
      }
      input:disabled ~ & {
        box-shadow: none;
        background: rgba(206, 217, 224, 0.5);
      }
    }

    .checkbox__checkedIcon {
      display: flex;
      align-items: center;
      justify-content: center;

      &:before {
        display: block;
        content: '';
        width: 5px;
        height: 9px;
        border-bottom: 2px solid ${props => props.theme.palette.primary.main};
        border-right: 2px solid ${props => props.theme.palette.primary.main};
        transform: rotate(45deg);
        margin-bottom: 1px;
      }
      input:hover ~ & {
        background-color: #106ba3;
      }
    }
  }

  .MuiTypography-root {
    font-size: 0.875rem;
  }
`
const StyledDropdownWrapper = ({ children, ...otherProps }) => (
  <StyledDropdown {...otherProps}>
    <div className="StyledDropdown__arrow">
      <div className="StyledDropdown__arrowInner" />
    </div>
    {children}
  </StyledDropdown>
)

export default StyledDropdownWrapper
