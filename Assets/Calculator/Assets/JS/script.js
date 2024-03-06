const display = document.querySelector('#display');
const buttons = Array.from(document.querySelectorAll('button'));
const eraseButton = document.querySelector('#erase');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#dot'); 
let firstValue = '';
let operator = '';
let secondValue = '';
let shouldReset = false;
let lastButton = null;

function calculate() {
    let result;
    let numFirstValue = parseFloat(firstValue);
    let numSecondValue = parseFloat(secondValue);
    switch (operator) {
        case '+':
            result = numFirstValue + numSecondValue;
            break;
        case '-':
            result = numFirstValue - numSecondValue;
            break;
        case '*':
            result = numFirstValue * numSecondValue;
            break;
        case '/':
            if (numFirstValue === 0) {
                result = 0;
            } else {
                result = numSecondValue != 0 ? numFirstValue / numSecondValue : 'Error';
            }
            break;
    }
    return result;
}


clearButton.addEventListener('click', () => {
    display.textContent = '';
    firstValue = '';
    operator = '';
    secondValue = '';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (lastButton) {
            lastButton.classList.remove('pressed');
        }
        button.classList.add('pressed');
        lastButton = button;

        if (button.textContent >= '0' && button.textContent <= '9' || button.textContent === '.') {
            if (shouldReset) {
                display.textContent = '';
                shouldReset = false;
            }
            display.textContent += button.textContent;
        } else if (['+', '-', 'X', '/'].includes(button.textContent)) {
            if (firstValue && operator) {
                secondValue = parseFloat(display.textContent.split(operator).pop());
                firstValue = calculate();
                display.textContent = firstValue;
            } else {
                firstValue = parseFloat(display.textContent);
            }
            operator = button.textContent === 'X' ? '*' : button.textContent;
            display.textContent += ' ' + operator + ' '; 
            shouldReset = false; 
        }
    });
});

equalsButton.addEventListener('click', function() {
    if (firstValue !== '' && operator) {
        secondValue = parseFloat(display.textContent.split(operator).pop());
        display.textContent = calculate();
        firstValue = '';
        operator = '';
        secondValue = '';
        shouldReset = true;
        if (lastButton) {
            lastButton.classList.remove('pressed');
        }
        equalsButton.classList.add('pressed');
        lastButton = equalsButton;
    }
});

eraseButton.addEventListener('click', () => {
    if (display.textContent.slice(-1) === ' ') {
        display.textContent = display.textContent.slice(0, -3);
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
    if (lastButton) {
        lastButton.classList.remove('pressed');
    }
    eraseButton.classList.add('pressed');
    lastButton = eraseButton;
});