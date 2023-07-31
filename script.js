function add(firstNum, secondNum){
    return firstNum+secondNum;
}
function subtract(firstNum, secondNum){
    return firstNum-secondNum;
}
function multiply(firstNum, secondNum){
    return firstNum*secondNum;
}
function divide(firstNum, secondNum){
    return firstNum/secondNum;
}
function operate(firstNum, secondNum, operator){
    switch(operator){
        case "+":
            add(firstNum, secondNum);
            break;
        case "-":
            subtract(firstNum, secondNum);
            break;
        case "*":
            multiply(firstNum, secondNum);
            break;
        case "/":
            divide(firstNum, secondNum);
            break;
        default:
            break;
    }
}
function populateDisplay(number){
    let currentDisplay=document.getElementById("display_container");
    let valueOfDisplay=currentDisplay.textContent;
    if (valueOfDisplay=="0"){
        currentDisplay.textContent=number;
        valueOfDisplay=currentDisplay.textContent;
    }
    else if (valueOfDisplay.length<9){
        currentDisplay.textContent+=number;
        valueOfDisplay=currentDisplay.textContent;
    }
    console.log(valueOfDisplay);
}
function clearDisplay(){
    let display=document.getElementById("display_container");
    display.textContent="0";
}