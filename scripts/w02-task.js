/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
const fullName = "Felix Buadu";
const currentYear = new Date().getFullYear();
const profilePicture = "images/pass (1).jpg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */


nameElement.innerHTML = '<strong>Felix Buadu</strong>';
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'This is ${Felix Buadu}. He is a professor at BYU-Idaho.' );


/* Step 5 - Array */
let favoritefoods = ["Pizza", "Ice cream", "Tacos", "Sushi", "Pasta", "Jollof", "fruit salad"];


let newfood = 'biscuits';
let fruitfood = 'banana';

//Remove the first element in the favorite foods.
favoritefoods.shift(fruitfood);

favoritefoods.push(newfood);
foodElement.innerHTML += favoritefoods;
foodElement.innerHTML += favoritefoods;


//Remove the last element in the favorite foods
favoritefoods.pop(favoritefoods);



