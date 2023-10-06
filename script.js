let display = document.getElementById('display');
let memory = 0;

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function addToMemory() {
    memory += parseFloat(display.value);
}

function subtractFromMemory() {
    memory -= parseFloat(display.value);
}

function recallMemory() {
    display.value = memory;
}

function calculateResult() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
