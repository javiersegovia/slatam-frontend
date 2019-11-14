import React from 'react'
import Button from '@material-ui/core/Button'
// import Items from '../components/Items'

const Home = props => (
  <div>
    {/* <Items page={parseFloat(props.query.page) || 1} /> */}
    <h1>This is my app title</h1>
    <p>Paragraph now</p>
    <Button color="primary" variant="contained">
      Material
    </Button>
  </div>
)

export default Home
