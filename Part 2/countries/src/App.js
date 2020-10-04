import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => {
  const [ countries, setCountries ] = useState([]) 
  const [ search, setSearch ] = useState('')
  const [ searchDisplay, setSearchDisplay ] = useState(countries)

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  const handleChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value) // set state is asynchronous, so the value of search will be one letter behind

    let s = event.target.value // save as new value, so it compares the correct output
    if (s !== "") {
      let newList = countries.filter(country => country.name.toLowerCase().includes(s.toLowerCase()))
      setSearchDisplay(newList)
    }
    else {
      setSearchDisplay(countries)
    }
  }
  console.log('render', searchDisplay.length, 'countries')
  
  return (
    <div>
      <div> Find countries <input value={search} onChange={handleChange}/></div>
      {/* <ul>
        {searchDisplay.map(country =>
          <Country key={searchDisplay.callingCodes} searchDisplay={searchDisplay} />
        )}
      </ul> */}
    </div>
  )
}

export default App