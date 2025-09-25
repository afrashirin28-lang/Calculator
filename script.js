
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (/[0-9.]/.test(buttonText)) {
            currentInput += buttonText;
            display.textContent = currentInput;
        } else if (/[-+*/]/.test(buttonText)) {
            operator = buttonText;
            previousInput = currentInput;
            currentInput = '';
        } else if (buttonText === 'C') {
            currentInput = '';
            operator = '';
            previousInput = '';
            display.textContent = '';
        } else if (buttonText === '=') {
            const num1 = parseFloat(previousInput);
            const num2 = parseFloat(currentInput);
            let result;

            if (operator === '+') {
                result = num1 + num2;
            } else if (operator === '-') {
                result = num1 - num2;
            } else if (operator === '*') {
                result = num1 * num2;
            } else if (operator === '/') {
                result = num1 / num2;
            }

            display.textContent = result;
            currentInput = result;
            operator = '';
            previousInput = '';
        }
    });
});
