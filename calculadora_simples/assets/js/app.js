/*
    select elements
*/
const operators_button = document.querySelectorAll('[data_operator]');
const numbers_button = document.querySelectorAll('[data_number]');
const display = document.querySelector('[data_display_input]');
const equal_button = document.querySelector('[data_equal]');
const dot_button = document.querySelector('[data_dot]');
const clear = document.querySelector('[data_clear]');

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

// 
const insertOperator = (event) => {
    if (current_operation !== '') {
        if (!calculating) {
            if (operator !== null) {
                calculate();
            };

            previous_value = current_operation;
            current_operation = '';
        };

        operator = event.target.textContent;
    };
};

// 
const calculate = () => {
    let result = null;
    const previous_operating = parseFloat(previous_value);
    const current_operating = parseFloat(current_operation);

    switch (operator) {
        case '+':
            result = previous_operating + current_operating;
            break;

        case '-':
            result = previous_operating - current_operating;
            break;

        case '*':
            result = previous_operating * current_operating;
            break;

        case '/':
            result = previous_operating / current_operating;
            break;

        default:
            break;
    };

    current_operation = String(result);
    previous_value = current_operation;
    calculating = true;
    updateDisplay();
};

/*
    event
*/
//
clear.addEventListener('click', () => {
    display.value = '';
    current_operation = '';
    calculating = false;
    previous_value = '';
    operator = null;
});

// 
dot_button.addEventListener('click', insertDot);

// 
equal_button.addEventListener('click', calculate);

// 
numbers_button.forEach((number) => {
    number.addEventListener('click', insertNumber);
});

// 
operators_button.forEach((operator) => {
    operator.addEventListener('click', insertOperator);
});