var numberButtons = document.querySelectorAll('.numbers');
var operators = document.querySelector('.operators');
var input = document.getElementById('input');
var result = document.getElementById('result');
var inputedValue = '';
var sum = 0;
var willAdd = false;
var willSubtract = false;
var willMultiply = false;
var willDivide = false;
//add eventlisteners to the numbers and join them together when clicked
numberButtons.forEach(function (numberRow) {
    numberRow.childNodes.forEach(function (number) {
        number.addEventListener('click', function () {
            //if C is clicked, reset
            if (number.textContent === 'C') {
                inputedValue = '';
                sum = 0;
                input.textContent = '0';
                turnAllOperatorsToFalse();
                return;
            }
            // if (willAdd || willSubtract || willMultiply || willDivide) {
            //     return
            // }
            inputedValue += number.textContent;
            input.textContent = inputedValue.toString();
        });
    });
});
//add eventlisteners to operators
operators.childNodes.forEach(function (operator) {
    operator.addEventListener('click', function () {
        turnAllOperatorsToFalse();
        if (operator.textContent === '+') {
            calculateSum();
            willAdd = true;
        }
        else if (operator.textContent === '-') {
            calculateSum();
            willSubtract = true;
        }
        else if (operator.textContent === '×') {
            calculateSum();
            willMultiply = true;
        }
        else if (operator.textContent === '÷') {
            calculateSum();
            willDivide = true;
        }
    });
});
result.addEventListener('click', function () {
    if (willAdd) {
        sum += Number(inputedValue);
        input.textContent = sum.toString();
    }
    else if (willSubtract) {
        sum -= Number(inputedValue);
        input.textContent = sum.toString();
    }
    else if (willMultiply) {
        sum *= Number(inputedValue);
        input.textContent = sum.toString();
    }
    else if (willDivide) {
        sum /= Number(inputedValue);
        input.textContent = sum.toString();
    }
    console.log(sum);
});
var turnAllOperatorsToFalse = function () {
    willAdd = false;
    willSubtract = false;
    willMultiply = false;
    willDivide = false;
};
var calculateSum = function () {
    if (willAdd) {
        sum += Number(inputedValue);
    }
    else if (willSubtract) {
        sum -= Number(inputedValue);
    }
    else if (willMultiply) {
        sum *= Number(inputedValue);
    }
    else if (willDivide) {
        sum /= Number(inputedValue);
    }
    else {
        sum = Number(inputedValue);
    }
    console.log(sum);
    inputedValue = '';
};
