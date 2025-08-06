import React from "react";
import "../estilos/boton.css";

function Boton({ texto, botonClic, manejarClic }) {
  return (
    <button
      className={botonClic ? "BotonClick" : "BotonReiniciar"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
}

export default Boton;
