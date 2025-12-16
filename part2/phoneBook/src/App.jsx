import { useState,useEffect } from 'react'

import service from './services/personsService';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newNumber, setNewNumber ] = useState(''); 
  const [ newName, setNewName ] = useState('')
  const [ filterValue, setFilterValue ] = useState('');
  const [ successMessage, setSuccessMessage ] = useState(null);
  const [ errorMessage, setErrorMessage ] = useState(null)

  useEffect(() => {
    service.getAll()
      .then(persons => {
        setPersons(persons)
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

    const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

    if(!existingPerson){
      const newPerson = {
        name: newName,
        number: newNumber,
      };
        
      service.createPerson(newPerson)
        .then(addedPerson => {
          setPersons(persons.concat(addedPerson));
          setNewName("");
          setNewNumber("");
          setSuccessMessage(`Se añadio a ${addedPerson.name}`)
          setTimeout(() => {
            setSuccessMessage(null)
          },5000)

        })
        .catch(err => {
          alert("Hubo un error al añadir a la persona")
          console.log(err);
        })

    } else {
      if(window.confirm(`${newName} is already on the Phone Book, replace the old number with the new?`)){
        const personToUpdate = {
          ...existingPerson,
          number: newNumber
        };
        service.updatePerson( personToUpdate )
          .then(updatedPerson => {
            setPersons(persons.map(person => (person.id !== updatedPerson.id)?person:updatedPerson ))
            setSuccessMessage(`Se actualizó el número de ${updatedPerson.name}`)
            setTimeout(() => {
              setSuccessMessage(null)
            },5000)
          })
          .catch(err => {
            setErrorMessage(`Hubo un error al actualizar el número de ${personToUpdate.name}. La persona no existe`);

            setPersons(persons.filter(person => person.id !== personToUpdate.id));

            setTimeout(() => {
              setErrorMessage(null)
            }, 5000);
          })
      }
    }
  }

  const handleDelete = (id) => {
    const personToDelete = persons.find(person => person.id === id);
    if(window.confirm(`Delete ${personToDelete.name}?`)){
      service.deletePerson(id)
        .then(deletedPerson => {
          setPersons(persons.filter(person => person.id !== id));
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add a New</h3>

      <Notification message={successMessage} type={"success"} />
      <Notification message={errorMessage} type={"err"} />

      <PersonForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
        nameValue={newName}
        numberValue={newNumber}
      />
      <h2>Numbers</h2>
      <Filter handleFilterChange={handleFilterChange} value={filterValue} />
      <Persons persons={filteredPersons} handleDelete={handleDelete} />

    </div>
  )
}

export default App