function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

function operate(num1, operator, num2) {

    if(operator === '+') return add(num1, num2);
    if(operator === '-') return subtract(num1, num2);
    if(operator === '*') return multiply(num1, num2);
    if(operator === '/') return divide(num1, num2);

    // return "Invalid Operator";
}

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.allclear');
const backspace = document.querySelector('.backspace');
const equals = document.querySelector('.equals');
const dot = document.querySelector('.dot');

let ans = '';
let equalsOn = false;
let dotOn = false;
let operatorOn = false;
let operator = '';
let num1 = '';
let num2 = '';

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        if(operatorOn) {
            display.textContent = '';
            display.textContent += e.target.textContent;
            num2 += e.target.textContent;
            console.log(num2);
            ans = operate(num1, operator, num2);
            console.log(ans);
            operatorOn = false;
        }
        else {
            display.textContent += e.target.textContent;
            num1 += e.target.textContent;
            console.log(num1);
        }
    })
});

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        operatorOn = true;
        operator = e.target.textContent;
        console.log(operator);
    })
})