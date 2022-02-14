import React from 'react';
import Pelicula from '../components/Peliculas';

function TiraPeliculas() {
    return (
        <div>
            {/*Se usan 5 veces el componente de pelicula y se le añaden valores a las propiedades*/}
            <Pelicula generos = { ["Aventura", "Animacion"]} rating={8.8} titulo="Toy Story"/>
            <Pelicula generos = { ["Aventura", "Animacion"]} rating={6.8} titulo="Malefica"/>
            <Pelicula generos = { ["Aventura", "Accion"]} rating={5} titulo="Spider Man"/>
            <Pelicula generos = { ["Aventura", "Animacion", "Accion"]}rating={7.8} titulo="Alicia en el pais de las Maravillas"/>
            <Pelicula generos = { ["Comedia", "Animacion"]}rating={9} titulo="Encanto"/>
        </div>
    )
}

export default TiraPeliculas;