import "./App.css";
import Boton from "./componentes/Boton";
import logoNav from "./imagenes/logoNav.png";

function App() {
  const presionarClic = () => {
    console.log("Click");
  };
  const reiniciarContador = () => {
    console.log("Reiniciar");
  };
  return (
    <div className="App">
      <div class="logo-contenedor">
        <img className="logo" src={logoNav} alt="Logo" />
      </div>
      <div className="contenedor-principal">
        <Contador />
        <Boton texto="Click" botonClic={true} manejarClic={presionarClic} />
        <Boton
          texto="Reiniciar"
          botonClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
