import "../estilos/Testimonio.css";
function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/testimonio-Billie.jpg")}
        alt="imagenBillie"
      />
      <div className="contenedor-p-testimonio">
        <p className="nombre-testimonio">
          {props.nombre} de {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en {props.empresa}
        </p>
        <p className="texto-testimonio">"{props.texto}"</p>
        <p className="texto-fecha">{props.fecha}</p>
      </div>
    </div>
  );
}

export default Testimonio;
