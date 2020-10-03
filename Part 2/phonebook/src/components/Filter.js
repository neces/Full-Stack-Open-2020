import React from 'react'

const Filter = ({ search, handleChange }) => {
    return (
        <div> Search <input value={search} onChange={handleChange}/></div>
    )
  }
  
  export default Filter