let firstNumber="";
let secondNumber=0;
let selectedOperator="";
let secondSelectedOperator="";

let display=document.getElementById("display_container");

function clearAll(){
    firstNumber="";
    selectedOperator="";
    secondNumber=0;
    display.textContent="0";
}

function addToDisplay(number){
    let displayValue=display.textContent;
    if (displayValue=="0"){
        display.textContent=number;
        displayValue=number;
    }
    else if (firstNumber!="" && secondNumber==0){
        display.textContent="";
        display.textContent=number;
        secondNumber=number;
    }
    else if(displayValue.length>=9){
        return;
    }
    else{
        display.textContent+=number;
        displayValue=display.textContent;
    }
}

function chooseOperator(operator){
    selectedOperator=operator;
    firstNumber=display.textContent;
}

function operate(){
    if (firstNumber!=""){
        secondNumber=display.textContent;
    }
    if (selectedOperator=="+"){
        add();
    }
    if (selectedOperator=="-"){
        subtract();
    }
    if (selectedOperator=="*"){
        multiply();
    }
    if (selectedOperator=="/"){
        divide();
    }
    secondNumber=0;
}

function add(){
    firstNumber=Number(firstNumber)+Number(secondNumber);
    display.textContent=firstNumber;
}

function subtract(){
    firstNumber=Number(firstNumber)-Number(secondNumber);
    display.textContent=firstNumber;
}

function multiply(){
    firstNumber=Number(firstNumber)*Number(secondNumber);
    display.textContent=firstNumber;
}

function divide(){
    firstNumber=Number(firstNumber)/Number(secondNumber);
    display.textContent=firstNumber;
}