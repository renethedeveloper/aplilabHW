import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 

import Home from './pages/home';
import Button from './pages/Button';
import About from './pages/about';
import DisplayItems from './pages/displayItems';
import Navbar from './pages/navbar';
import Sidebar from './pages/sidebar';

function App() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    console.log("this worked");
    axios("https://dummyjson.com/products")
      .then((response) => {
        let array = response.data.products;
        console.log(response.data);
        setProducts(array);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
    
    <Navbar/>
    <Sidebar/>
    <div>
  {products.map((product) => (
    <div key={product.id}>
      <h2>{product.title}</h2>
      <img src={product.images[0]} alt="" />
      <p>{product.description}</p>
      <h2>Price only $ {product.price}</h2>
    </div>
  ))}
</div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DisplayItems" element={<DisplayItems/>} />
        <Route path="/button" element={<Button />} />
        <Route path="/about" element={<About />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path = "/sidebar" element={<Sidebar/>}/>
      </Routes>
    </>
  );
}

export default App;

