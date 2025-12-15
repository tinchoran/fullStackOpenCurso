const Filter = ( { handleFilterChange, value } ) => (
    <form>
        <div>Filter shown with <input onChange={ handleFilterChange } value={value} /></div>
    </form>
)

export default Filter