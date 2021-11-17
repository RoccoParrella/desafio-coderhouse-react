import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer';

function App() {
  return (
    <>
    
      <NavBar />
      <BrowserRouter>
      <div className="divMain">
        <Routes>
        <Route path="/" element={<ItemListContainer  />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
