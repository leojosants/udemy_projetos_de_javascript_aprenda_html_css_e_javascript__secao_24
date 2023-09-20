/*
    select elements
*/
const operators_button = document.querySelectorAll('[data_operator]');
const numbers_button = document.querySelectorAll('[data_number]');
const equal_button = document.querySelector('[data_equal]');
const display = document.querySelector('[data_display]');
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

/*
    event
*/