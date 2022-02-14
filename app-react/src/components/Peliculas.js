import React from 'react';

//depsues de instalado, importamos el prop types
import PropTypes from 'prop-types';
//componente que tiene titulo y rating
function Pelicula(props) {
    
    let listaGeneros;
    if(props.generos != null ) {
        listaGeneros = 
            <ul>
                {/*Se coloca props en generos y una key para que no tenga problemas de renderizar el <li>*/}
                { props.generos.map( (genero, i) => <li key={i + "movie2022"}>{ genero}</li>)}
            </ul>
    } else {
        listaGeneros = "";
    }
    return(
        
        <div>
            {/*Se colocan las props en titulo y rating para agregar datos en otros componentes*/}
            <h2 className="TituloPeli">{ props.titulo }</h2>
            <p>Rating de Pelicula: { props.rating }</p>
            <h3>Generos de la Pelicula</h3>
            <ul>
                {/*Se coloca props en generos y una key para que no tenga problemas de renderizar el <li>*/}
                { listaGeneros }
            </ul>
        </div>
    )
}

Pelicula.defaultProps = {
    rating: 0.0,
    generos: null
}

Pelicula.propTypes = {
    rating: PropTypes.number,
    titulo: PropTypes.string
}

export default Pelicula;