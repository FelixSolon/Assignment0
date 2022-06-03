// This program outputs the message "Hello World!" to the monitor
#include <iostream>

int main() {
    int largestSoFar = -1;
    int smallestSoFar = -1;
    int lastUserInput = 0;
    int totalInputs = 0;
    std::cout << "Welcome to the program! Please enter a positive integer, or -1 to exit:\n";
    std::cin >> lastUserInput;
    while (lastUserInput != -1) {
        if (largestSoFar == -1) {
            largestSoFar = lastUserInput;
            smallestSoFar = lastUserInput;
        } else if (lastUserInput > largestSoFar) {
            largestSoFar = lastUserInput;
        } else if (lastUserInput < smallestSoFar) {
            smallestSoFar = lastUserInput;
        }
        totalInputs++;
        std::cout << "Please enter another positive integer, or -1 to exit:\n";
        std::cin >> lastUserInput;
    }

    std::cout << "The largest number in the sequence was " << largestSoFar << "\n";
    std::cout << "The smallest number in the sequence was " << smallestSoFar << "\n";
    std::cout << "The total number of numbers input was " << totalInputs << "\n";
    std::cout << "Thanks for using this program!";
    return 0;
}
