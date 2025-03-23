import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Wishlist from './components/Wishlist';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>
    </>
  )
}

export default App
