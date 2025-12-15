import { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState( [ { name: 'Arto Hellas', number: '341-585-1661' } ] );
  const [ newNumber, setNewNumber ] = useState(''); 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!persons.some(person => person.name.toLowerCase() === newName.toLowerCase())){
        const newPerson = {
          name: newName,
          number: newNumber
        };
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewNumber("");
    } else alert(`${newName} is already on the list!`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} placeholder='Introduce un nombre...' />
        </div>
        <div>
          number: <input  onChange={handleNumberChange} value={newNumber}  placeholder='Ingrese un número de teléfono' />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name} >{person.name} {person.number} </li>)}
      </ul>
    </div>
  )
}

export default App