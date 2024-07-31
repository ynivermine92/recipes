import React, { useState, useEffect } from "react";

import { getAllFilterCategories } from "/api";
import { useParams, useNavigate,Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
const Product = () => {
  const { categoryId } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllFilterCategories(categoryId).then((data) => setMeals(data.meals));
  }, [categoryId]);


  return (
    <section className="product">
         <BackButton onClick={() => navigate(-1)} />
      <ul className="product__items">
        {meals.map((item, index) => (
          <li key={index} className="product__item">
            <span className="product__name">{item.strMeal}</span>
            <img
              className="product__img"
              src={item.strMealThumb}
              alt={item.strMealThumb}
            />
            <Link to={`/${categoryId}/${item.strMeal}`}>
              <button className="btn product__btn-info">Product Info</button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Product;
