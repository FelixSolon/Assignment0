const integerInput = document.getElementById("integer");
const form = document.getElementById("input");
const resetButton = document.getElementById("reset");
const largestDisplay = document.getElementById("largest");
const smallestDisplay = document.getElementById("smallest");
const countDisplay = document.getElementById("count");
const errorDisplay = document.getElementById("error");

let largest;
let smallest;
let count = 0;

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
        count++;
        console.log(value);
        if (!largest || largest < 1) {
            largest = value;
            smallest = value;
        } else if (value > largest) {
            largest = value;
        } else if (value < smallest) {
            smallest = value;
        }
    }
});

function resetValues() {
    largest = null;
    smallest = null;
    count = 0;
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
}) 

function displayResults() {
    if (!largest) {
        return error("No numbers submitted");
    }
    largestDisplay.textContent = "Largest number: " + largest;
    smallestDisplay.textContent = "Smallest number: " + smallest;
    countDisplay.textContent = "Total Number: " + count;
    resetValues();
}

function error(message) {
    errorDisplay.textContent = "An error occurred: " + message;
}