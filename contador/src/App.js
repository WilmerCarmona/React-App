import "./App.css";
import Boton from "./componentes/Boton";
import logoNav from "./imagenes/logoNav.png";

function App() {
  const manejarClic = () => {
    console.log('Click');
  }
  const reiniciarContador = () =>{
    console.log('Reiniciar');
  }
  return (
    <div className="App">
      <div class="logo-contenedor">
        <img className="logo" src={logoNav} alt="Logo" />
      </div>
      <div className="contenedor-principal">
        <Boton texto="Click" botonClic={true} manejarClic={} />
        <Boton texto="Reiniciar" botonClic={false} manejarClic={} />
      </div>
    </div>
  );
}

export default App;
