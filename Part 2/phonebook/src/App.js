import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/Calls'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')
  const [ searchDisplay, setSearchDisplay ] = useState(persons)

  useEffect(() => {
      personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
        alert(`${newName} is already added to phonebook`);
        setNewName('')
        setNewNumber('')
    } 
    else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      personService
      .create(nameObject)
      .then(returnedPersons => {
        setPersons(persons.concat(returnedPersons))
        setNewName('')
        setNewNumber('')
      })
    }
  }
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value) // set state is asynchronous, so the value of search will be one letter behind

    let s = event.target.value // save as new value, so it compares the correct output
    if (s !== "") {
      let newList = persons.filter(person => person.name.toLowerCase().includes(s.toLowerCase()))
      setSearchDisplay(newList)
    }
    else {
      setSearchDisplay(persons)
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleChange={handleChange} />

      <h2>Add a new person</h2>
      <PersonForm newName={newName} newNumber={newNumber} addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>
      <Persons persons={search.length < 1 ? persons : searchDisplay}/>
    </div>
  )
}

export default App