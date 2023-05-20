function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let numberOne = '';
let numberTwo = '';
let operator = '';

function operate(numberOne, numberTwo, operator) {
    if (operator === "+") {
        return add(numberOne, numberTwo);
    }
    else if(operator === "-") {
        return subtract(numberOne, numberTwo);
    }
    else if(operator === "*") {
        return multiply(numberOne, numberTwo);
    }
    else if(operator === "/") {
        return divide(numberOne, numberTwo);
    }
}


//Get input from buttons
const buttons = document.querySelectorAll('.number');
let content = document.querySelector('#content');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        numberOne += button.textContent;
        content.textContent = numberOne;
    });
});