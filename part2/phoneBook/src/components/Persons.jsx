const Person = ( { name, number, handleDelete } ) => (
    <tr>
        <td>{name}</td>
        <td>{number}</td>
        <td>
            <button onClick={ handleDelete } >Delete</button>
        </td>
    </tr>
)

const Persons = ( { persons, handleDelete } ) => (
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Número</th>
            </tr>
        </thead>
        <tbody>
            {persons.map(person => 
            (
                <Person 
                    key={person.id} 
                    name={person.name} 
                    number={person.number} 
                    handleDelete={() => handleDelete(person.id)}
                />
            )
            )}
        </tbody>
    </table>
)


export default Persons