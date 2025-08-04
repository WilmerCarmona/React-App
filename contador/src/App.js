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
        <Boton texto="clic" botonClic={true} manejarClic={} />
        <Boton texto="reiniciar" botonClic={false} manejarClic={} />
      </div>
    </div>
  );
}

export default App;
