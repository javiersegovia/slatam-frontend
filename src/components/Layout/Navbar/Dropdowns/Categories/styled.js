import styled from 'styled-components'

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
`

export const DropdownSections = styled.div`
  width: 100%;
  background: white;
  border-bottom: 1.5px solid ${props => props.theme.palette.gray.light};
  position: relative;

  .DropdownSections__list {
    display: flex;

    button {
      font-size: 0.875rem;
      padding: 15px 25px;
      letter-spacing: 0.4px;
    }

    .active {
      position: relative;
      button {
        font-weight: 700;
        color: ${props => props.theme.palette.black.main};
      }
      &:after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 4px;
        z-index: 4;
        margin-top: -2px;
        background: ${props => props.theme.palette.steelBlue.main};
      }
    }
  }
`

export const StyledCategoriesList = styled.ul`
  /* min-width: 290px; */
  background: white;
  border-radius: 6px;
  box-shadow: ${props => props.theme.bShadows.searchBar};
  padding: 20px 0 0;
  font-size: 0.875rem;
  border-top-right-radius: ${props => (props.opened ? '0' : '6px')};
  border-bottom-right-radius: ${props => (props.opened ? '0' : '6px')};

  .CategoriesList__listItem {
    padding: 7.5px 0px;
    border-radius: 4px;
    margin: 2.5px 20px;
  }

  .CategoriesList__listItem.active {
    background: ${props => props.theme.palette.gray.light};
  }

  .CategoriesList__listButton {
    padding: 0 30px;
    &:hover {
      color: ${props => props.theme.palette.primary.main};
      text-decoration: underline;
    }
  }

  .CategoriesList__seeAll {
    padding: 0;
    border-top: 1px solid ${props => props.theme.palette.gray.light};
    button {
      letter-spacing: 0.4px;
      cursor: pointer;
      padding: 15px 20px 15px 50px;
      width: 100%;
      color: ${props => props.theme.palette.gold.main};
      text-align: left;
      font-size: 0.875rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const StyledCategoriesContent = styled.div`
  background: white;
  padding: 20px 30px 20px 30px;
  font-size: 0.875rem;
  box-shadow: ${props => props.theme.bShadows.menuDropdown};
  display: grid;
  grid-template-columns: auto auto;

  .SubcategoriesList__title {
    margin: 0;
    font-size: 1.5rem;
    letter-spacing: 0.75px;
    font-weight: 400;
  }

  .SubcategoriesList__list {
    padding: 0;
    margin-top: 30px;
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(10, auto);
    grid-gap: 15px 30px;

    .seAllProducts {
      color: ${props => props.theme.palette.gold.main};
    }
  }

  .SubcategoriesList__listItem {
    font-size: 0.75rem;
  }

  .SubcategoriesList__listButton:hover {
    text-decoration: underline;
  }

  .SubcategoriesList__featured {
    padding-left: 30px;
  }

  .SubcategoriesFeaturedList__list {
    padding: 0;
  }
`
