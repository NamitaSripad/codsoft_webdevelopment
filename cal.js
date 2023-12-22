let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        playSuccessSound();
    } catch (error) {
        display.textContent = 'Error';
        playErrorSound();
    }
}

function playSuccessSound() {
    const successSound = new Audio('success.mp3'); // Replace with the path to your success sound
    successSound.play();
}

function playErrorSound() {
    const errorSound = new Audio('error.mp3'); // Replace with the path to your error sound
    errorSound.play();
}
