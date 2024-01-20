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
let favfoods = ["Pizza", "Ice cream", "Tacos", "Sushi", "Pasta", "Jollof", "fruit salad"];

foodElement.innerHTML = favfoods;
let newfood = 'biscuits';

//Remove the first element in the favorite foods.
favfoods.shift(favfoods);

favfoods.push(newfood);
foodElement.innerHTML += favfoods;

//Remove the last element in the favorite foods
favfoods.pop(favfoods);



