var numberButtons = document.querySelectorAll('.numbers');
var operators = document.querySelector('.operators');
var input = document.getElementById('input');
var result = document.getElementById('result');
var inputedValue = '';
var sum = 0;
var firstCalculation = true;
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
                firstCalculation = true;
                turnAllOperatorsToFalse();
                return;
            }
            inputedValue += number.textContent;
            input.textContent = inputedValue.toString();
        });
    });
});
//add eventlisteners to operators
operators.childNodes.forEach(function (operator) {
    operator.addEventListener('click', function () {
        if (firstCalculation) {
            sum = Number(inputedValue);
            inputedValue = '';
            input.textContent = sum.toString();
            firstCalculation = false;
            console.log(sum, 'this was the first calc');
            if (operator.textContent === '+') {
                willAdd = true;
            }
            else if (operator.textContent === '-') {
                willSubtract = true;
            }
            else if (operator.textContent === '×') {
                willMultiply = true;
            }
            else if (operator.textContent === '÷') {
                willDivide = true;
            }
            turnAllOperatorsToFalse();
            return;
        }
        calculateSum();
        if (operator.textContent === '+') {
            willAdd = true;
        }
        else if (operator.textContent === '-') {
            willSubtract = true;
        }
        else if (operator.textContent === '×') {
            willMultiply = true;
        }
        else if (operator.textContent === '÷') {
            willDivide = true;
        }
        turnAllOperatorsToFalse();
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
    turnAllOperatorsToFalse();
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
        input.textContent = sum.toString();
        console.log('added');
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
    inputedValue = '';
};
