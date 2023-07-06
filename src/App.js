import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import Products from './Components/Products';
import Product from './Components/Product';
import Cart from './Components/Cart';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />}></Route>
        <Route path='/Products' element={<Products />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/products/:id' element={<Product />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
