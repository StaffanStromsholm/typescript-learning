var numberButtons = document.querySelectorAll('.numbers');
var operators = document.querySelector('.operators');
var input = document.getElementById('input');
var result = document.getElementById('result');
var inputedValue = '0';
var sum = 0;
var firstValue;
var lastClickWasAnOperator = false;
var clickedOperator;
// let willAdd: boolean = false;
// let willSubtract: boolean = false;
// let willMultiply: boolean = false;
// let willDivide: boolean = false;
input.textContent = inputedValue;
//add eventlisteners to the numbers and join them together when clicked
numberButtons.forEach(function (numberRow) {
    numberRow.childNodes.forEach(function (number) {
        number.addEventListener('click', function () {
            //if C is clicked, reset
            if (number.textContent === 'C') {
                inputedValue = '';
                sum = 0;
                firstValue = '';
                input.textContent = '0';
                lastClickWasAnOperator = false;
                return;
            }
            if (inputedValue === '0' || lastClickWasAnOperator) {
                inputedValue = number.textContent.toString();
                input.textContent = inputedValue;
                lastClickWasAnOperator = false;
            }
            else {
                inputedValue += number.textContent;
                input.textContent = inputedValue;
            }
        });
    });
});
//add eventlisteners to operators
operators.childNodes.forEach(function (operator) {
    operator.addEventListener('click', function () {
        var calculatedValue;
        if (firstValue && operator) {
            calculatedValue = calculate(firstValue, clickedOperator, inputedValue).toString();
            input.textContent = calculatedValue;
        }
        firstValue = calculatedValue; //this has a bug
        lastClickWasAnOperator = true;
        firstValue = inputedValue;
        console.log(inputedValue);
        clickedOperator = operator.textContent;
    });
});
result.addEventListener('click', function () {
    input.textContent = calculate(firstValue, clickedOperator, inputedValue).toString();
});
var calculate = function (firstValue, operator, secondValue) {
    var sum;
    if (operator === '+') {
        sum = parseFloat(firstValue) + parseFloat(secondValue);
    }
    else if (operator === '-') {
        sum = parseFloat(firstValue) - parseFloat(secondValue);
    }
    else if (operator === '×') {
        sum = parseFloat(firstValue) * parseFloat(secondValue);
    }
    else if (operator === '÷') {
        sum = parseFloat(firstValue) / parseFloat(secondValue);
    }
    return sum;
};
