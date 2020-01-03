import styled from 'styled-components'

export const StyledDropdownWrapper = styled.ul`
  background: white;
  border-radius: 6px;
  box-shadow: ${props => props.theme.bShadows.searchBar};
  padding: 10px 20px;
  font-size: 0.875rem;
  margin-top: -1.5px;
  transform: translateX(-0.5px);

  .LanguagesDropdown__listItem,
  .HelpDropdown__listItem {
    margin: 10px 0;
  }
`
