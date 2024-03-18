

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

function updateDisplay() {
    document.getElementById('display').value = firstNumber + operator + secondNumber;
}

function getnumber(number) {
    if (operator === '') {
        firstNumber += number;
        document.getElementById('display').value = firstNumber;
    } else {
        secondNumber += number;
        document.getElementById('display').value = secondNumber;
    }
    updateDisplay();
}

function getoperator(op) {
    operator = op;
    updateDisplay();
    document.getElementById('display').value = operator;
}

function clearInput() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    document.getElementById('display').value = '';
    updateDisplay();
}

function calculate() {
    if (firstNumber !== '' && secondNumber !== '') {
        switch (operator) {
            case '+':
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case '-':
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case '*':
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case '/':
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
            default:
                result = '';
        }
        document.getElementById('display').value = result;
        firstNumber = result.toString();
        secondNumber = '';
        operator = '';
    }
}




