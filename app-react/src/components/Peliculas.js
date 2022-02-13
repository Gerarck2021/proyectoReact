import React from 'react';

//componente que tiene titulo y rating
function Pelicula() {
    let rating = 5.8;
    let generos = ["Accion", "Drama"];
    return(
        <div>
            <h2 className="TituloPeli">Titulo de Pelicula</h2>
            <p>Rating de Pelicula: { rating }</p>
            <h3>Generos de la Pelicula</h3>
            <ul>
                { generos.map( genero => <li>{ genero}</li>)}
            </ul>
        </div>
    )
}

export default Pelicula;