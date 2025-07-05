function appendNumber(num) {
    document.getElementById('display').value += num;
}

function appendOperator(op) {
    let display = document.getElementById('display').value;
    if (display.length > 0 && !isNaN(display[display.length - 1])) {
        document.getElementById('display').value += op;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteOne() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch {
        alert('Format salah!');
    }
}
