import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemFundasContainer from "./Components/Fundas/ItemFundasContainer";
import ItemCelularesContainer from "./Components/Celulares/ItemCelularesContainer";
import ItemAccesoriosContainer from "./Components/Accesorios/ItemAccesoriosContainer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer />}
          />
          <Route path="/detalle/:id/:cat" element={<ItemDetailContainer />} />
          <Route path="/celular" element={<ItemCelularesContainer/>}/>
          <Route path="/fundas" element={<ItemFundasContainer/>}/>
          <Route path="/accesorio" element={<ItemAccesoriosContainer/>}/>
         </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
