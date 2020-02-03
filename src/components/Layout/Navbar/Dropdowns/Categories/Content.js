import React from 'react'
import uuidv4 from 'uuid/v4'
import { StyledCategoriesContent } from './styled'

const tempCategoryItemsList = [
  {
    id: uuidv4(),
    name: 'Wireless Mouse',
  },
  {
    id: uuidv4(),
    name: 'Macbook Pro',
  },
  {
    id: uuidv4(),
    name: 'MSI Laptop',
  },
  {
    id: uuidv4(),
    name: 'HDMI Cable',
  },
  {
    id: uuidv4(),
    name: 'PS4 Controller',
  },
  {
    id: uuidv4(),
    name: 'Xiaomi Redmi Note 8 Pro',
  },
  {
    id: uuidv4(),
    name: 'Alcatel A30',
  },
  {
    id: uuidv4(),
    name: 'GPS Tracker',
  },
  {
    id: uuidv4(),
    name: 'iWatch',
  },
  {
    id: uuidv4(),
    name: 'iPhone XR',
  },
  {
    id: uuidv4(),
    name: 'SmartTV',
  },
  {
    id: uuidv4(),
    name: 'GPS Tracker',
  },
  {
    id: uuidv4(),
    name: 'iWatch',
  },
  {
    id: uuidv4(),
    name: 'iPhone XR',
  },
  {
    id: uuidv4(),
    name: 'Macbook Pro',
  },
  {
    id: uuidv4(),
    name: 'MSI Laptop',
  },
  {
    id: uuidv4(),
    name: 'HDMI Cable',
  },
]

const tempFeaturedItems = [
  {
    id: uuidv4(),
    name: 'FTG Venezuela',
  },
  {
    id: uuidv4(),
    name: 'Alimentos Polar',
  },
  {
    id: uuidv4(),
    name: 'Ron Carúpano',
  },
]

const CategoriesContent = ({
  category,
  categoryItems,
  featuredItems = tempFeaturedItems,
}) => {
  return category ? (
    <StyledCategoriesContent className="SubcategoriesList__content">
      <div className="SubcategoriesList__listContainer">
        <h6 className="SubcategoriesList__title">{category.name}</h6>
        <ul className="SubcategoriesList__list">
          {categoryItems.map(subcat => (
            <li key={subcat.id} className="SubcategoriesList__listItem">
              <a href="/" className="SubcategoriesList__listButton">
                {subcat.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="SubcategoriesList__featured">
        <h6 className="SubcategoriesList__title">Featured companies</h6>
        <ul className="SubcategoriesFeaturedList__list">
          {featuredItems.map(subcat => (
            <li
              key={subcat.name}
              className="SubcategoriesFeaturedList__listItem"
            >
              <a href="/" className="SubcategoriesFeaturedList__listButton">
                {subcat.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </StyledCategoriesContent>
  ) : null
}

export default CategoriesContent
