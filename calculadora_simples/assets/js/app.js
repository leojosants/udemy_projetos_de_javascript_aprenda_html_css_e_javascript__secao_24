/*
    select elements
*/
const operators_button = document.querySelectorAll('[data_operator]');
const numbers_button = document.querySelectorAll('[data_number]');
const equal_button = document.querySelector('[data_equal]');
const display = document.querySelector('[data_display_input]');
const dot_button = document.querySelector('[data_dot]');

/*
    global variables
*/
let current_operation = '';
let calculating = false;
let previous_value = '';
let operator = null;

/*
    functions
*/
//
const updateDisplay = () => {
    display.value = current_operation;
};

// 
const insertNumber = (event) => {
    if (calculating) {
        current_operation = event.target.textContent;
        calculating = false;
    }
    else {
        current_operation += event.target.textContent;
    };

    updateDisplay();
};

// 
const insertDot = () => {
    if (current_operation.indexOf('.') === -1) {
        current_operation += '.';
        updateDisplay();
    }
};

/*
    event
*/
//
dot_button.addEventListener('click', insertDot);

// 
numbers_button.forEach((number) => {
    number.addEventListener('click', insertNumber);
});