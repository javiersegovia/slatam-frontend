import React, { useState, useEffect, useContext } from 'react'
import uuidv4 from 'uuid/v4'
import { WindowSizeContext } from '@components/Layout/context/WindowSize'
import CategoriesContent from './Content'
import { StyledCategoriesList, DropdownWrapper } from './styled'

const tempCategoryList = [
  {
    id: 'FAKEIDelectronics',
    name: 'Electronics',
  },
  {
    id: 'FAKEIDvehicles',
    name: 'Vehicles',
  },
  {
    id: 'FAKEIDconsumerelectronics',
    name: 'Consumer Electronics',
  },
  {
    id: uuidv4(),
    name: 'Rubber & Plastics',
  },
  {
    id: uuidv4(),
    name: 'Tools & Hardware',
  },
  {
    id: uuidv4(),
    name: 'Toys & Hobbies',
  },
  {
    id: uuidv4(),
    name: 'Machinery',
  },
  {
    id: uuidv4(),
    name: 'Electrical Equipment & Supplies',
  },
  {
    id: uuidv4(),
    name: 'Beauty & Cosmetics',
  },
  {
    id: uuidv4(),
    name: 'Sports',
  },
]

const tempElectronicsList = [
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

const tempVehiclesList = [
  {
    id: uuidv4(),
    name: 'Mazda',
  },
  {
    id: uuidv4(),
    name: 'Tahoe',
  },
  {
    id: uuidv4(),
    name: 'Lamborghini',
  },
  {
    id: uuidv4(),
    name: 'Chery Orinoco',
  },
  {
    id: uuidv4(),
    name: 'Fiat Z',
  },
  {
    id: uuidv4(),
    name: 'Toyota Hilux',
  },
  {
    id: uuidv4(),
    name: 'Jeep 4x4',
  },
  {
    id: uuidv4(),
    name: 'Toyota Corolla',
  },
  {
    id: uuidv4(),
    name: 'Toyota Fortuner',
  },
  {
    id: uuidv4(),
    name: 'Ford Explorer',
  },
  {
    id: uuidv4(),
    name: 'Jeep Grand Cherokee',
  },
  {
    id: uuidv4(),
    name: 'Volkswagen SS',
  },
  {
    id: uuidv4(),
    name: 'Twingo',
  },
]

const tempConsumerElectronicsList = [
  {
    id: uuidv4(),
    name: 'Lavadora Haier',
  },
  {
    id: uuidv4(),
    name: 'Licuadora Oster',
  },
  {
    id: uuidv4(),
    name: 'Kit de ollas Oster',
  },
  {
    id: uuidv4(),
    name: 'Microondas Samsung',
  },
  {
    id: uuidv4(),
    name: 'Nevera Samsung',
  },
  {
    id: uuidv4(),
    name: 'Air Fryer',
  },
  {
    id: uuidv4(),
    name: 'Horno eléctrico Haier',
  },
]

const tempProductsData = {
  FAKEIDelectronics: tempElectronicsList,
  FAKEIDvehicles: tempVehiclesList,
  FAKEIDconsumerelectronics: tempConsumerElectronicsList,
}

const CategoriesList = ({
  dropdownTogglerRef,
  categories = tempCategoryList,
}) => {
  const [activeCategory, setActiveCategory] = useState(null)
  const handleMouseEnter = cat => {
    if (activeCategory && cat.id === activeCategory.id) return
    setActiveCategory(cat)
  }

  const windowSize = useContext(WindowSizeContext)

  const [offset, setOffset] = useState(null)
  useEffect(() => {
    const { offsetLeft } = dropdownTogglerRef.current
    if (!offset || offsetLeft !== offset.left) setOffset({ left: offsetLeft })
  }, [windowSize.width])

  return offset ? (
    <DropdownWrapper
      style={{
        left: offset.left,
        marginTop: '-11px',
      }}
      onMouseLeave={() => setActiveCategory(null)}
    >
      <div style={{ display: 'flex' }}>
        <StyledCategoriesList opened={!!activeCategory}>
          {categories.map(cat => (
            <li
              key={cat.id}
              className={`CategoriesList__listItem ${
                activeCategory && activeCategory.id === cat.id ? 'active' : ''
              }`}
              onFocus={() => handleMouseEnter(cat)}
              onMouseEnter={() => handleMouseEnter(cat)}
            >
              <a href="/" className="CategoriesList__listButton">
                {cat.name}
              </a>
            </li>
          ))}
          <li className="CategoriesList__seeAll">
            <button type="button">See all categories</button>
          </li>
        </StyledCategoriesList>
        {activeCategory && (
          <CategoriesContent
            category={activeCategory}
            categoryItems={
              tempProductsData[activeCategory.id] || tempElectronicsList
            }
          />
        )}
      </div>
    </DropdownWrapper>
  ) : null
}

export default CategoriesList
