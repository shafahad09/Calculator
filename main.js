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
let num2 = 0;
let operator = '';
let equalsOn = false;

zero.addEventListener('click', () => {
    if(operator) {
        num2 = (num2 * 10) + 0;
        display.textContent = num2;
    }
    else {
        if(!equalsOn) {
            num = (num * 10) + 0;
            display.textContent = num;
        }
        if(equalsOn) {
            equalsOn = false;
            num = 0;
            num = (num * 10) + 0;
            display.textContent = num;
        }
    }
})

one.addEventListener('click', () => {
    if(operator) {
        num2 = (num2 * 10) + 1;
        display.textContent = num2;
    }
    else {
        if(!equalsOn) {
            num = (num * 10) + 1;
            display.textContent = num;
        }
        if(equalsOn) {
            equalsOn = false;
            num = 0;
            num = (num * 10) + 1;
            display.textContent = num;
        }
    }
})

two.addEventListener('click', () => {
    if(operator) {
        num2 = (num2 * 10) + 2;
        display.textContent = num2;
    }
    else {
        if(!equalsOn) {
            num = (num * 10) + 2;
            display.textContent = num;
        }
        if(equalsOn) {
            equalsOn = false;
            num = 0;
            num = (num * 10) + 2;
            display.textContent = num;
        }
    }
})

three.addEventListener('click', () => {
    if(operator) {
        num2 = (num2 * 10) + 3;
        display.textContent = num2;
    }
    else {
        if(!equalsOn) {
            num = (num * 10) + 3;
            display.textContent = num;
        }
        if(equalsOn) {
            equalsOn = false;
            num = 0;
            num = (num * 10) + 3;
            display.textContent = num;
        }
    }
})

four.addEventListener('click', () => {
    if(operator) {
        num2 = (num2 * 10) + 4;
        display.textContent = num2;
    }
    else {
        if(!equalsOn) {
            num = (num * 10) + 4;
            display.textContent = num;
        }
        if(equalsOn) {
            equalsOn = false;
            num = 0;
            num = (num * 10) + 4;
            display.textContent = num;
        }
    }
})

five.addEventListener('click', () => {
    if(operator) {
        num2 = (num2 * 10) + 5;
        display.textContent = num2;
    }
    else {
        if(!equalsOn) {
            num = (num * 10) + 5;
            display.textContent = num;
        }
        if(equalsOn) {
            equalsOn = false;
            num = 0;
            num = (num * 10) + 5;
            display.textContent = num;
        }
    }
})

six.addEventListener('click', () => {
    if(operator) {
        num2 = (num2 * 10) + 6;
        display.textContent = num2;
    }
    else {
        if(!equalsOn) {
            num = (num * 10) + 6;
            display.textContent = num;
        }
        if(equalsOn) {
            equalsOn = false;
            num = 0;
            num = (num * 10) + 6;
            display.textContent = num;
        }
    }
})

seven.addEventListener('click', () => {
    if(operator) {
        num2 = (num2 * 10) + 7;
        display.textContent = num2;
    }
    else {
        if(!equalsOn) {
            num = (num * 10) + 7;
            display.textContent = num;
        }
        if(equalsOn) {
            equalsOn = false;
            num = 0;
            num = (num * 10) + 7;
            display.textContent = num;
        }
    }
})

eight.addEventListener('click', () => {
    if(operator) {
        num2 = (num2 * 10) + 8;
        display.textContent = num2;
    }
    else {
        if(!equalsOn) {
            num = (num * 10) + 8;
            display.textContent = num;
        }
        if(equalsOn) {
            equalsOn = false;
            num = 0;
            num = (num * 10) + 8;
            display.textContent = num;
        }
    }
})

nine.addEventListener('click', () => {
    if(operator) {
        num2 = (num2 * 10) + 9;
        display.textContent = num2;
    }
    else {
        if(!equalsOn) {
            num = (num * 10) + 9;
            display.textContent = num;
        }
        if(equalsOn) {
            equalsOn = false;
            num = 0;
            num = (num * 10) + 9;
            display.textContent = num;
        }
    }
})



addition.addEventListener('click', () => {
    if(num && num2){
        num = operate(operator, num, num2);
        num2 = 0;
    }
    operator = '+';
});

subtraction.addEventListener('click', () => {
    if(num && num2){
        num = operate(operator, num, num2);
        num2 = 0;
    }
    operator = '-';
});

multiplication.addEventListener('click', () => {
    if(num && num2){
        num = operate(operator, num, num2);
        num2 = 0;
    }
    operator = '*';
});

division.addEventListener('click', () => {
    if(num && num2){
        num = operate(operator, num, num2);
        num2 = 0;
    }
    operator = '/';
});

equals.addEventListener('click', () => {
    if(num && num2){
        num = operate(operator, num, num2);
        num2 = 0;
    }
    display.textContent = num;
    operator = '';
    equalsOn = true;
})

clear.addEventListener('click', () => {
    display.textContent = 0;
    operator = '';
    num = 0;
    count = 0;
    decimalOn = false;
})

backspace.addEventListener('click', () => {
    num = Math.floor(num / 10);
    display.textContent = num;
})

