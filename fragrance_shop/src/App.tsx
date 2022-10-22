import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Route, Routes,
} from "react-router-dom";
import './App.css';
import './Mobile_Styles.scss';
import Home from "./pages/Home";
import {Login} from "./pages/Login";
import {Blog} from "./pages/Blog";
import {Collection} from "./pages/Collection";
import {Product} from "./pages/Product";
import {SideMenu} from "./components/SideMenu";
import {Footer} from "./components/Footer";
import Announcement from "./sections/Announcement";
import Header from "./components/Header";
import {CartService} from "./services/CartService";
import {IProduct} from "./interfaces/IProduct";
import {ProductsService} from "./services/ProductsService";

function App() {
    const [productsInCart, setCartProducts] = useState(0);

    useEffect(() => {
        const getCart = () => {
            let count = 0;
            CartService.cart.forEach(elem => {
                count += elem.quantity;
            })
            setCartProducts(count);
        }
        getCart();
    });

  return (
    <div className="App">
      <Announcement />
      <Header numberOfItems={productsInCart}/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/blog" element={<Blog />}>
          </Route>
          <Route path="/collection" element={<Collection />}>
          </Route>
          <Route path="/products/:id" element={<Product />}>
          </Route>
        </Routes>
      </Router>
      <Footer />
      <SideMenu />
    </div>
  );
}

export default App;
