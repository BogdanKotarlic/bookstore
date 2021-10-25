import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useState } from "react";
import Home from './Components/Home';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import './styles.css';

function App() {
  return (
    <>  
      <Menu />
      <Home />
      <Footer />
    </>
  );
}

export default App;
