import { useState,useEffect } from 'react'

import axios from 'axios';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newNumber, setNewNumber ] = useState(''); 
  const [ newName, setNewName ] = useState('')
  const [ filterValue, setFilterValue ] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data);
      })
  },[])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value)
  }

  const filteredPersons = (filterValue === "")
    ?persons
    :persons.filter( person => person.name.toLowerCase().includes(filterValue.toLowerCase()) );

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!persons.some(person => person.name.toLowerCase() === newName.toLowerCase())){
        const newPerson = {
          name: newName,
          number: newNumber,
          id: persons.length + 1
        };
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewNumber("");
    } else alert(`${newName} is already on the list!`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} value={filterValue} />
      <h3>Add a New</h3>
      <PersonForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
        nameValue={newName}
        numberValue={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />

    </div>
  )
}

export default App