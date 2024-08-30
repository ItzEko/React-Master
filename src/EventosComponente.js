import React from 'react';

export const EventosComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("Has dado click al boton " + nombre);
    }

    function hasDadoDobleClick(e) {
        alert("Has dado doble click al boton");
    }

    const HasEntrado = (e, accion) => {
        alert(`Has ${accion} entrado a la caja`);
    };

    // const EstasDentro = e =>{
    //     alert('Estas dentro del input mete tu nombre');
    // }  
    return (
        <div>
            <h1>EventosComponente</h1>

            <p>
                {/* Evento click */}
                {/*vamos a pasar un parametro vinculada  a un evento */}
                <button onClick={e => hasDadoClick(e, "Itzel")}>
                    Dame Click
                </button>
            </p>

            <p>
                {/* Evento doble click */}
                <button onDoubleClick={hasDadoDobleClick}>Dame 2 click</button>
            </p>

            {/* Evento onMouseEnter y onMouseLeave */}
            <div
                id="caja"
                onMouseEnter={e => HasEntrado(e, "entrado")}
                onMouseLeave={e => HasEntrado(e, "salido")}
            >
                <p>Pasa por la caja</p>
            </div>
            {/* <p>
                <input type="text" 
                 onFocus={EstasDentro}
                
                 />
            </p> */}
        </div>
    );
}
