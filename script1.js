var displayDiv = document.querySelector("#display");

var currentDisplayNum = ""
var operatorArray = [];  // store operator user input

var decimalCount = 0;

var result = 0;

var inputNumber = false;

function press(element) {
    var displayNum = element;
    // counting decimals that only 1 decimal will be added
    if(displayNum === "." && decimalCount < 1 ){
        decimalCount ++;
    }
    else if(displayNum === "." && decimalCount >= 1){
        displayNum = "";
    }
    console.log("display num:", displayNum)
    console.log("Decimal Count:", decimalCount)
    currentDisplayNum += displayNum //concate numbers to have multi-digit number
    displayDiv.innerText = currentDisplayNum;
    console.log(typeof currentDisplayNum);  // need to deal with data type. current data type is string
    return currentDisplayNum
}

function setOP(operator) {
    displayDiv.innerText = operator;
    operatorArray.push(operator);
    console.log("operator:", operatorArray);
}

// the following codes need to to be updated

// function calculate() {
//     if (resultArray.length != 3) {
//         displayDiv.innerText = 0;
//     }
//     else {
//         if (resultArray[1] == '/') {
//             result = resultArray[0] / resultArray[2]
//         }
//         else if (resultArray[1] == '*') {
//             result = resultArray[0] * resultArray[2]
//         }
//         else if (resultArray[1] == '+') {
//             result = resultArray[0] + resultArray[2]
//         }
//         else if (resultArray[1] == '-') {
//             result = resultArray[0] - resultArray[2]
//         }
//         displayDiv.innerText = result;
//     }
// }

function clr(){
    currentDisplayNum = "";
    displayDiv.innerText = 0;
}

// need to deal with:
// data type for user input
// calculation
