// TODO: Write a function that accepts an array of strings. Return the longest string in the array.
const arrayOfStrings = ["hello", "goodbye", "see you later"];

const longestString = arrayOfStrings.sort(
    checkLengthOfString = (stringA, stringB) => {
        return stringA.length - stringB.length;
    }
)[0];

console.log(longestString);