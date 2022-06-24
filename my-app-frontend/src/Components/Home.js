import React from 'react'

function Home({ plants }) {

// const displayPlant = plants.map(plant => <h1>{plant.common_name}</h1>)

  return (
    <div>
      <h1>{plants.common_name}</h1>
      <img src={plants.image_url} />
    </div>
  )
}

export default Home