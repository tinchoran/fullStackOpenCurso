const Display = ( { content } ) => {

    if(content.length === 0){
        return (
            <div>
                Busque un país para empezar
            </div>
        )
    }

    if(content.length > 10){
        return (
            <div>
                Demasiadas coincidencias. Apliqué un filtro más específico
            </div>
        )
    }

    if(content.length > 1 && content.length <= 10){
        return (
            <div>
                <ul>
                    { content.map( country => <li key={country.cca3}>{country.name.official}</li> ) }
                </ul>
            </div>
        )
    }

    if(content.length === 1){
        const country = content[0];
        return (
            <div>
                <h2>{country.name.official}</h2>
                <h2>Stats</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{  (!country.capital)?"No tiene":country.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{country.area}</td>
                        </tr>
                        <tr>
                            <td>Population</td>
                            <td>{country.population}</td>
                        </tr>
                    </tbody>
                </table>
                <h2>Languages</h2>
                { (!country.languages)
                    ?<div>Información de lenguajes no disponible</div>
                    :<ul>
                    { Object.entries(country.languages).map( ([key, value]) => <li key={key}>{value}</li>) }
                    </ul> 
                }

                <h2>Flag</h2>
                <picture>
                    <img src={country.flags.svg} alt={`Bandera de ${country.name.common || country.name.official}`} />
                </picture>
            </div>
        )
    }

};



export default Display