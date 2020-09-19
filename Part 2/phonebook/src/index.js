import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Person = ({ name, number }) => {
  return (
  <li>{name} {number}</li>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

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
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
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
  
  return (
    <div>
      <h2>Phonebook</h2>
      <h2>Add a new person</h2>
      <form onSubmit={addPerson}>
        <div>
          Name <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          Number <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
        <ul>
        {persons.map(person =>
          <Person key={person.name} name={person.name} number={person.number} />
        )}
        </ul>
    </div>
  )
}

export default App
ReactDOM.render(
  <App />,
  document.getElementById('root')
)