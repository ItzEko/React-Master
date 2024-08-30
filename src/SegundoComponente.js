import React from 'react'

export const SegundoComponente = () => {

    const libros = ["Libro1", "Libro2", "Libro3", "Libro4"];

    return (
        <div className='SegundoComponente'>
            <h1>Listado de libros</h1>
           {/* rrecorer todos los elementos con instrucciones de js  */}
           <ul>
            {
                libros.map((libro, indice) =>{
                    return <li key={indice}>{libro}</li>;
                })
            }
           </ul>
        </div>
    )
}
