var displayDiv = document.querySelector("#display");

// var numArray = [];
// var resultArray = [];
var currentDisplayNum = ""

var result = 0;

var inputNumber = false;

function press(element) {
    var displayNum = element;
    currentDisplayNum += displayNum  //concate numbers to have multi-digit number
    console.log("current display: num:", currentDisplayNum);
    console.log("display: num:", displayNum);
    displayDiv.innerText = currentDisplayNum;
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
    currentDisplayNum = "";
    displayDiv.innerText = 0;
}

 // need to deal with dicimal
// need to deal with 3 items but the middle is not an operator
