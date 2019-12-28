import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from '@components/UI/Container'

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
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

const StyledCategoriesList = styled.ul`
  /* overflow-y: scroll;
  max-height: 400px; */
  background: white;
  border: 1.5px solid ${props => props.theme.palette.gray.light};
  padding: 20px 0 0;
  font-size: .875rem;

  .CategoriesList__listItem {
    padding: 7.5px 40px;
    &:hover {
      /* box-shadow: ${props => props.theme.bShadows.searchBar}; */
      background: ${props => props.theme.palette.gray.light};
      /* border: 1px solid ${props => props.theme.palette.gray.light}; */
    }
  }

  .CategoriesList__listButton {
    &:hover {
      color: ${props => props.theme.palette.primary.main};
    }
  }

  .CategoriesList__seeAll {
    padding: 0;
    border-top: 1px solid ${props => props.theme.palette.gray.light};
    button {
      letter-spacing: 0.4px;
      cursor: pointer;
      padding: 15px 20px 15px 40px;
      width: 100%;
      color: ${props => props.theme.palette.gold.main};
      text-align: left;
      font-size: .875rem;
    }
  }
`

const tempCategoryList = [
  {
    id: 1,
    name: 'Home & Kitchen',
  },
  {
    id: 2,
    name: 'Tools & Hardware',
  },
  {
    id: 3,
    name: 'Rubber & Plastics',
  },
  {
    id: 4,
    name: 'Vehicles & Accesories',
  },
  {
    id: 5,
    name: 'Toys & Hobbies',
  },
  {
    id: 6,
    name: 'Machinery',
  },
  {
    id: 7,
    name: 'Electrical Equipment & Supplies',
  },
  {
    id: 8,
    name: 'Consumer Electronics',
  },
  {
    id: 9,
    name: 'Beauty & Cosmetics',
  },
  {
    id: 10,
    name: 'Sports',
  },
]

const CategoriesList = ({ list = tempCategoryList }) => (
  <DropdownWrapper>
    <StyledCategoriesList>
      {list.map(cat => (
        <li key={cat.name} className="CategoriesList__listItem">
          <a href="/" className="CategoriesList__listButton">
            {cat.name}
          </a>
        </li>
      ))}
      <li className="CategoriesList__seeAll">
        <button type="button">See all categories</button>
      </li>
    </StyledCategoriesList>
  </DropdownWrapper>
)

const CategoriesDropdown = ({ isOpen = false }) => {
  return (
    <DropdownWrapper style={{ width: '100%', marginTop: '1px' }}>
      <DropdownSections>
        <Container as="ul" className="DropdownSections__list">
          <li className="active">
            <button className="Navbar__listItemButton" type="button">
              Shopping
            </button>
          </li>
          <li>
            <button className="Navbar__listItemButton" type="button">
              Featured
            </button>
          </li>
          <li>
            <button className="Navbar__listItemButton" type="button">
              New
            </button>
          </li>
        </Container>
        <CategoriesList />
      </DropdownSections>
    </DropdownWrapper>
  )
}

CategoriesDropdown.propTypes = {
  isOpen: PropTypes.bool,
}

export default CategoriesDropdown
