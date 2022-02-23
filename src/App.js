import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Signup from './components/Signup';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Signup" element={<Signup />}></Route>
        <Route exact path="/Cart" element={<Cart />}></Route>
        <Route exact path="/Checkout" element={<Checkout />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
        <Route exact path="/Product" element={<Product />}></Route>
        <Route exact path="/Product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
