import "./App.css";
import Boton from "./componentes/Boton";
import logoNav from "./imagenes/logoNav.png";

function App() {
  return (
    <div className="App">
      <div class="logo-contenedor">
        <img className="logo" src={logoNav} alt="Logo" />
      </div>
      <div className="contenedor-principal">
        <Boton texto="Clic" botonClic={true} manejarClic={hola} />
      </div>
    </div>
  );
}

export default App;
