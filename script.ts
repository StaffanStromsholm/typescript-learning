const numberButtons: NodeListOf<Element> = document.querySelectorAll('.numbers');
const operators: HTMLElement = document.querySelector('.operators');
const input: HTMLElement = document.getElementById('input');
const result: HTMLElement = document.getElementById('result');

let inputedValue: string = '';
let sum: number = 0;


let willAdd: boolean = false;
let willSubtract: boolean = false;
let willMultiply: boolean = false;
let willDivide: boolean = false;

//add eventlisteners to the numbers and join them together when clicked
numberButtons.forEach(numberRow => {
    numberRow.childNodes.forEach(number => {
        number.addEventListener('click', () => {
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
        })
    })
})

//add eventlisteners to operators
operators.childNodes.forEach(operator => {
    operator.addEventListener('click', () => {
        turnAllOperatorsToFalse();
        if (operator.textContent === '+') {
            calculateSum()
            willAdd = true;
        } else if (operator.textContent === '-') {
            calculateSum()
            willSubtract = true;
        } else if (operator.textContent === '×') {
            calculateSum()
            willMultiply = true;
        } else if (operator.textContent === '÷') {
            calculateSum()
            willDivide = true;
        }
    })
})

result.addEventListener('click', () => {
    if(willAdd){
        sum += Number(inputedValue);
        input.textContent = sum.toString();
    } else if(willSubtract){
        sum -= Number(inputedValue);
        input.textContent = sum.toString();
    } else if(willMultiply){
        sum *= Number(inputedValue);
        input.textContent = sum.toString();
    } else if(willDivide) {
        sum /= Number(inputedValue);
        input.textContent = sum.toString();
    }
    console.log(sum);
})

const turnAllOperatorsToFalse = () => {
    willAdd = false;
    willSubtract = false;
    willMultiply = false;
    willDivide = false;
}

const calculateSum = () => {
    if(willAdd) {
        sum += Number(inputedValue);
    } else if(willSubtract){
        sum -= Number(inputedValue);
    } else if(willMultiply){
        sum *= Number(inputedValue);
    } else if(willDivide){
        sum /= Number(inputedValue);
    } else {
        sum = Number(inputedValue);
    }
    console.log(sum);
    inputedValue = '';
}