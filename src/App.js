import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';


function App() {

  // ficha es el objeto a pasar como prop al 3er componente
  const ficha={
    puesto:"Esclavo de Itzel para siempre",
    altura:"1.70cm",
    gustos:"Itzel"
  };



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TERESA ITZEL EN REACT
        </p>
        {/* CARGAR NUESTRO COMPONENTE */}
        <div className='Componentes'>
        <hr/>
        <EventosComponente></EventosComponente>
        
        <hr/>
          <MiComponente></MiComponente>
          <hr/>
          <SegundoComponente></SegundoComponente>
          
          <TercerComponente 
          // nombre="Angel" 
          // apellido="Castillo"
          // para pasar una variable debe de estar entre llaves
          ficha1={ficha}
          />
        </div>
      </header>

    </div>
  );
}

export default App;
