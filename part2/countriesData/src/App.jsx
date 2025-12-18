import { useState, useEffect } from 'react'

import Display from './services/components/Display';

import countriesService from './services/countriesService';

function App() {

  const [ searchedCountry, setSearchedCountry ] = useState("");
  const [ allCountries, setAllCountries ] = useState([]);
  const [ filteredCountries, setFilteredCountries ] = useState([])
  const [ inputDisabled, setInputDisable ] = useState(true)

  useEffect(() => {

    countriesService
      .getAll()
      .then(data => {
        setInputDisable(!inputDisabled);
        setAllCountries(data);
      })
  
  }, [])

  const handleChange = event => {
    const query = event.target.value;
    setSearchedCountry(query)

    if(query === ""){
      setFilteredCountries([])
      return;
    }

    const result = allCountries.filter(country => country.name.official.toLowerCase().includes(query.toLowerCase()));
    setFilteredCountries(result);

  }

  const handleCountryButtonClick = (id) => {

    // Encontrar el país solicitado
    const countryFiltered = allCountries.find(country => country.cca3 === id);

    // Cambiar el estado de filtered countries
    setFilteredCountries( [ countryFiltered ] )

    // Cambiar el estado de searchedCountry (para que aparezca el nombre completo del país en el input como si el usuario lo hubiera escrito él mismo)
    setSearchedCountry( countryFiltered.name.official )

  }

  return (
    <>
      <form>
        <div>
          Find countries
          <input 
            type="text" 
            onChange={handleChange} 
            value={searchedCountry || ""} 
            disabled={inputDisabled}
          />  
        </div>
      </form>
      <Display content={filteredCountries} handleButtonClick={ handleCountryButtonClick }/>
    </>
  )
}

export default App
