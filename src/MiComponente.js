//CREACION DE UN COMPONENTE 
//SIEMPRE DEBEN DE COMENZAR CON MAYUSA

//IMPORTAR MODULOS DE REACT / DEPENDENCIAS
import React from 'react';


//FUNCION DEL COMPONENTE
const MiComponente = () => {


    // creamos un objeto json
    let usuario = {
        nombre: 'Itzel',
        apellido: 'Guzman',
        web: "ww.itzeko01.com"

    }
        return (
            <div className="itzel">
                <hr/>
                <h2>Componente Creado</h2>
                <h3>Datos del usuario</h3>
                <ul>
                    <li>Nombre : {usuario.nombre}</li>
                    <li>Web : {usuario.web}</li>
                    <li>Apellido : {usuario.apellido}</li>
                </ul>
                <ul>
                    <li>React</li>
                    <li>Angular</li>
                </ul>
            </div>
        );
        
    };


//EXPORT
export default MiComponente;
