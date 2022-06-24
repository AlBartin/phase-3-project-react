import React from 'react'
import JournalContainer from './JournalContainer'
import NewJournalEntry from './NewJournalEntry'


function Journal({ journals, plants, addJournal, deleteJournal, editJournal }) {


    const journalDisplay = journals.map((journal) => <JournalContainer journal={journal} key={journal.id} plant={plants} addJournal={addJournal} deleteJournal={deleteJournal} editJournal={editJournal}/>)
  return (
    <div>
         <NewJournalEntry addJournal={addJournal} plants={plants}/>
        {journalDisplay}
    </div>
  )
}

export default Journal