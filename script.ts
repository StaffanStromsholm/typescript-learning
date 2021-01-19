const numberButtons: NodeListOf<Element> = document.querySelectorAll('.numbers');
const operators: HTMLElement = document.querySelector('.operators');
const input: HTMLElement = document.getElementById('input');
const result: HTMLElement = document.getElementById('result');

let inputedValue: string = '0';
let sum: number = 0;
let firstValue: string;
let lastClickWasAnOperator: boolean = false;
let clickedOperator: string;

input.textContent = inputedValue;

//add eventlisteners to the numbers and join them together when clicked
numberButtons.forEach((numberRow: Element) => {
    numberRow.childNodes.forEach((number: ChildNode) => {
        number.addEventListener('click', ():void => {

            //don't allow multiple decimal points
            if(number.textContent === '.'){
                let inputedValueArray: string[] = inputedValue.split('')
                if(inputedValueArray.indexOf('.') > -1){
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
        })
    })
})

//add eventlisteners to operators
operators.childNodes.forEach((operator: ChildNode) => {
    operator.addEventListener('click', () => {
        let calculatedValue: string;

        //if firstValue is not undefined, perform a calculation on firstValue and inputedValue and display the result
        if(firstValue && operator){
            calculatedValue = calculate(firstValue, clickedOperator, inputedValue).toString();
            input.textContent = calculatedValue;
        }
        lastClickWasAnOperator = true;
        firstValue = calculatedValue || inputedValue; //if a calculation was performed, assign it to firstValue, else assign inputedValue
        clickedOperator = operator.textContent;
    })
})

result.addEventListener('click', ():void => {
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