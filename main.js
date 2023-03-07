function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    return (num1 - num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    return (num1 / num2);
}

function operate(operator, num1, num2) {

    if(operator === '+') return add(num1, num2);
    if(operator === '-') return subtract(num1, num2);
    if(operator === '*') return multiply(num1, num2);
    if(operator === '/') return divide(num1, num2);

    return "Invalid Operator";
}

const display = document.querySelector('.display');

const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.divide');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');

let num = 0;
let operator = '';

zero.addEventListener('click', () => {
    if(operator) {
        num = operate(operator, num, 0);
        operator = '';
        display.textContent = 0;
    }
    else {
        display.textContent = 0;
        num = 0;
    }
})

one.addEventListener('click', () => {
    if(operator) {
        num = operate(operator, num, 1);
        operator = '';
        display.textContent = 1;
    }
    else {
        display.textContent = 1;
        num = 1;
    }
})

two.addEventListener('click', () => {
    if(operator) {
        num = operate(operator, num, 2);
        operator = '';
        display.textContent = 2;
    }
    else {
        display.textContent = 2;
        num = 2;
    }
})

three.addEventListener('click', () => {
    if(operator) {
        num = operate(operator, num, 3);
        operator = '';
        display.textContent = 3;
    }
    else {
        display.textContent = 3;
        num = 3;
    }
})

four.addEventListener('click', () => {
    if(operator) {
        num = operate(operator, num, 4);
        operator = '';
        display.textContent = 4;
    }
    else {
        display.textContent = 4;
        num = 4;
    }
})

five.addEventListener('click', () => {
    if(operator) {
        num = operate(operator, num, 5);
        operator = '';
        display.textContent = 5;
    }
    else {
        display.textContent = 5;
        num = 5;
    }
})

six.addEventListener('click', () => {
    if(operator) {
        num = operate(operator, num, 6);
        operator = '';
        display.textContent = 6;
    }
    else {
        display.textContent = 6;
        num = 6;
    }
})

seven.addEventListener('click', () => {
    if(operator) {
        num = operate(operator, num, 7);
        operator = '';
        display.textContent = 7;
    }
    else {
        display.textContent = 7;
        num = 7;
    }
})

eight.addEventListener('click', () => {
    if(operator) {
        num = operate(operator, num, 8);
        operator = '';
        display.textContent = 8;
    }
    else {
        display.textContent = 8;
        num = 8;
    }
})

nine.addEventListener('click', () => {
    if(operator) {
        num = operate(operator, num, 9);
        operator = '';
        display.textContent = 9;
    }
    else {
        display.textContent = 9;
        num = 9;
    }
})



addition.addEventListener('click', () => {
    operator = '+';
});

subtraction.addEventListener('click', () => {
    operator = '-';
});

multiplication.addEventListener('click', () => {
    operator = '*';
});

division.addEventListener('click', () => {
    operator = '/';
});

equals.addEventListener('click', () => {
    display.textContent = num;
    operator = '';
})

clear.addEventListener('click', () => {
    display.textContent = 0;
    operator = '';
    num = 0;
})