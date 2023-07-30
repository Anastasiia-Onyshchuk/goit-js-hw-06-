const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const markup = ingredients.map((ingredient) => {
  const listElement = document.createElement('li')
  listElement.classList.add('item');
  listElement.textContent = ingredient;
  return listElement;
});
console.log(markup);
const ulElement = document.querySelector('ul');
ulElement.append(...markup);
