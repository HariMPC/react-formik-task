// import './App.css';
import Navbar from './Components/Home/header';
import { Route, Routes} from "react-router-dom";
import Data from './Components/Data/data';
import BookList from './Components/Books/listbooks';
import AddBook from './Components/Form/addbooks';
import Editbook from './Components/Form/editbooks';
function App() {
  return (
    <div className="App">
      <Data>
        <Navbar/>
      <Routes>
        <Route  exact path="/view" element={<BookList/>}/>
        <Route  exact path="/add" element={<AddBook/>}/>
        <Route  exact path="/edit" element={<Editbook/>}/>
      </Routes>
      
      </Data>
    
    </div>
  );
}

export default App;
