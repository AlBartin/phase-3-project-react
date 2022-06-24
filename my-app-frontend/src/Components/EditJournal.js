import React, {useState} from 'react'

function EditJournal( { editJournal, journal }) {

     const [userSubmit, setUserSubmit] = useState({})
    
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const config = {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userSubmit)
        }

        fetch(`http://localhost:9292/journal/${journal.id}`, config)
        .then(resp => resp.json())
        .then((updatedJournal) => {editJournal(updatedJournal)})
    }

    const handleChange = (event) => {
        
        const name = event.target.name
        const value = event.target.value

        setUserSubmit(values => ({...values, [name]:value}))
    }

    console.log(userSubmit)

  return (
    <div className= "form">
        <h2> Edit Journal Entry </h2>        
        <form onSubmit={handleSubmit} onChange={handleChange}>
            Title:
            <textarea name="title" class="form-title" placeholder='Title: '/><br/><br/>
            Content:
            <textarea name="content" class="form-content" placeholder="Content:" /><br/><br/>
            
            <input className="form-button" type="submit"/>
        </form>
            {/* <form>
            Title:
            <input name="title" class="form-title" placeholder='Title: '/><br/><br/>
            Content:
            <input name="content" class="form-content" placeholder="Content:" /><br/><br/>
            
            <input className="form-button" type="submit" value="Submit"/>  
            </form> */}
</div>
  )
}

export default EditJournal