import React from 'react'
import CreateItem from '@components/Items/CreateItem'

const Items = () => (
  <>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ flex: '0 1 50%' }}>
        <h1 style={{ textAlign: 'center' }}>Create Item</h1>
        <CreateItem />
        <br />
      </div>
    </div>
  </>
)

export default Items
