import React from 'react';
import Pelicula from '../components/Peliculas';

function TiraPeliculas() {
    return (
        <div>
            <Pelicula rating="8.8" titulo="Toy Story"/>
            <Pelicula rating="6.8" titulo="Malefica"/>
            <Pelicula rating="5" titulo="Spider Man"/>
            <Pelicula rating="7.8" titulo="Alicia en el pais de las Maravillas"/>
            <Pelicula rating="9" titulo="Encanto"/>
        </div>
    )
}

export default TiraPeliculas;