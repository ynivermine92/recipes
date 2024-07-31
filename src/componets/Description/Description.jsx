import React, { useState, useEffect } from "react";
import { getMealName } from "/api";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../BackButton/BackButton";

const Description = () => {
  const { name } = useParams();
  const [descriptionName, setDescriptionName] = useState([]);
  const [recipeItems, setRecipeItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Загрузка данных о блюде и обработка ингредиентов
    getMealName(name).then((data) => {
      if (data.meals) {
        setDescriptionName(data.meals);
        const ingredients = data.meals.flatMap((item) =>
          Object.keys(item)
            .filter((key) => key.startsWith("strIngredient") && item[key])
            .map((key) => item[key])
        );
        setRecipeItems(ingredients);
      }
    });
  }, [name]);

  return (
    <section className="description">
      <BackButton onClick={() => navigate(-1)} />
      {descriptionName.map((item, index) => (
        <div key={index} className="description__wrapper">
          <img className="description__image" src={item.strMealThumb} alt="image" />
          <h1 className="description__title">{item.strMeal}</h1>
          <p className="description__text">{item.strInstructions}</p>
        </div>
      ))}
      <ul className="description__items">
        {recipeItems.map((item, index) => (
          <li className="description__item" key={index}>
            Ingredient {index + 1}: {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Description;
