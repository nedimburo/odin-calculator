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
    if (displayValue=="0" || displayValue=="error:)"){
        display.textContent=number;
        displayValue=number;
    }
    else if(firstNumber!="" && displayValue=="0."){
        display.textContent+=number;
        displayValue=display.textContent;
        secondNumber=1;
    }
    else if (firstNumber!="" && secondNumber==0){
        if (selectedOperator==""){
            display.textContent+=number;
        }
        else{
            display.textContent="";
            display.textContent=number;
            secondNumber=number;
        }
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
    if (selectedOperator!=""){
        secondSelectedOperator=operator;
        operate();
        selectedOperator=secondSelectedOperator;
        secondSelectedOperator="";
    }
    else{
        selectedOperator=operator;
        firstNumber=display.textContent;
    } 
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
    selectedOperator="";
}

function add(){
    firstNumber=Number(firstNumber)+Number(secondNumber);
    if (firstNumber.toString().length>13){
        display.textContent=firstNumber.toString().substring(0, 13);
    }
    else{
        display.textContent=firstNumber; 
    }
}

function subtract(){
    firstNumber=Number(firstNumber)-Number(secondNumber);
    if (firstNumber.toString().length>13){
        display.textContent=firstNumber.toString().substring(0, 13);
    }
    else{
        display.textContent=firstNumber; 
    }
}

function multiply(){
    firstNumber=Number(firstNumber)*Number(secondNumber);
    if (firstNumber.toString().length>13){
        display.textContent=firstNumber.toString().substring(0, 13);
    }
    else{
        display.textContent=firstNumber; 
    }
}

function divide(){
    if (Number(secondNumber)==0){
        display.textContent="error:)";
        firstNumber="";
        selectedOperator="";
        secondNumber=0;
    }
    else{
        firstNumber=Number(firstNumber)/Number(secondNumber);
        if (firstNumber.toString().length>13){
            display.textContent=firstNumber.toString().substring(0, 13);
        }
        else{
            display.textContent=firstNumber; 
        }
    } 
}

function addDot(){
    let dotStatus=false;
    let displayValue=display.textContent;
    for (let i=0; i<displayValue.length; i++){
        if (displayValue[i]=="."){
            dotStatus=true;
            break;
        }
    }
    if (dotStatus==false){
        display.textContent+=".";
    }
}

function changeSign(){
    let displayValue=display.textContent;
    if (displayValue=="0"){
        return;
    }
    if (displayValue[0]=="-"){
        display.textContent=displayValue.substring(1);
    }
    else{
        display.textContent="-"+displayValue;
    }
}

function getPercentage(){
    let displayValue=display.textContent;
    display.textContent=Number(displayValue)/100;
}

window.addEventListener("keydown", function(e){
    const selection=document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!selection) return;
    checkKey(e.keyCode);
});

function checkKey(keyCode){
    switch (keyCode){
        case 8:
            clearAll();
            break;
        case 13:
            operate();
            break;
        case 48:
            addToDisplay("0");
            break;
        case 49:
            addToDisplay("1");
            break;
        case 50:
            addToDisplay("2");
            break;
        case 51:
            addToDisplay("3");
            break;
        case 52:
            addToDisplay("4");
            break;
        case 53:
            addToDisplay("5");
            break;
        case 54:
            addToDisplay("6");
            break;
        case 55:
            addToDisplay("7");
            break;
        case 56:
            addToDisplay("8");
            break;
        case 57:
            addToDisplay("9");
            break;
        case 106:
            chooseOperator("*");
            break;
        case 107:
            chooseOperator("+");
            break;
        case 109:
            chooseOperator("-");
            break;
        case 111:
            chooseOperator("/");
            break;
        case 189:
            changeSign();
            break;
        case 190:
            addDot();
            break;
        default:
            break;
    }
}

let plusOperatorButton=document.getElementById("plus-operator");
plusOperatorButton.addEventListener("click", ()=>{
    chooseOperator("+");
});

let minusOperatorButton=document.getElementById("minus-operator");
minusOperatorButton.addEventListener("click", ()=>{
    chooseOperator("-");
});

let multiplyOperatorButton=document.getElementById("multiply-operator");
multiplyOperatorButton.addEventListener("click", ()=>{
    chooseOperator("*");
});

let divisionOperatorButton=document.getElementById("division-operator");
divisionOperatorButton.addEventListener("click", ()=>{
    chooseOperator("/");
});

for (let i=0; i<10; i++){
    let digitButton=document.getElementById(`digit-${i}`);
    digitButton.addEventListener("click", ()=>{
        addToDisplay(i);
    });
}

let clearDisplayButton=document.getElementById("clear-button");
clearDisplayButton.addEventListener("click", clearAll);

let changeSignButton=document.getElementById("change-sign-button");
changeSignButton.addEventListener("click", changeSign);

let percentageButton=document.getElementById("percentage-button");
percentageButton.addEventListener("click", getPercentage);

let addDotButton=document.getElementById("add-dot-button");
addDotButton.addEventListener("click", addDot);

let operateButton=document.getElementById("operate-button");
operateButton.addEventListener("click", operate);