import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!persons.some(person => person.name.toLowerCase() === newName.toLowerCase())){
        const newPerson = {
          name: newName
        };
        setPersons(persons.concat(newPerson));
        setNewName("");
    } else alert(`${newName} is already on the list!`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName} placeholder='Introduce un nombre...' />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name} >{person.name}</li>)}
      </ul>

      <div>debug: {newName}</div>
    </div>
  )
}

export default App