/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}
//Function declaration
function addNumbers() {
    let addNumber1 = Number(document.querySelector('number1').value);
    let addNumber2 = Number(document.querySelector('number2').value);
    document.querySelector('sum').value = add(addNumber1, addNumber2);
}
document.querySelector('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtraction = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function() {
    let subtract1 = Number(document.querySelector('number1').value);
    let subtract2 = Number(document.querySelector('number2').value);
    document.querySelector('difference').value = subtract(subtract1, subtract2);
}
document.querySelector('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

//arrow function
const multiplyNumber = () => {
    const factor1 = Number(document.getElementById('factor1').value);
    const factor2 = Number(document.getElementById('factor2').value);
    document.getElementById('prpoduct').value = multiply(factor1, factor2);
};
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (x, y) => x / y;

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient;
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function getTotal() {
    //input
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    //processing
    if(document.getElementById("member").checked){
        total = subtotal - subtotal * 0.2 // 20% discount
    }

    //output
    document.getElementById("total").textContent = total.toFixed(2);
}
document.getElementsById('getTotal').addEventListener("click", getTotal);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = Array.from({length: 13 }, (_, index) => index + 1);

document.getElementById('array').innerText = numberArray.toString();
/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);

document.getElementById('odds').innerText = Array.toString();
/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
