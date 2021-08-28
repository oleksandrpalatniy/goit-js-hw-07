const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulList = document.querySelector('ul')

const elements = ingredients.map(value => {
    const element = document.createElement('li');
    element.textContent = value;
    return element    
})

ulList.append(...elements)
