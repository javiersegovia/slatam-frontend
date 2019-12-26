import React from 'react'
import PropTypes from 'prop-types'

const Feature = ({ icon, text }) => (
  <div>
    <span>{icon}</span>
    <h6>{text}</h6>
  </div>
)
const FeaturesGrid = ({ items }) =>
  items.map(item => <Feature icon={item.icon} text={item.text} />)

FeaturesGrid.propTypes = {}

export default FeaturesGrid
