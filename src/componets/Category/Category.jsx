import React from "react";
import { Link } from "react-router-dom";

const Category = ({ catalog }) => {


  return (
    <section className="category">
      <ul className="category__items">
        {catalog.map((item, index) => (
          <li key={index} className="category__item">
            <span className="category__name">{item.strCategory}</span>
            <img
              className="category__img"
              src={item.strCategoryThumb}
              alt={item.strCategory}
            />
            <p className="category__text">
              {item.strCategoryDescription.slice(0, 60)}...
            </p>
            <Link to={`/${item.strCategory}`}> 
              <button className="category__btn btn">watch category</button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Category;
