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
let content = document.querySelector('#content');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (!operatorClicked) {
            numberOne += button.textContent;
            content.textContent += button.textContent;
        } else {
            numberTwo += button.textContent;
            content.textContent += button.textContent;
        }
    });
});

function chooseOperator() {
    const operators = document.querySelectorAll('.operator');
    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            if (operator.textContent === '=') {
                if (numberTwo === '') {
                    resetVariables();
                    return;
                }
                const convertFirstNumber = Number(numberOne);
                const convertSecondNumber = Number(numberTwo);
                let result = calculate(convertFirstNumber, convertSecondNumber);
                storeLastResult = result;
                content.textContent = result;
                numberOne = result.toString();
                numberTwo = '';
                chosenOperator = '';
                operatorClicked = false;
                return;
            }
            if (!operatorClicked) {
                chosenOperator = operator.textContent;
                content.textContent += chosenOperator;
                operatorClicked = true;
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
    content.textContent = '';
}

chooseOperator();

const clear = document.querySelector('.function');
clear.addEventListener('click', () => {
    resetVariables();
});