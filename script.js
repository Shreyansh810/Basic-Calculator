const display = document.getElementById("display");

function appendSymbol(input) {
    display.value += input;
}

function clearInput() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}