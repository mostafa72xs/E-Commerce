import './App.css';
import Home from './pages/Home';
import { Route , Routes } from 'react-router-dom'
import Cart from './pages/Cart';
import  {CartProvider } from 'react-use-cart'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Wishlist from './pages/Wishlist';
import About from './pages/About'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import ProductDetails from './pages/ProductDetails';
import { ProProvider } from './components/context/ProductsContext.js';
import {AuthProvider}  from './components/context/AuthProvider.js'
import Profile from './pages/Profile.js'
import Error from './pages/error.js';
import Head from './head.js'


function App() {
  return (
    <div className="App">
      <Head />
      <AuthProvider>
      <ProProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} /> 
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/About" element={<About />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="*" element={<Error />}/>
      </Routes>
      </CartProvider>
      </ProProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
