import React, {useState} from 'react'
import EditJournal from './EditJournal'

function JournalContainer({ journal, addJournal, deleteJournal, editJournal }) {


function handleDeleteClick() {
    fetch(`http://localhost:9292/journal/${journal.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedJournal) => deleteJournal(deletedJournal));
  }

//   function handleEditClick() {
//     fetch(`http://localhost:9292/journal/${journal.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title: title,
//         content: content,
//       }),
//     })
//       .then((r) => r.json())
//       .then((updatedReview) => onUpdateReview(updatedReview));
//   }

const [clickShow, setClickShow] = useState(false)

const handleShowClick = () => {
  setClickShow(clickShow => !clickShow)
}

  return (
    <div className="left-panel">
        <h2 name={journal.id}> {journal.title}</h2>
        <p> {journal.created_at}</p>
        <p> {journal.content} </p>
        <img src={journal.plant.image_url} alt={journal.plant.name} name={journal.plant.id} className="plant-picture" style={{cursor:"pointer"}}/>
        <div className="plant-details-section">
        <ul className="plant-detail-list">
            <li >Scientific Name: {journal.plant.name}</li>
            <li >Water Requirement: {journal.plant.water.name}</li>
            <li >Soil Requirements: {journal.plant.soil.name}</li>
            <li >Soil Ingredients: {journal.plant.soil.ingredients}</li>
            <li >Soil Percentages: {journal.plant.soil.amounts}</li> 
       </ul>
       <button className="remove-button" value={journal.id} onClick={handleShowClick}> ✨ Edit Journal</button><br/><br/>
       {clickShow ? <div>
        {<EditJournal editJournal={editJournal} journal={journal}/>} 
        </div> : null }
        <button className="remove-button" value={journal.id} onClick={handleDeleteClick}> 💀 Delete Journal</button>
        </div>
    </div>
  )
}

export default JournalContainer