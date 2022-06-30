import {Routes, Route} from 'react-router-dom';
import './SCSS/index.css'; 
import './App.css';
import Navbar from './component/Header/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Product from './component/Product/product';
import Home from './component/Product/Home';
import ShoppingCart from './component/ShoppingCart/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/products/:id" element = {<Product/>}/>
          <Route exact path = "/cart" element = {<ShoppingCart/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
