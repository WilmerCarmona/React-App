import "./App.css";
import logoNav from "./imagenes/logoNav.png";

function App() {
  return (
    <div className="App">
      <div class="logo-contenedor">
        <img className="logo" src={logoNav} alt="Logo" />
      </div>
      <div className="contenedor-principal"></div>
    </div>
  );
}

export default App;
