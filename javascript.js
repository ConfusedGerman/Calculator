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
let chosenOperator = '';
let operatorClicked = false;
let storeLastResult = 0;
let allowSecondNumber = true;

function operate(numberOne, numberTwo, operator) {
    if (operator === "+") {
        return add(numberOne, numberTwo);
    } else if (operator === "-") {
        return subtract(numberOne, numberTwo);
    } else if (operator === "*") {
        return multiply(numberOne, numberTwo);
    } else if (operator === "/") {
        return divide(numberOne, numberTwo);
    }
}

// Get input from buttons
const buttons = document.querySelectorAll('.number');
let display = document.querySelector('#display');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //If is only relevant after first result
        if (allowSecondNumber === true) {
            if (!operatorClicked) {
                numberOne += button.textContent;
                display.textContent += button.textContent;
            } else {
                numberTwo += button.textContent;
                display.textContent += button.textContent;
            }
        }
    });
});

function chooseOperator() {
    const operators = document.querySelectorAll('.operator');
    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            if (operator.textContent === '=') {
                //Reset if no second number is given
                if (numberTwo === '') {
                    resetVariables();
                    return;
                }
                const convertFirstNumber = Number(numberOne);
                const convertSecondNumber = Number(numberTwo);
                let result = calculate(convertFirstNumber, convertSecondNumber);
                storeLastResult = result;
                display.textContent = result;
                numberOne = result.toString();
                numberTwo = '';
                chosenOperator = '';
                //Only allow another number when a operator is clicked because numberOne already exists
                allowSecondNumber = false;
                operatorClicked = false;
                return;
            }
            if (!operatorClicked) {
                chosenOperator = operator.textContent;
                display.textContent += chosenOperator;
                operatorClicked = true;
                allowSecondNumber = true;
            }
        });
    });
}

function calculate(number1, number2) {
    return operate(number1, number2, chosenOperator);
}

// When the clear button is clicked, reset all variables
function resetVariables() {
    numberOne = '';
    numberTwo = '';
    chosenOperator = '';
    operatorClicked = false;
    allowSecondNumber = true;
    display.textContent = '';
}

chooseOperator();

const clear = document.querySelector('.function');
clear.addEventListener('click', () => {
    resetVariables();
});