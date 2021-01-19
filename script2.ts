const numberButtons: NodeListOf<Element> = document.querySelectorAll('.numbers');
const input: HTMLElement = document.getElementById('input');
const result: HTMLElement = document.getElementById('result');
const addBtn: HTMLElement = document.getElementById('add');
const subtractBtn: HTMLElement = document.getElementById('subtract');
const multiplyBtn: HTMLElement = document.getElementById('multiply');
const divideBtn: HTMLElement = document.getElementById('divide');

const operatorButtons: HTMLElement[] = [addBtn, subtractBtn, multiplyBtn, divideBtn];

let inputedValue: string = '';

//add eventlisteners to the numbers and join them together when clicked
numberButtons.forEach((numberRow: Element) => {
    numberRow.childNodes.forEach((number: ChildNode):void => {
       number.addEventListener('click', () => {
           //if C is clicked, reset
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

//add eventlisteners to operators and append them to inputedValue
operatorButtons.forEach((operator: HTMLElement):void =>{
    operator.addEventListener('click', ()=>{
        inputedValue += operator.textContent;
        input.textContent = inputedValue;
    })
})

//when div id="result" is clicked, use eval() to evaluate inputed string, replace characters × and ÷ with * and /
result.addEventListener('click', ():void=>{
    inputedValue = eval(inputedValue.replace('×', '*').replace('÷', '/'))
    input.textContent = inputedValue.toString().toUpperCase();
})