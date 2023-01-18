var displayDiv = document.querySelector("#display");

var numArray = [];
var resultArray = [];

var result = 0;

function press(element) {
    displayDiv.innerText = element;
    resultArray.push(element);
    console.log("num:", resultArray);
}

function setOP(operator) {
    // displayDiv.innerText = operator;
    resultArray.push(operator);
    console.log("operator:", resultArray);
}

function calculate() {
    if (resultArray.length != 3) {
        displayDiv.innerText = 0;
    }
    else {
        if (resultArray[1] == '/') {
            result = resultArray[0] / resultArray[2]
        }
        else if (resultArray[1] == '*') {
            result = resultArray[0] * resultArray[2]
        }
        else if (resultArray[1] == '+') {
            result = resultArray[0] + resultArray[2]
        }
        else if (resultArray[1] == '-') {
            result = resultArray[0] - resultArray[2]
        }
        displayDiv.innerText = result;
    }
}

function clr(){
    resultArray = [];
    displayDiv.innerText = 0;
}

 // need to deal with dicimal
 // need to deal with multi-digit number
// need to deal with 3 items but the middle is not an operator
