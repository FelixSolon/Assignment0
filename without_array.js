// Code written in Javascript, with intent to run in the browser.

// Set up constants pointing to the DOM elements used later.
const integerInput = document.getElementById("integer");
const form = document.getElementById("input");
const resetButton = document.getElementById("reset");
const largestDisplay = document.getElementById("largest");
const smallestDisplay = document.getElementById("smallest");
const countDisplay = document.getElementById("count");
const errorDisplay = document.getElementById("error");

// Set up trackers for the largest number so far, the smallest number so far, and the total count of numbers checked.
// Need to be declared outside of the event handler, so they persist between inputs.
let largest = null;
let smallest = null;
let count = 0;

// Handle when the user submits a number. The core of the logic is here, below it are helper functions.
form.addEventListener("submit", (event) => {
    // Prevent native behavior of refreshing the page
    event.preventDefault();
    // Re-focust on the input field so the user can just keep typing and hitting enter to submit numbers (mostly to speed up my testing)
    integerInput.focus();
    // Force the input to be treated as a number instead of a string
    const value = +integerInput.value;
    // Empty the input field now that we have the value to work with
    integerInput.value = "";

    // Check if this should exit and display, or if it should show an error. If no error should be shown, clear the error display to remove old errors.
    if (value === -1) {
        return displayResults();
    } else if (value < 1) {
        return displayError("Negative value or 0 detected! Please only submit positive integers or -1 to exit.")
    } else {
        setDisplayText(errorDisplay, "");
    }
    // If the value is actually a number, count it towards the total and see if we need to update anything. Otherwise ignore it.
    if (!isNaN(value)) {
        count++;
        // If the trackers haven't been initialized (are falsey) or are less than 1 for any reason, reset them as this should be the first value input
        if (!largest || largest < 1) {
            largest = value;
            smallest = value;
        } else if (value > largest) {
            largest = value;
        } else if (value < smallest) {
            smallest = value;
        }
    } else {
        // If somehow a non-number gets submitted, display an error. Should never happen if the input field worked correctly, but just in case.
        return displayError("Detected some value other than a number. Please only submit positive integers, or -1 to display results.");
    }
});

resetButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetValues();
    clearDisplay();
});

function resetValues() {
    largest = null;
    smallest = null;
    count = 0;
}

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

function displayResults() {
    if (!largest) {
        return displayError("No numbers submitted");
    }
    clearDisplay();
    setDisplayText(largestDisplay, "Largest number: " + largest);
    setDisplayText(smallestDisplay, "Smallest number: " + smallest);
    setDisplayText(countDisplay, "Total Number: " + count);
    resetValues();
}

function displayError(message) {
    clearDisplay();
    setDisplayText(errorDisplay, "An error occurred: " + message);
}