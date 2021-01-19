var numberButtons = document.querySelectorAll('.numbers');
var operators = document.querySelector('.operators');
var input = document.getElementById('input');
var result = document.getElementById('result');
var inputedValue = '0';
var sum = 0;
var firstValue;
var lastClickWasAnOperator = false;
var clickedOperator;
input.textContent = inputedValue;
//add eventlisteners to the numbers and join them together when clicked
numberButtons.forEach(function (numberRow) {
    numberRow.childNodes.forEach(function (number) {
        number.addEventListener('click', function () {
            //don't allow multiple decimal points
            if (number.textContent === '.') {
                var inputedValueArray = inputedValue.split('');
                if (inputedValueArray.indexOf('.') > -1) {
                    return;
                }
            }
            //if C is clicked, reset
            if (number.textContent === 'C') {
                inputedValue = '';
                sum = 0;
                firstValue = '';
                input.textContent = '0';
                lastClickWasAnOperator = false;
                return;
            }
            //when first number button is clicked, replace '0' with clicked
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
        //if firstValue is not undefined, perform a calculation on firstValue and inputedValue and display the result
        if (firstValue && operator) {
            calculatedValue = calculate(firstValue, clickedOperator, inputedValue).toString();
            input.textContent = calculatedValue;
        }
        lastClickWasAnOperator = true;
        firstValue = calculatedValue || inputedValue; //if a calculation was performed, assign it to firstValue, else assign inputedValue
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
