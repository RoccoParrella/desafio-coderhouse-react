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
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
