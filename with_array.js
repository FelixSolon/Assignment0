// Code written in Javascript, with intent to run in the browser.

// Set up constants pointing to the DOM elements used later.
const integerInput = document.getElementById("integer");
const form = document.getElementById("input");
const resetButton = document.getElementById("reset");
const largestDisplay = document.getElementById("largest");
const smallestDisplay = document.getElementById("smallest");
const countDisplay = document.getElementById("count");
const errorDisplay = document.getElementById("error");

// Set up global to hold integers so it can be added to and cleared from various functions.
let integers = [];

// Handle integer submission. Reponsible for determining whether to push an input to the array
// display results, or display an error. This and the displayResults function are the core of the logic
// with various helper functions defined afterwards.
form.addEventListener("submit", (event) => {
    // Prevent default behavior of refreshing the page
    event.preventDefault();
    // Focus back on the integer input to allow typing and hitting enter to input numbers
    integerInput.focus();
    // Force the input to be treated as a number instead of a string
    const value = +integerInput.value;
    // Empty the input field now that we have the value to work with
    integerInput.value = "";
    // Exit event handler, displaying results, for an input of -1
    if (value === -1) {
        return displayResults();
    } else if (value < 1) {
        return displayError("Negative value or 0 detected! Please only submit positive integers or -1 to exit.")
    } else {
        setDisplayText(errorDisplay, "");
    }
    // If the value is a number, push it into the integer array, otherwise ignore it.
    if (!isNaN(value)) {
        integers.push(value);
    } else {
        // If somehow a non-number gets submitted, display an error. Should never happen if the input field worked correctly, but just in case.
        return displayError("Detected some value other than a number. Please only submit positive integers, or -1 to display results.");
    }
});

// The core of the comparison logic is here
function displayResults() {
    if (!integers.length) {
        return displayError("No numbers submitted");
    } else {
        setDisplayText(errorDisplay, "");
    }
    let largest = integers[0];
    let smallest = integers[0];
    integers.forEach((integer) => {
        if (integer > largest) {
            largest = integer;
        } else if (integer < smallest) {
            smallest = integer;
        }
    });
    setDisplayText(largestDisplay, "Largest number: " + largest);
    setDisplayText(smallestDisplay, "Smallest number: " + smallest);
    setDisplayText(countDisplay, "Total Number: " + integers.length);
    integers = [];
}

function resetValues() {
    integers = [];
}

resetButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetValues();
    clearDisplay();
});

// Take in an HTML node, e.g. a <p> tag, <span>, etc. and the new text it should have, and set the text.
function setDisplayText(node, text) {
    node.textContent = text;
}

function clearDisplay() {
    setDisplayText(errorDisplay, "");
    setDisplayText(largestDisplay, "");
    setDisplayText(smallestDisplay, "");
    setDisplayText(countDisplay, "");
}

resetButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetValues();
    clearDisplay();
})

function displayError(message) {
    clearDisplay();
    setDisplayText(errorDisplay, "An error occurred: " + message);
}