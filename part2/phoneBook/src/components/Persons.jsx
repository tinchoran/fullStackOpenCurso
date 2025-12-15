const Person = ( { name, number } ) => (
    <tr>
        <td>{name}</td>
        <td>{number}</td>
    </tr>
)

const Persons = ( { persons } ) => (
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Número</th>
            </tr>
        </thead>
        <tbody>
            {persons.map(person => <Person key={person.id} name={person.name} number={person.number} />)}
        </tbody>
    </table>
)


export default Persons