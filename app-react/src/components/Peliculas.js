import React from 'react';

//componente que tiene titulo y rating
function Pelicula(props) {
    
    let generos = ["Accion", "Drama"];
    return(
        <div>
            <h2 className="TituloPeli">{ props.titulo }</h2>
            <p>Rating de Pelicula: { props.rating }</p>
            <h3>Generos de la Pelicula</h3>
            <ul>
                { generos.map( genero => <li>{ genero}</li>)}
            </ul>
        </div>
    )
}

export default Pelicula;