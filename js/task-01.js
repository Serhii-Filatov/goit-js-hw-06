/* 
    В HTML есть список категорий ul#categories
    Напиши скрипт который:

    1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
    2. Для каждого элемента li.item в списке ul#categories, 
        найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
        и количество элементов в категории (всех вложенных в него <li>).

    В результате, в консоли будут выведены такие сообщения.

    Number of categories: 3

    Category: Animals
    Elements: 4

    Category: Products
    Elements: 3

    Category: Technologies
    Elements: 5
 */

const numberOfCategories = document.querySelectorAll('li.item').length;
console.log(`Number of categories: ${numberOfCategories}`);

const categories = document.querySelectorAll('li.item');

for (const categorie of categories) {
  const categorieTitle = categorie.querySelector('li.item h2');
  console.log(`\nCategory: ${categorieTitle.textContent}`);

  const categorieEl = categorie.querySelectorAll('li.item li').length;
  console.log(`Elements: ${categorieEl}`);
}
