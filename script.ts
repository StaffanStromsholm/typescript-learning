const numberButtons: NodeListOf<Element> = document.querySelectorAll('.numbers');
const operators: HTMLElement = document.querySelector('.operators');
const input: HTMLElement = document.getElementById('input');
const result: HTMLElement = document.getElementById('result');

let inputedValue: string = '0';
let sum: number = 0;
let firstValue: string;
let lastClickWasAnOperator: boolean = false;
let clickedOperator: string;

// let willAdd: boolean = false;
// let willSubtract: boolean = false;
// let willMultiply: boolean = false;
// let willDivide: boolean = false;

input.textContent = inputedValue;

//add eventlisteners to the numbers and join them together when clicked
numberButtons.forEach(numberRow => {
    numberRow.childNodes.forEach(number => {
        number.addEventListener('click', () => {

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
            } else {
                inputedValue += number.textContent;
                input.textContent = inputedValue;
            }
        })
    })
})

//add eventlisteners to operators
operators.childNodes.forEach(operator => {
    operator.addEventListener('click', () => {
        let calculatedValue: string;
        if(firstValue && operator){
            calculatedValue = calculate(firstValue, clickedOperator, inputedValue).toString();
            input.textContent = calculatedValue;
        }
        firstValue = calculatedValue; //this has a bug
        lastClickWasAnOperator = true;
        firstValue = inputedValue;
        console.log(inputedValue);
        clickedOperator = operator.textContent;
    })
})

result.addEventListener('click', () => {
    input.textContent = calculate(firstValue, clickedOperator, inputedValue).toString();
})

const calculate = (firstValue: string, operator: string, secondValue: string): number => {
    let sum: number;
    if (operator === '+') {
        sum = parseFloat(firstValue) + parseFloat(secondValue);
    } else if (operator === '-') {
        sum = parseFloat(firstValue) - parseFloat(secondValue);
    } else if (operator === '×') {
        sum = parseFloat(firstValue) * parseFloat(secondValue);
    } else if (operator === '÷') {
        sum = parseFloat(firstValue) / parseFloat(secondValue);
    }
    return sum;
}