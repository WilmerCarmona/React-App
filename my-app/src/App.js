import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1 className="tit-testimonio">Reseñas de las personas</h1>
        <Testimonio
          nombre="Billie Eilish"
          pais="California"
          imagen=""
          cargo="Cantante y compositor"
          empresa="OpenMusic"
          texto=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                  Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at 
                  nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec 
                  tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla."
        />
      </div>
    </div>
  );
}

export default App;
