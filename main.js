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
const dot = document.querySelector('.dot');

let num = 0;
let operator = '';
let equalsOn = false;
let decimalOn = false;
let count = 0;

zero.addEventListener('click', () => {
    if(operator) {
        num = operate(operator, num, 0);
        operator = '';
        display.textContent = 0;
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
        num = operate(operator, num, 1);
        operator = '';
        display.textContent = 1;
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
        num = operate(operator, num, 2);
        operator = '';
        display.textContent = 2;
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
        num = operate(operator, num, 3);
        operator = '';
        display.textContent = 3;
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
        num = operate(operator, num, 4);
        operator = '';
        display.textContent = 4;
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
        num = operate(operator, num, 5);
        operator = '';
        display.textContent = 5;
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
        num = operate(operator, num, 6);
        operator = '';
        display.textContent = 6;
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
        num = operate(operator, num, 7);
        operator = '';
        display.textContent = 7;
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
        num = operate(operator, num, 8);
        operator = '';
        display.textContent = 8;
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
        num = operate(operator, num, 9);
        operator = '';
        display.textContent = 9;
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

dot.addEventListener('click', () => {
    decimalOn = true;
    count = 1;
    num = num + 0.0;
    display.textContent = num + ".0";
})