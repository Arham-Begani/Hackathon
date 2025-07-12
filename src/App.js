import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { useState } from 'react';
import UserContext from './components/UserContext';
import ProductPage from './pages/ProductPage';

function App() {
  const [Product, setProduct] = useState(null);

  return (
    <UserContext.Provider value={{Product, setProduct}}>

    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
    </HashRouter>

    </UserContext.Provider>
  )
}

export default App;
