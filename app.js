// Select elements
const display = document.getElementById('display');
let currentValue = '0';
let firstValue = null;
let operator = null;

// Function to update the display
function updateDisplay() {
    display.innerText = currentValue;
}

// Function to handle number click
function handleNumberClick(number) {
    if (currentValue === '0') {
        currentValue = number;
    } else {
        currentValue += number;
    }
    updateDisplay();
}

// Function to handle operations
function handleOperation(op) {
    if (firstValue === null) {
        firstValue = parseFloat(currentValue);
    } else {
        firstValue = operate(firstValue, parseFloat(currentValue), operator);
    }
    operator = op;
    currentValue = '0';
}

// Function to perform calculation
function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            } else {
                return 'Error';
            }
        case '%':
            return a % b;
        default:
            return b;
    }
}

// Function to handle equals operation
function handleEqual() {
    if (operator !== null && firstValue !== null) {
        currentValue = operate(firstValue, parseFloat(currentValue), operator).toString();
        firstValue = null;
        operator = null;
        updateDisplay();
    }
}

// Function to handle clear
function clearDisplay() {
    currentValue = '0';
    firstValue = null;
    operator = null;
    updateDisplay();
}

// Function to handle square
function handleSquare() {
    currentValue = (parseFloat(currentValue) ** 2).toString();
    updateDisplay();
}

// Event listeners for number buttons
document.getElementById('zero').addEventListener('click', () => handleNumberClick('0'));
document.getElementById('one').addEventListener('click', () => handleNumberClick('1'));
document.getElementById('two').addEventListener('click', () => handleNumberClick('2'));
document.getElementById('three').addEventListener('click', () => handleNumberClick('3'));
document.getElementById('four').addEventListener('click', () => handleNumberClick('4'));
document.getElementById('five').addEventListener('click', () => handleNumberClick('5'));
document.getElementById('six').addEventListener('click', () => handleNumberClick('6'));
document.getElementById('seven').addEventListener('click', () => handleNumberClick('7'));
document.getElementById('eight').addEventListener('click', () => handleNumberClick('8'));
document.getElementById('nine').addEventListener('click', () => handleNumberClick('9'));

// Event listeners for operation buttons
document.getElementById('add').addEventListener('click', () => handleOperation('+'));
document.getElementById('subtract').addEventListener('click', () => handleOperation('-'));
document.getElementById('multiply').addEventListener('click', () => handleOperation('*'));
document.getElementById('divide').addEventListener('click', () => handleOperation('/'));
document.getElementById('modulo').addEventListener('click', () => handleOperation('%'));
document.getElementById('square').addEventListener('click', handleSquare);

// Event listener for equal button
document.getElementById('equal').addEventListener('click', handleEqual);

// Event listener for clear button
document.getElementById('clear').addEventListener('click', clearDisplay);

