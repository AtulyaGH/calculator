var getdisplay=document.getElementById('display1')
var display=document.getElementById('display');
var txt = null;
var firstOperand;
var secondOperand;
var operation;
function seven() {
    txt = "7";
    display.innerHTML += txt;
}
function eight() {
    txt = "8";
    display.innerHTML += txt;
}
function nine() {
    txt = "9";
    display.innerHTML += txt;
}
function four() {
    txt = "4";
    display.innerHTML += txt;
}
function five() {
    txt = "5";
    display.innerHTML += txt;
}
function six() {
    txt = "6";
    display.innerHTML += txt;
}
function dot() {
    if (display.innerText.includes('.')) {
        return;
    }
    else {
        if (display.innerHTML === "") {
            txt = "0.";
        }
        else {
            txt = ".";
        }
        display.innerHTML += txt;
    }
}
function three() {
    txt = "3";
    display.innerHTML += txt;
}
function one() {
    txt = "1";
    display.innerHTML += txt;
}
function zero() {
    if (display.innerText === "") {
        return;
    }
    else {
        txt = "0";
        display.innerHTML += txt;
    }
}
function two() {
    txt = "2";
    display.innerHTML += txt;
}
function cleared() {
    display.innerHTML = "";
    getdisplay.innerHTML = "";
    firstOperand = undefined;
    secondOperand = undefined;
    operation = undefined;
}
function plus() {
    if (display.innerText === "" && firstOperand == undefined) {
        return;
    }
    else if (firstOperand == undefined) {
        getFirstOperand();
        txt = "+";

        operation = "+";

        display.innerHTML = "";

        getdisplay.innerHTML += firstOperand.toString() + txt;

    }
    else if (firstOperand != undefined && operation != undefined && display.innerText === "") {
        txt = "+";
        getdisplay.innerHTML = firstOperand + txt;
        operation = "+";
    }
    else if (firstOperand != undefined && display.innerText !== "" && secondOperand == undefined) {
        getSecondOperand();
        calculate();
        firstOperand = txt;
        secondOperand = undefined;
        operation = "+";
        getdisplay.innerHTML = firstOperand + "+";
        display.innerHTML = "";
    }
}
function minus() {
    if (display.innerText === "" && firstOperand == undefined) {
        return;
    }
    else if (firstOperand == undefined) {
        getFirstOperand();
        txt = "-";

        operation = "-";

        display.innerHTML = "";

        getdisplay.innerHTML += firstOperand.toString() + txt;

    }
    else if (firstOperand != undefined && display.innerText === "" && operation != undefined) {
        txt = "-";
        getdisplay.innerHTML = firstOperand + txt;
        operation = "-";
    }
    else if (firstOperand != undefined && display.innerText !== "" && secondOperand == undefined) {
        getSecondOperand();
    
        calculate();
        firstOperand = txt;
        secondOperand = undefined;
        operation = "-";
        getdisplay.innerHTML = firstOperand + "-";
        display.innerHTML = "";
    }
}
function into() {
    if (display.innerText === "" && firstOperand == undefined) {
        return;
    }
    else if (firstOperand == undefined) {
        getFirstOperand();
        txt = "&times;";

        operation = "*";

        display.innerHTML = "";

        getdisplay.innerHTML += firstOperand.toString() + txt;

    }
    else if (firstOperand != undefined && display.innerText === "" && operation != undefined) {
        txt = "&times;";
        getdisplay.innerHTML = firstOperand + txt;
        operation = "*";
    }
    else if (firstOperand != undefined && display.innerText !== "" && secondOperand == undefined) {
        getSecondOperand();
        calculate();
        firstOperand = txt;
        secondOperand = undefined;
        operation = "*";
        getdisplay.innerHTML = firstOperand + "&times;";
        display.innerHTML = "";
    }
}
function numdiv() {
    if (display.innerText === "" && firstOperand == undefined) {
        return;
    }
    else if (firstOperand == undefined) {
        getFirstOperand();
        txt = "&div;";

        operation = "/";

        display.innerHTML = "";

        getdisplay.innerHTML += firstOperand.toString() + txt;

    }
    else if (firstOperand != undefined && display.innerText === "" && operation != undefined) {
        txt = "&div;";
        getdisplay.innerHTML = firstOperand + txt;
        operation = "/";
    }
    else if (firstOperand != undefined && display.innerText !== "" && secondOperand == undefined) {
        getSecondOperand();
        calculate();
        firstOperand = txt;
        secondOperand = undefined;
        operation = "/";
        getdisplay.innerHTML = firstOperand + "&div;";
        display.innerHTML = "";
    }
}
function equals() {
    if (firstOperand == undefined) {
        return
    }
    else if (firstOperand != undefined && operation != undefined && secondOperand == undefined) {
        if (display.innerText.includes('.')) {
            secondOperand = parseFloat(display.innerText);
        }
        else if (firstOperand != undefined && operation != undefined && display.innerHTML === "" && secondOperand == undefined) {
            txt = firstOperand;
            display.innerHTML = txt; getdisplay.innerHTML = "";
            firstOperand = undefined;
            operation = undefined;
        }
        else {
            secondOperand = parseInt(display.innerText);
        }
        calculate();
        firstOperand = undefined;
        secondOperand = undefined;
        operation = undefined;
        getdisplay.innerHTML = "";
        display.innerHTML = txt;
    }
}
function percent() {
    if (display.innerText === "") {
        return;
    }
    else if (firstOperand == undefined) {
        getFirstOperand();
        txt = "%";

        display.innerHTML = firstOperand / 100;

        getdisplay.innerHTML += "";
        firstOperand = undefined;
        txt = undefined;
    }
}
function del() {
    if (display.innerText === "" && getdisplay.innerText === "") {
        return;
    }
    else if (display.innerText !== "") {
        txt = display.innerHTML.toString();
        display.innerHTML = txt.slice(0, -1);
    }
    else if (display.innerText === "" && getdisplay.innerText !== "" && operation != undefined && firstOperand != undefined) {
        operation = undefined;
        firstOperand = undefined;
        txt = getdisplay.innerHTML.toString();
        display.innerHTML = txt.slice();
        getdisplay.innerHTML = "";
    }
}
function pm() {
    if (display.innerText === "") {
        display.innerHTML = "-";
    }
    else if(display.innerText === "-"){
        display.innerHTML = "";
    }
    else{
        if (display.innerText.includes('.')) {
            txt = parseFloat(display.innerText);
            if(txt.toString().includes("-")){
                txt=txt*(-1);
            }
            else{
                txt="-"+txt;
            }
        }
        else {
            txt = parseInt(display.innerText);
            if(txt.toString().includes("-")){
                txt=txt*(-1);
            }
            else{
                txt="-"+txt;
            }
        }
        display.innerHTML=txt;
    }
}
function calculate(){
    
    switch (operation) {
        case "+":
            txt = firstOperand + secondOperand;
            break;
        case "-":
            txt = firstOperand - secondOperand;
            break;
        case "*":
            txt = firstOperand * secondOperand;
            break;
        case "/":
            txt = firstOperand / secondOperand;
            break;
    }
}
function getFirstOperand(){
    if (display.innerText.includes('.')) {
        firstOperand = parseFloat(display.innerText);
    }
    else {
        firstOperand = parseInt(display.innerText);
    }
}
function getSecondOperand(){
    if (display.innerText.includes('.')) {
        secondOperand = parseFloat(display.innerText);
    }
    else {
        secondOperand = parseInt(display.innerText);
    }
}