import React, {useState} from 'react'

function NewJournalEntry( { addJournal, plants }) {

    const initialJournal = {
        title: '',
        content: '',
        plant_id: '',
        user_id: '1',
        }

   
     const [userSubmit, setUserSubmit] = useState(initialJournal)
    
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const newJournal = {
            title: userSubmit.title,
            content: userSubmit.content,
            plant_id: userSubmit.plant_id,
            user_id: '1',
        }
        const config = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newJournal)
        }

        fetch("http://localhost:9292/journal", config)
        .then(resp => resp.json())
        .then((newJournal) => {addJournal(newJournal)
        setUserSubmit(initialJournal)})
    }

    const handleChange = (event) => {
        setUserSubmit({
            ...userSubmit,
            [event.target.name]:event.target.value
        })
    }

  return (
    <div className= "form">
        <h2> Add Journal Entry </h2>        
        <form onSubmit={handleSubmit}>
            Title:
            <input name="title" class="form-title" value={userSubmit.title} onChange={handleChange} placeholder='Title: '/><br/><br/>
            Content:
            <input name="content" class="form-content" value={userSubmit.content} onChange={handleChange} placeholder="Content:" /><br/><br/>
            <select  name="plant_id" onChange={handleChange}>
                {plants.map(plant => <option value={plant.id} key={plant.id}> {plant.common_name}</option>)}
            </select>
            
            <input className="form-button" type="submit" value="Submit"/>
        </form>   
</div>
  )
}

export default NewJournalEntry