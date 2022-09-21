import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
// import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer msg="Bienvenidos a Mundo Celular!!" /> */}
     <ItemDetailContainer/>
    </div>
  );
}

export default App;
