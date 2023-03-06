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

    switch(operator) {

        case '+':
            return add(num1, num2);
          
        case '-':
            return subtract(num1, num2);
         
        case '*':
            return multiply(num1, num2);
            
        case '/':
            return divide(num1, num2);
            
        default:
            return "Invalid Operator";
    }
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

let num = 0;

zero.addEventListener('click', () => {multiplication
    display.textContent = 0;
    num = 0;
})

one.addEventListener('click', () => {
    display.textContent = 1;
    num = 1;
})

two.addEventListener('click', () => {
    display.textContent = 2;
    num = 2;
})

three.addEventListener('click', () => {
    display.textContent = 3;
    num = 3;
})

four.addEventListener('click', () => {
    display.textContent = 4;
    num = 4;
})

five.addEventListener('click', () => {
    display.textContent = 5;
    num = 5;
})

six.addEventListener('click', () => {
    display.textContent = 6;
    num = 6;
})

seven.addEventListener('click', () => {
    display.textContent = 7;
    num = 7;
})

eight.addEventListener('click', () => {
    display.textContent = 8;
    num = 8;
})

nine.addEventListener('click', () => {
    display.textContent = 9;
    num = 9;
})

addition.addEventListener('click', () => {
    let ans = 0;
    
    ans = add(ans + num);

    console.log(ans);
})