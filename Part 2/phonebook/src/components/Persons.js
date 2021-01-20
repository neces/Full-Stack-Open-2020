import React from 'react'
import personService from '../services/Calls'
import App from '../App'

const Person = ({ name, number, id, deletePerson }) => {
  return (
  <div>
    <li>{name} {number}</li>
    <button key={name} onClick={() => deletePerson(id, name)}>Delete</button>
  </div>
  )
}

const Persons = ({ persons, deletePerson }) => {
    return (
        <ul>
        {persons.map(person =>
          <Person key={person.name} name={person.name} number={person.number} id={person.id} deletePerson={deletePerson}/>
        )}
        </ul>
    )
}
  
  export default Persons