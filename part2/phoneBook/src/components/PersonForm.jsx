const PersonForm = ( { handleSubmit, handleNameChange, nameValue, handleNumberChange, numberValue } ) => (
    <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={nameValue} placeholder='Introduce un nombre...' />
        </div>
        <div>
          number: <input  onChange={handleNumberChange} value={numberValue}  placeholder='Ingrese un número de teléfono' />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
)
    
export default PersonForm