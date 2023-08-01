let firstNumber="";
let secondNumber="";
let selectedOperator="";

let display=document.getElementById("display_container");

function add(firstNum, secondNum){
    firstNumber=Number(firstNum)+Number(secondNum);
    display.textContent=firstNumber;
}
function subtract(firstNum, secondNum){
    firstNumber=Number(firstNum)-Number(secondNum);
    display.textContent=firstNumber;
}
function multiply(firstNum, secondNum){
    firstNumber=Number(firstNum)*Number(secondNum);
    display.textContent=firstNumber;
}
function divide(firstNum, secondNum){
    firstNumber=Number(firstNum)/Number(secondNum);
    display.textContent=firstNumber;
}

function populateDisplay(number){
    let valueDisplay=display.textContent;
    if (valueDisplay=="0"){
        display.textContent=number;
        valueDisplay=display.textContent;
    }
    else if(firstNumber!=""){
        display.textContent="";
        display.textContent=number;
    }
    else if (valueDisplay.length<9){
        display.textContent+=number;
        valueDisplay=display.textContent;
    }
}

function chooseOperator(operator){
    selectedOperator=operator;
    firstNumber=display.textContent;
}

function calculate(){
    secondNumber=display.textContent;
    if (selectedOperator=="+"){
        add(firstNumber, secondNumber);
    }
    if (selectedOperator=="-"){
        subtract(firstNumber, secondNumber);
    }
    if (selectedOperator=="*"){
        multiply(firstNumber, secondNumber);
    }
    if (selectedOperator=="/"){
        divide(firstNumber, secondNumber);
    }
}

function clearAll(){
    firstNumber="";
    selectedOperator="";
    secondNumber="";
    display.textContent="0";
}