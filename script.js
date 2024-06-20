let currentNumber = "";
let previousNumber = "";
let operation = "";
let currentOperator = "";
let resultDisplayed = false;

function appendNumber(number) {
    if (resultDisplayed) {
        currentNumber = "";
        resultDisplayed = false;
    }
    currentNumber += number;
    document.getElementById("display").value = currentNumber;
}

function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operation = "";
    currentOperator = "";
    document.getElementById("display").value = "";
}

function calculate() {
    if (operation === "") {
        return;
    }
    let result = 0;
    if (previousNumber !== "" && currentNumber !== "") {
        switch (operation) {
            case "+":
                result = parseFloat(previousNumber) + parseFloat(currentNumber);
                break;
            case "-":
                result = parseFloat(previousNumber) - parseFloat(currentNumber);
                break;
            case "*":
                result = parseFloat(previousNumber) * parseFloat(currentNumber);
                break;
            case "/":
                if (currentNumber === "0") {
                    alert("Error: Division by zero!");
                    return;
                }
                result = parseFloat(previousNumber) / parseFloat(currentNumber);
                break;
        }
    } else {
        return;
    }
    previousNumber = result.toString();
    currentNumber = "";
    operation = "";
    document.getElementById("display").value = result;
    resultDisplayed = true;
}

function setOperation(op) {
    if (currentNumber === "" && previousNumber === "") return;
    if (currentNumber !== "" && previousNumber !== "") {
        calculate();
    } else if (currentNumber !== "") {
        previousNumber = currentNumber;
    }
    currentNumber = "";
    operation = op;
    currentOperator = op;
    document.getElementById("display").value = currentOperator;
    resultDisplayed = false;
}

function deleteLastDigit() {
    if (currentNumber.length > 0) {
        currentNumber = currentNumber.slice(0, -1);
        document.getElementById("display").value = currentNumber;
    }
}
