function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/testimonio-Billie.jpg")}
        alt="imagenBillie"
      />
      <div clasName="contenedor-p-testimonio">
        <p className="nombre-testimonio">Billie Eilish</p>
        <p classname="cargo-testimonio">Cantante</p>
        <p className="texto-testimonio">
          Me Gusta esta pagina, está bien diseñada
        </p>
      </div>
    </div>
  );
}

export default Testimonio;
