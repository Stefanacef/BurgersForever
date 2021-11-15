import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import { GlobalStyle } from "./globalStyles";
import Products from "./components/Products";
import { productData ,productDataTwo } from "./components/Products/data";
import Featured from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite " data={productData} />
      <Featured />
      <Products heading="Sweet Treats for You " data={productDataTwo} />
       <Footer/>
    </Router>
  );
}

export default App;
