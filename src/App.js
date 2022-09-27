import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "./Components/CartContainer/CartContainer";
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
          <Route path="/categoria/:cat" element={<ItemListContainer/>}/>
      
          <Route path="/cart" element={<CartContainer/>}/>
         </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
