import React from 'react';
import PropTypes from 'prop-types'

// pasar propiedades o informacion entre los componentes
export const TercerComponente = ({nombre, apellido, ficha1}) => {

    return (
    <div>
        <hr/>
       <h1>Comunicacion entre componentes</h1>
       <ul>
        <li>{nombre}</li>
        <li>{apellido}</li>
        <li>{ficha1.altura}</li>
        <li>Gustos: {ficha1.gustos}</li>
       </ul>
       </div>
  )
}
// cuando se utiliza la propiedad en el componente se empieza por minuscula y 
// para validar con mayuscula 
TercerComponente.propTypes={
    // el isRequired Se utiliza cuando los datos deben si o si estar ahi
    nombre:PropTypes.string.isRequired,
    apellido:PropTypes.string,
    ficha1:PropTypes.object
}
TercerComponente.defaultProps = {
    nombre:"Teresa Itzel ",
    apellido:"Guzman Tellez"
}