import React from 'react'

const Country = ({ name, country }) => {
    return (
        <li>{name}
        <button key={name} onClick={()=>handleClick(country)}>Show</button>
        </li>
    )
}

const handleClick = ( country ) => {
    console.log(country)
    return (
        <div>
            <CountryDescription country={country}/>
        </div>
    )
}

const Language = ({ language }) => {
    return (
        <li>{language}</li>
    )
}

const CountryDescription = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Languages</h2>
                <ul>
                    {country.languages.map(countryLang =>
                    <Language key={countryLang.name} language={countryLang.name} />
                    )}
                </ul>
            <img alt='Country flag' src={country.flag} width="400" />
        </div>
    )
}

const Countries = ({ countriesList }) => {
    return (
        <div>
            {
                countriesList.length > 10 ?
                <p>Too many matches, be more specific</p>
                :
                countriesList.length === 1 ?
                <CountryDescription country={countriesList[0]} />
                :
                <ul>
                    {countriesList.map(country =>
                    <Country key={country.name} name={country.name} country={country}/>
                    )}
                </ul>
            }
        </div>
    )
}

export default Countries