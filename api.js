import { API_URL } from '/config';

const getMealName = async (mealName) => {
    const response = await fetch(`${API_URL}search.php?s=${mealName}`);
    return await response.json();
};

const getAllCategories = async () => {
    const response = await fetch(`${API_URL}categories.php`);
    return await response.json();
};

const getAllFilterCategories = async (filterName) => {
    const response = await fetch(`${API_URL}filter.php?c=${filterName}`);
    return await response.json();
};

export { getMealName, getAllCategories, getAllFilterCategories };


/* силка ключ переменая по кому запросу что получить нужно сервера  */

