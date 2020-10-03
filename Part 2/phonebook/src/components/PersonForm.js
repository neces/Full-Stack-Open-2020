import React from 'react'

const PersonForm = ({ newName, newNumber, addPerson, handleNameChange, handleNumberChange }) => {
    return (
        <form onSubmit={addPerson}>
        <div>
          Name <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          Number <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <button type="submit">Add</button>
      </form>
    )
  }
  
  export default PersonForm