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
    if (Number(secondNumber)==0){
        display.textContent="error:)";
        firstNumber="";
        selectedOperator="";
        secondNumber=0;
    }
    else{
        firstNumber=Number(firstNumber)/Number(secondNumber);
        display.textContent=firstNumber;
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