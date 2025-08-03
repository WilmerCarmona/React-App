import React from "react";

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
