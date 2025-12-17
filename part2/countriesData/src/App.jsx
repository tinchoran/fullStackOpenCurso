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
      <Display content={filteredCountries} />
    </>
  )
}

export default App
