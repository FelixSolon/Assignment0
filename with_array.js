const integerInput = document.getElementById("integer");
const form = document.getElementById("input");
const resetButton = document.getElementById("reset");
const largestDisplay = document.getElementById("largest");
const smallestDisplay = document.getElementById("smallest");
const countDisplay = document.getElementById("count");
const errorDisplay = document.getElementById("error");

let integers = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    integerInput.focus();
    clearText();
    const value = +integerInput.value;
    integerInput.value = '';
    if (value === -1) {
        return displayResults();
    } else if (value <= 0) {
        return error("Negative integer or 0 detected! Please only submit positive integers or -1 to exit.")
    }
    if (!isNaN(value)) {
        integers.push(value);
    }
});

function resetValues() {
    integers = [];
}

function clearText() {
    largestDisplay.textContent = "";
    smallestDisplay.textContent = "";
    countDisplay.textContent = "";
    errorDisplay.textContent = "";
}

resetButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetValues();
    clearText();
});

function displayResults() {
    if (!integers.length) {
        return error("No numbers submitted");
    }
    let largest = integers[0];
    let smallest = integers[0];
    integers.forEach((integer) => {
        if (integer > largest) {
            largest = integer;
        } else if (integer < smallest) {
            smallest = integer;
        }
    })
    largestDisplay.textContent = "Largest number: " + largest;
    smallestDisplay.textContent = "Smallest number: " + smallest;
    countDisplay.textContent = "Total Number: " + integers.length;
    integers = [];
}

function error(message) {
    errorDisplay.textContent = "An error occurred: " + message;
}