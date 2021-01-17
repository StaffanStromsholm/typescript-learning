const numberButtons: NodeListOf<Element> = document.querySelectorAll('.numbers');
const operators: HTMLElement = document.querySelector('.operators');
const input: HTMLElement = document.getElementById('input');
const result: HTMLElement = document.getElementById('result');

let inputedValue: string = '';
let sum: number = 0;

let firstCalculation: boolean =  true;

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
                firstCalculation = true;
                turnAllOperatorsToFalse();
                return;
            }
            inputedValue += number.textContent;
            input.textContent = inputedValue.toString();
        })
    })
})

//add eventlisteners to operators
operators.childNodes.forEach(operator => {
    operator.addEventListener('click', () => {
        if(firstCalculation){
            sum = Number(inputedValue);
            inputedValue = '';
            input.textContent = sum.toString();
            firstCalculation = false;
            console.log(sum, 'this was the first calc');
            if (operator.textContent === '+') {
                willAdd = true;
            } else if (operator.textContent === '-') {
                willSubtract = true;
            } else if (operator.textContent === '×') {
                willMultiply = true;
            } else if (operator.textContent === '÷') {
                willDivide = true;
            }
        turnAllOperatorsToFalse();

            return;
        }

        calculateSum();

        if (operator.textContent === '+') {
            willAdd = true;
        } else if (operator.textContent === '-') {
            willSubtract = true;
        } else if (operator.textContent === '×') {
            willMultiply = true;
        } else if (operator.textContent === '÷') {
            willDivide = true;
        }
        turnAllOperatorsToFalse();
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
    turnAllOperatorsToFalse();

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
        input.textContent = sum.toString();
        console.log('added')
    } else if(willSubtract){
        sum -= Number(inputedValue);
        input.textContent = sum.toString();

    } else if(willMultiply){
        sum *= Number(inputedValue);
        input.textContent = sum.toString();

    } else if(willDivide){
        sum /= Number(inputedValue);
        input.textContent = sum.toString();
    }
    console.log(sum);
    inputedValue = '';
}