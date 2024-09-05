// Get all the buttons, the display element, and the theme toggler
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const themeToggler = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');

// Initialize a variable to store the current input
let currentInput = '';

// Function to update the display
function updateDisplay(value) {
    display.innerText = value;
}

// Function to handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonValue = button.innerText;

        if (buttonValue === 'C') {
            // Clear the display
            currentInput = '';
            updateDisplay('');
        } else if (buttonValue === '=') {
            try {
                // Evaluate the input string and display the result
                currentInput = eval(currentInput);
                updateDisplay(currentInput);
            } catch (error) {
                updateDisplay('Error');
            }
        } else if (buttonValue === '<') {
            // Remove the last character
            currentInput = currentInput.slice(0, -1);
            updateDisplay(currentInput);
        } else {
            // Handle division symbol (÷)
            if (buttonValue === '÷') {
                buttonValue = '/';
            }

            // Handle multiplication symbol (×)
            if (buttonValue === '×') {
                buttonValue = '*';
            }

            // Append the button value to the current input
            currentInput += buttonValue;
            updateDisplay(currentInput);
        }
    });
});

// Toggle between light and dark themes
themeToggler.addEventListener('click', () => {
    calculator.classList.toggle('dark');
    themeToggler.classList.toggle('active');
});
