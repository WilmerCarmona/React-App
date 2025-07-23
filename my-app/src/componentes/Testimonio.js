import "../estilos/Testimonio.css";
function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/testimonio-Billie.jpg")}
        alt="imagenBillie"
      />
      <div className="contenedor-p-testimonio">
        <p className="nombre-testimonio">Billie Eilish</p>
        <p className="cargo-testimonio">Cantante</p>
        <p className="texto-testimonio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla.
        </p>
      </div>
    </div>
  );
}

export default Testimonio;
