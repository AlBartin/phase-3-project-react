import React, {useState, useEffect} from 'react'
import Home from './Home'
import Navbar from './Navbar'
import Learn from './Learn'
import Journal from './Journal'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {


const [plants, setPlants] = useState([])
const [journal, setJournal] = useState([])
const [featuredPlant, setFeaturedPlant] = useState([])

useEffect (() => {fetch ( "http://localhost:9292/learn" )
.then ( (r) => r.json() )
.then ( setPlants )
}, [])

//useEffect grab user endpoint and setState to that user
//new route for this in backend


useEffect (() => {fetch ( "http://localhost:9292/journal" )
.then ( (r) => r.json() )
.then ( data => {setJournal(data)} )
}, [])

function addJournal(newJournal) {
    setJournal([...journal, newJournal])
  }

  const editJournal = (updatedJournal) => {
    const {id} = updatedJournal
    const updatedJournals = journal.filter(journal => journal.id !== id)
    setJournal([...updatedJournals, updatedJournal ])
 }

  function deleteJournal(deletedJournal){
    const updatedJournal = journal.filter( entry => entry.id !== deletedJournal.id)
    setJournal(updatedJournal)
    console.log(updatedJournal)
}

useEffect (() => {fetch ( "http://localhost:9292/home" )
.then ( (r) => r.json() )
.then ( data => {setFeaturedPlant(data)} )
}, [])

  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path="/home" element={<Home plants = {featuredPlant}/>} />
    <Route path="/learn" element={<Learn plants={plants}/>} />
    <Route path="/journal" element={<Journal journals={journal} plants={plants} addJournal={addJournal} deleteJournal={deleteJournal} editJournal={editJournal}/>} />
    </Routes>
    </Router>
    )
}

export default App;
