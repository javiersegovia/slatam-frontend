import styled from 'styled-components'
import { rgba } from 'polished'

const StyledDropdownWrapper = styled.ul`
  background: white;
  border-radius: 6px;
  box-shadow: ${props => props.theme.bShadows.searchBar};
  padding: 10px 20px;
  font-size: 0.875rem;

  .HelpDropdown__listItem {
    margin: 10px 0;
  }

  .HelpDropdown__listButton:hover {
    text-decoration: underline;
  }

  .LanguagesDropdown__listButton {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 4px;
    width: 100%;

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
    color: ${props => props.theme.palette.gray.dark};
  }

  .Shipping__searchInput {
    border-radius: 6px;
    padding: 10px;
    width: 100%;
    border: 1px solid ${props => props.theme.palette.gray.main};
    background: ${props => props.theme.palette.gray.extralight};
    box-shadow: ${props => props.theme.bShadows.inputText};

    &::placeholder {
      color: ${props => rgba(props.theme.palette.gray.dark, 0.75)};
    }
  }

  .LanguagesDropdown__list,
  .Shipping__list {
    padding: 10px;
    margin-top: 20px;
    background: ${props => props.theme.palette.gray.extralight};
    border: 1px solid ${props => props.theme.palette.gray.main};
    border-radius: 6px;
    margin-bottom: 10px;
    box-shadow: ${props => props.theme.bShadows.inputText};
    max-height: 270px;
    overflow: auto;
  }

  .Shipping__listItem {
    display: flex;
    align-items: center;
    border-radius: 6px;
    padding: 0 10px;

    &:hover {
      background: ${props => props.theme.palette.gray.main};
    }
  }

  .Shipping__checkboxWrapper {
    flex: 1;
    justify-content: space-between;
  }

  .Shipping__checkbox {
    padding-left: 35px;
    &:hover {
      background-color: transparent;
    }

    &.Mui-focusVisible & {
      outline: 2px auto rgba(19, 124, 189, 0.6);
      outline-offset: 2px;
    }

    .checkbox__icon {
      border-radius: 3px;
      width: 18px;
      height: 18px;
      box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
        inset 0 -1px 0 rgba(16, 22, 26, 0.1);
      background-color: #f5f8fa;
      background-image: linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0.8),
        hsla(0, 0%, 100%, 0)
      );

      input:hover ~ & {
        background-color: #ebf1f5;
      }
      input:disabled ~ & {
        box-shadow: none;
        background: rgba(206, 217, 224, 0.5);
      }
    }

    .checkbox__checkedIcon {
      background-color: ${props => props.theme.palette.secondary.main};
      box-shadow: inset 0 0 0 1px rgba(187, 189, 71, 0.2),
        inset 0 -1px 0 rgba(16, 22, 26, 0.1);
      background-image: linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0.1),
        hsla(0, 0%, 100%, 0)
      );
      display: flex;
      align-items: center;
      justify-content: center;

      &:before {
        display: block;
        content: '';
        width: 6px;
        height: 11px;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
        transform: rotate(45deg);
        margin-bottom: 1px;
        border-radius: 1px;
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
export default StyledDropdownWrapper
