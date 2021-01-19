var numberButtons = document.querySelectorAll('.numbers');
var input = document.getElementById('input');
var result = document.getElementById('result');
var addBtn = document.getElementById('add');
var subtractBtn = document.getElementById('subtract');
var multiplyBtn = document.getElementById('multiply');
var divideBtn = document.getElementById('divide');
var operatorButtons = [addBtn, subtractBtn, multiplyBtn, divideBtn];
var inputedValue = '';
//add eventlisteners to the numbers and join them together when clicked
numberButtons.forEach(function (numberRow) {
    numberRow.childNodes.forEach(function (number) {
        number.addEventListener('click', function () {
            //if C is clicked, reset
            if (number.textContent === 'C') {
                inputedValue = '';
                input.textContent = '0';
                return;
            }
            inputedValue += number.textContent;
            input.textContent = inputedValue.toString();
        });
    });
});
//add eventlisteners to operators and append them to inputedValue
operatorButtons.forEach(function (operator) {
    operator.addEventListener('click', function () {
        inputedValue += operator.textContent;
        input.textContent = inputedValue;
    });
});
//when div id="result" is clicked, use eval() to evaluate inputed string, replace characters × and ÷ with * and /
result.addEventListener('click', function () {
    inputedValue = eval(inputedValue.replace('×', '*').replace('÷', '/'));
    input.textContent = inputedValue.toString().toUpperCase();
});
