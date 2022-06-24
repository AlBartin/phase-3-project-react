import React from 'react'
import {Link} from 'react-router-dom'

function PlantCard({ plant }) {

// const handleClick = () => {
//     setProfile(plant)
//     onAddProfile(plant);
// }

// onClick={handleClick} style={{cursor:"pointer"}}>

// const handleFavoriteClick = (event) => {
//         addFavorite(event.target.value)
//   }
  
  return (
    <div className="card">
        <Link to="/learn" style={{ textDecoration: 'none' }}>
        <h2 name={plant.id}> {plant.common_name}</h2>
        </Link>
        <Link to="/blog" style={{ textDecoration: 'none' }}>
        <img src={plant.image_url} alt={plant.name} name={plant.id} className="plant-picture" style={{cursor:"pointer"}}/>
        </Link>
        <div className="plant-details-section">
        <ul className="plant-detail-list">
            <li >Scientific Name: {plant.name}</li>
       </ul>
        </div>
    </div>
  )
}

export default PlantCard