import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { getAllCategories} from "/api";
import Category from "../Category/Category";
import Product from "../Product/Product";
import Description from "../Description/Description";



const Food = () => {
  const [catalog, setCatalog] = useState([]);


  useEffect(() => {
    getAllCategories().then((data) => setCatalog(data.categories));
  }, []);
  
  return (
    <Router>
    <section className="food">
      <div className="container">
        <Routes>
        <Route path="/" element={<Category catalog={catalog} />} />
            <Route path="/:categoryId" element={<Product />} />
            <Route path="/:categoryId/:name" element={<Description />} />
        </Routes>
      </div>
    </section>
  </Router>
  );
};

export default Food;
