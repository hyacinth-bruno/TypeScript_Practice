"use strict";
// 1. write a function to check the length of user input as their name
function checkNameLength(name) {
    return name.length;
}
// Example usage:
console.log(checkNameLength("andrea")); // Output: 6
/////////////////////////////////////////////////////////////////////
// 2. write a function to compare the number user insert to the number 3 then display the suitable message
function compareToThree(num) {
    if (num > 3) {
        return `${num} is greater than 3`;
    }
    else if (num < 3) {
        return `${num} is less than 3`;
    }
    else {
        return `${num} is equal to 3`;
    }
}
// Example usage:
console.log(compareToThree(5)); // Output: 5 is greater than 3
console.log(compareToThree(2)); // Output: 2 is less than 3
console.log(compareToThree(3)); // Output: 3 is equal to 3
const users = [
    { name: "andrea", age: 4 },
    { name: "hanna", age: 9 },
];
function hasAgeGreaterThanThree(users) {
    return users.some(user => user.age > 3);
}
// Example usage:
console.log(hasAgeGreaterThanThree(users)); // Output: true
/////////////////////////////////////////////////////////////////////
// 4. write a function takes 2 parameters : an array and userInput to check if the userInput is matched with the user name
function searchName(users, userInput) {
    const user = users.find(user => user.name === userInput);
    return user ? `${userInput} is in the users array` : `${userInput} is not in the users array`;
}
// Example usage:
console.log(searchName(users, "alex")); // Output: alex is not in the users array
console.log(searchName(users, "andrea")); // Output: andrea is in the users array
//////////////////////
// At least 2 ways (another way)
function searchNameAlternative(users, userInput) {
    const isUserFound = users.some(user => user.name === userInput);
    return isUserFound ? `${userInput} is in the users array` : `${userInput} is not in the users array`;
}
// Example usage:
console.log(searchNameAlternative(users, "alex")); // Output: alex is not in the users array
console.log(searchNameAlternative(users, "andrea")); // Output: andrea is in the users array
