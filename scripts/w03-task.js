/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function addNumbers(add1, add2) {
    return add1 + add2;
}
//Function declaration
function addNumbers() {
    const add1 = parseFloat(document.getElementById('add1').value);
    const add2 = parseFloat(document.getElementById('add2').value);
    const sum = add(add1, add2);
    document.getElementById('sum').innerText = sum;
}
document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtractNumber = function(subtract1, subtract2) {
    return subtract1 - subtract2;
};

const subtractNumbers = function() {
    let subtract1 = Number(document.querySelector('subtract1').value);
    let subtract2 = Number(document.querySelector('subtract2').value);
    document.querySelector('difference').value = subtractNumbers(subtract1, subtract2);
}
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiplyNumbers = (factor1, factor2) => factor1 * factor2;

//arrow function
const multiplyNumber = () => {
    const factor1 = Number(document.getElementById('factor1').value);
    const factor2 = Number(document.getElementById('factor2').value);
    document.getElementById('product').value = multiply(factor1, factor2);
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
