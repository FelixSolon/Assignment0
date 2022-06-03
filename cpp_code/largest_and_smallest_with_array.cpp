// This program takes in a series of positive integers from a user, places
// them into an array, and then determines which are the largest and smallest
// integers.
#include <iostream>
#include <array>

int main() {
    int arraySize = 2;
    int *inputIntegers = new int[arraySize];
    int lastIndex = 0;
    int lastUserInput = 0;
    std::cout << "Welcome to the program! Please enter a positive integer, or -1 to exit:\n";
    std::cin >> lastUserInput;
    while (lastUserInput != -1) {
        std::cout << "Last index is " << lastIndex << "\n";
        std::cout << "Array size is " << arraySize << "\n";
        if (lastIndex == arraySize) {
            std::cout << "Need to rezize the array! Old size was " << arraySize << "\n";
            int *temp = new int[arraySize * 2];
            for (int i = 0; i < arraySize; i++) {
                temp[i] = inputIntegers[i];
            }
            arraySize *= 2;
            inputIntegers = temp;
            std::cout << "New array size is " << arraySize << "\n";
        }
        inputIntegers[lastIndex] = lastUserInput;
        lastIndex++;
        std::cout << "Please enter another positive integer, or -1 to exit:\n";
        std::cin >> lastUserInput;
        std::cout << "Value just input is " << lastUserInput << "\n";
    }
    if (lastIndex == 0) {
        std::cout << "I never got any integers, so there's no real way to know what the largest or smallest are, sorry.\n";
        return 0;
    }
    int largestSoFar = inputIntegers[0];
    int smallestSoFar = inputIntegers[0];
    for (int i = 0; i < lastIndex; i++) {
        if (inputIntegers[i] > largestSoFar) {
            largestSoFar = inputIntegers[i];
        } else if (inputIntegers[i] < smallestSoFar) {
            smallestSoFar = inputIntegers[i];
        }
    }
    std::cout << "The largest integer in the sequence was " << largestSoFar << "\n";
    std::cout << "The smallest integer in the sequence was " << smallestSoFar << "\n";
    std::cout << "The total number of valid numbers entered was " << lastIndex << "\n";
    std::cout << "Thanks for using this program!";
    return 0;
}