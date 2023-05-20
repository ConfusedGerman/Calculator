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
let choosenOperator = '';
let operatorClicked = false;
let storeLastResult = 0;

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
        if (!operatorClicked) {
            numberOne += button.textContent;
            content.textContent += button.textContent;
        }
        else {
            numberTwo += button.textContent;
            content.textContent += button.textContent;
        }
    });
});

function chooseOperator() {
    const operators = document.querySelectorAll('.operator');
    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            if (!operatorClicked) {
                choosenOperator += operator.textContent;
                content.textContent += choosenOperator;
                operatorClicked = true;
            }
        });
    });
}

function calculate(number1, number2) {
    let result = operate(number1, number2, choosenOperator);
    storeLastResult = result;
    resetVariables();
    return result;
}

//When button clear is clicked reset all variables
function resetVariables() {
    numberOne = '';
    numberTwo = '';
    choosenOperator = '';
    operatorClicked = false;
    content.textContent = '';
}

chooseOperator();

const clear = document.querySelector('.function');
clear.addEventListener('click', () => {
    resetVariables();
});



function equalSign() {
    const equal = document.querySelector('#equalSign');
    equal.addEventListener('click', () => {
        if (numberTwo === '') {
            numberTwo = 0;
        }
        const firstNumberInteger = Number(numberOne);
        const secondNumberInteger = Number(numberTwo);
        let result = calculate(firstNumberInteger, secondNumberInteger);
        //store result for future operations
        storeLastResult = result;
        content.textContent = result;
    });
}
equalSign();