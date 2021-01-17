const numberButtons: NodeListOf<Element> = document.querySelectorAll('.numbers');
const input: HTMLElement = document.getElementById('input');
const result: HTMLElement = document.getElementById('result');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');

const operatorButtons = [addBtn, subtractBtn, multiplyBtn, divideBtn];

let inputedValue: string = '';

//add eventlisteners to the numbers and join them together when clicked
numberButtons.forEach(numberRow => {
    numberRow.childNodes.forEach(number => {
       number.addEventListener('click', () => {
        if (number.textContent === 'C') {
            inputedValue = '';
            input.textContent = '0';
            return;
        }
        inputedValue += number.textContent;
        input.textContent = inputedValue.toString();
       })
    })
})

//add eventlisteners to operators
operatorButtons.forEach(operator =>{
    operator.addEventListener('click', ()=>{
        inputedValue += operator.textContent;
        input.textContent = inputedValue;
    })
})

result.addEventListener('click', ()=>{
    inputedValue = eval(inputedValue.replace('×', '*').replace('÷', '/'))
    input.textContent = inputedValue;
})