import React from 'react'
import PlantCard from './PlantCard'


function PlantContainer({ plants }) {
    
    const plantDisplay = plants.map((plant) => <PlantCard plant={plant} key={plant.id} />)
  return (
    <div className="plant-container">
        {plantDisplay}
    </div>
  )
}

export default PlantContainer