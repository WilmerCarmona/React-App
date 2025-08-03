import React from "react";

function Boton({ texto, botonClic }) {
  return (
    <button className={botonClic ? "BotonClick" : "BotonReiniciar"}>
      {texto}
    </button>
  );
}

export default Boton;
