const categoryRef = document.querySelector('#categories');
const categoryItems= categoryRef.querySelectorAll('li.item');
console.log('Number of categories:',categoryItems.length);


categoryItems.forEach(function (element) {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
});


 