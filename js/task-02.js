/*
  Напиши скрипт, который для каждого элемента массива ingredients:

  1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
  2. Добавит название ингредиента как его текстовое содержимое.
  3. Добавит элементу класс item.
  4. После чего вставит все <li> за одну операцию в список ul#ingredients.   
*/

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

for (const ingredient of ingredients) {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;
  liRef.classList.add('item');

  const element = document.querySelector('#ingredients');
  element.append(liRef);

  console.log(liRef);
}
