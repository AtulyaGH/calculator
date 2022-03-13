

var txt = null;
var firstOperand;
var secondOperand;
var operation;
function seven() {
    txt = "7";
    document.getElementById('display').innerHTML += txt;
}
function eight() {
    txt = "8";
    document.getElementById('display').innerHTML += txt;
}
function nine() {
    txt = "9";
    document.getElementById('display').innerHTML += txt;
}
function four() {
    txt = "4";
    document.getElementById('display').innerHTML += txt;
}
function five() {
    txt = "5";
    document.getElementById('display').innerHTML += txt;
}
function six() {
    txt = "6";
    document.getElementById('display').innerHTML += txt;
}
function dot() {
    if (document.getElementById('display').innerText.includes('.')) {
        return;
    }
    else {
        if (document.getElementById('display').innerHTML === "") {
            txt = "0.";
        }
        else {
            txt = ".";
        }
        document.getElementById('display').innerHTML += txt;
    }
}
function three() {
    txt = "3";
    document.getElementById('display').innerHTML += txt;
}
function one() {
    txt = "1";
    document.getElementById('display').innerHTML += txt;
}
function zero() {
    if (document.getElementById('display').innerText === "") {
        return;
    }
    else {
        txt = "0";
        document.getElementById('display').innerHTML += txt;
    }
}
function two() {
    txt = "2";
    document.getElementById('display').innerHTML += txt;
}
function cleared() {
    document.getElementById('display').innerHTML = "";
    document.getElementById('display1').innerHTML = "";
    firstOperand = undefined;
    secondOperand = undefined;
    operation = undefined;
}
function plus() {
    if (document.getElementById('display').innerText === "" && firstOperand == undefined) {
        return;
    }
    else if (firstOperand == undefined) {
        if (document.getElementById('display').innerText.includes('.')) {
            firstOperand = parseFloat(document.getElementById('display').innerText);
        }
        else {
            firstOperand = parseInt(document.getElementById('display').innerText);
        }
        txt = "+";

        operation = "+";

        document.getElementById('display').innerHTML = "";

        document.getElementById('display1').innerHTML += firstOperand.toString() + txt;

    }
    else if (firstOperand != undefined && operation != undefined && document.getElementById('display').innerText === "") {
        txt = "+";
        document.getElementById('display1').innerHTML = firstOperand + txt;
        operation = "+";
    }
    else if (firstOperand != undefined && document.getElementById('display').innerText !== "" && secondOperand == undefined) {
        if (document.getElementById('display').innerText.includes('.')) {
            secondOperand = parseFloat(document.getElementById('display').innerText);
        }
        else {
            secondOperand = parseInt(document.getElementById('display').innerText);
        }
    }
    else if (firstOperand != undefined && secondOperand != undefined && operation != undefined) {
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
        firstOperand = txt;
        secondOperand = undefined;
        operation = "+";
        document.getElementById('display1').innerHTML = firstOperand + "+";
        document.getElementById('display').innerHTML = "";
    }
}
function minus() {
    if (document.getElementById('display').innerText === "" && firstOperand == undefined) {
        return;
    }
    else if (firstOperand == undefined) {
        if (document.getElementById('display').innerText.includes('.')) {
            firstOperand = parseFloat(document.getElementById('display').innerText);
        }
        else {
            firstOperand = parseInt(document.getElementById('display').innerText);
        }
        txt = "-";

        operation = "-";

        document.getElementById('display').innerHTML = "";

        document.getElementById('display1').innerHTML += firstOperand.toString() + txt;

    }
    else if (firstOperand != undefined && document.getElementById('display').innerText === "" && operation != undefined) {
        txt = "-";
        document.getElementById('display1').innerHTML = firstOperand + txt;
        operation = "-";
    }
    else if (firstOperand != undefined && document.getElementById('display').innerText !== "" && secondOperand == undefined) {
        if (document.getElementById('display').innerText.includes('.')) {
            secondOperand = parseFloat(document.getElementById('display').innerText);
        }
        else {
            secondOperand = parseInt(document.getElementById('display').innerText);
        }
    }
    else if (firstOperand != undefined && secondOperand != undefined && operation != undefined) {
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
        firstOperand = txt;
        secondOperand = undefined;
        operation = "-";
        document.getElementById('display1').innerHTML = firstOperand + "-";
        document.getElementById('display').innerHTML = "";
    }
}
function into() {
    if (document.getElementById('display').innerText === "" && firstOperand == undefined) {
        return;
    }
    else if (firstOperand == undefined) {
        if (document.getElementById('display').innerText.includes('.')) {
            firstOperand = parseFloat(document.getElementById('display').innerText);
        }
        else {
            firstOperand = parseInt(document.getElementById('display').innerText);
        }
        txt = "&times;";

        operation = "*";

        document.getElementById('display').innerHTML = "";

        document.getElementById('display1').innerHTML += firstOperand.toString() + txt;

    }
    else if (firstOperand != undefined && document.getElementById('display').innerText === "" && operation != undefined) {
        txt = "&times;";
        document.getElementById('display1').innerHTML = firstOperand + txt;
        operation = "*";
    }
    else if (firstOperand != undefined && document.getElementById('display').innerText !== "" && secondOperand == undefined) {
        if (document.getElementById('display').innerText.includes('.')) {
            secondOperand = parseFloat(document.getElementById('display').innerText);
        }
        else {
            secondOperand = parseInt(document.getElementById('display').innerText);
        }
    }
    else if (firstOperand != undefined && secondOperand != undefined && operation != undefined) {
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
        firstOperand = txt;
        secondOperand = undefined;
        operation = "*";
        document.getElementById('display1').innerHTML = firstOperand + "&times;";
        document.getElementById('display').innerHTML = "";
    }
}
function numdiv() {
    if (document.getElementById('display').innerText === "" && firstOperand == undefined) {
        return;
    }
    else if (firstOperand == undefined) {
        if (document.getElementById('display').innerText.includes('.')) {
            firstOperand = parseFloat(document.getElementById('display').innerText);
        }
        else {
            firstOperand = parseInt(document.getElementById('display').innerText);
        }
        txt = "&div;";

        operation = "/";

        document.getElementById('display').innerHTML = "";

        document.getElementById('display1').innerHTML += firstOperand.toString() + txt;

    }
    else if (firstOperand != undefined && document.getElementById('display').innerText === "" && operation != undefined) {
        txt = "&div;";
        document.getElementById('display1').innerHTML = firstOperand + txt;
        operation = "/";
    }
    else if (firstOperand != undefined && document.getElementById('display').innerText !== "" && secondOperand == undefined) {
        if (document.getElementById('display').innerText.includes('.')) {
            secondOperand = parseFloat(document.getElementById('display').innerText);
        }
        else {
            secondOperand = parseInt(document.getElementById('display').innerText);
        }
    }
    else if (firstOperand != undefined && secondOperand != undefined && operation != undefined) {
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
        firstOperand = txt;
        secondOperand = undefined;
        operation = "/";
        document.getElementById('display1').innerHTML = firstOperand + "&div;";
        document.getElementById('display').innerHTML = "";
    }
}
function equals() {
    if (firstOperand == undefined) {
        return
    }
    else if (firstOperand != undefined && operation != undefined && secondOperand == undefined) {
        if (document.getElementById('display').innerText.includes('.')) {
            secondOperand = parseFloat(document.getElementById('display').innerText);
        }
        else if (firstOperand != undefined && operation != undefined && document.getElementById('display').innerHTML === "" && secondOperand == undefined) {
            txt = firstOperand;
            document.getElementById('display').innerHTML = txt; document.getElementById('display1').innerHTML = "";
            firstOperand = undefined;
            operation = undefined;
        }
        else {
            secondOperand = parseInt(document.getElementById('display').innerText);
        }
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
        firstOperand = undefined;
        secondOperand = undefined;
        operation = undefined;
        document.getElementById('display1').innerHTML = "";
        document.getElementById('display').innerHTML = txt;
    }
}
function percent() {
    if (document.getElementById('display').innerText === "") {
        return;
    }
    else if (firstOperand == undefined) {
        if (document.getElementById('display').innerText.includes('.')) {
            firstOperand = parseFloat(document.getElementById('display').innerText);
        }
        else {
            firstOperand = parseInt(document.getElementById('display').innerText);
        }
        txt = "%";

        document.getElementById('display').innerHTML = firstOperand / 100;

        document.getElementById('display1').innerHTML += "";
        firstOperand = undefined;
        txt = undefined;
    }
}
function del() {
    if (document.getElementById('display').innerText === "" && document.getElementById('display1').innerText === "") {
        return;
    }
    else if (document.getElementById('display').innerText !== "") {
        txt = document.getElementById('display').innerHTML.toString();
        document.getElementById('display').innerHTML = txt.slice(0, -1);
    }
    else if (document.getElementById('display').innerText === "" && document.getElementById('display1').innerText !== "" && operation != undefined && firstOperand != undefined) {
        operation = undefined;
        firstOperand = undefined;
        txt = document.getElementById('display1').innerHTML.toString();
        document.getElementById('display').innerHTML = txt.slice();
        document.getElementById('display1').innerHTML = "";
    }
}
function pm() {
    if (document.getElementById('display').innerText === "") {
        document.getElementById('display').innerHTML = "-";
    }
    else if (document.getElementById('display').innerText !== "") {
        if (document.getElementById('display').innerText.includes('.')) {
            txt = parseFloat(document.getElementById('display').innerText);
            if(txt.toString().includes("-")){
                txt=txt*(-1);
            }
            else{
                txt="-"+txt;
            }
        }
        else {
            txt = parseInt(document.getElementById('display').innerText);
            if(txt.toString().includes("-")){
                txt=txt*(-1);
            }
            else{
                txt="-"+txt;
            }
        }
        document.getElementById('display').innerHTML=txt;
    }
}
