
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
     <NavBar/>
    <ItemListContainer msg="Bienvenidos a Mundo Celualar!!"/>
    </div>
  )
}

export default App;
