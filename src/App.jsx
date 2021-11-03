import Navbar from "./components/navbar/Navbar";
import React from 'react';
import "./app.scss"
import { HashRouter as Router } from "react-router-dom";
import { useState } from 'react';
import ProductDropDown from "./components/productDropDown/ProductDropDown";
import Hero from "./components/hero/Hero";
import Info from "./components/info/Info";
import Details from "./components/details/Details";
import Partners from "./components/partners/Partners";
import Footer from "./components/footer/Footer";
import BurgerMenu from "./components/burgerMenu/BurgerMenu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} burgerMenuOpen={burgerMenuOpen} setBurgerMenuOpen={setBurgerMenuOpen} />
        <ProductDropDown menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <BurgerMenu burgerMenuOpen={burgerMenuOpen} setBurgerMenuOpen={setBurgerMenuOpen} />
        <Hero />
        <Info />
        <Details />
        <Partners />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
