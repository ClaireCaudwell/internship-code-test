# Emigreat Summer internship code test

Thanks for showing an interest in the Emigreat summer internship program!  In order to submit your code test, please fork this repository and send us a link to your solution together with your cover letter when you respond to the internship advertisement.

## Javascript question: event loop

### Question

In what order will the following numbers be logged, and why?

```
console.log(1)
setTimeout(() ⇒ console.log(3))
setTimeout(() ⇒ console.log(2), 5000)
Promise.resolve(4).then(console.log)
console.log(5)

```

### Answer
1. console.log(1) - First console.log to be printed to the console. This is because it's first in the list and there are no additional parameters that means that the console.log is delayed in being printed to the console.

2. console.log(5) - Second console.log to be printed to the console. It is second because it's lower down the list after the first console.log in the list. Also it doesn't have any additional parameters it needs to consider before printing to the console.

3. Promise.resolve(4).then(console.log) - Third console.log to be printed. This one is new for me, but as I understand it, it isn't printed instantly like the first two console.logs because it's made up of a promise. This means that it gives a promise that a specific result will be returned, until the final result is returned as either completed or failed. In this case this may be the then() method or console.log's 1 and 2, but I'm not entirely sure about it. But what I believe happens in the end is that the then() is executed with console.log and then the promise uses that console.log and adds 4 to it. 

4. setTimeout(() ⇒ console.log(3)) - Fourth in the list to be called. The setTimeout method is read and the function inside it called which then exectutes the console.log. In this case theirs no time limit until the function is called so the console.log will be printed as soon as the function is called.

5. setTimeout(() ⇒ console.log(2), 5000) - Last but not least is this console.log. From when the setTimeout is read there is a 5 millisecond wait until the function is called and the console.log is printed.

## Javascript test: arrays

Write a function that accepts an array of strings. Return the longest string in the array.

### Solution
Provide the solution in the given file: [longestString.js](https://github.com/emigreat-dev/internship-code-test/blob/main/longestString.js)

## CSS test: [https://cssbattle.dev/](https://cssbattle.dev/)
Pick any css battle where the solution requires at least three html elements (or one html element + pseudo elements, e.g. 'before' and 'after').

Submit the resulting css together with a link to the battle you chose.

### Solution
Provide your solution in the given file: [cssBattle.css](https://github.com/emigreat-dev/internship-code-test/blob/main/cssBattle.css)

## Personal project

Provide a link to a personal project that you're proud of and happy to share with us. It can be anything from a component to a system.

### Link to project
The project I'd like to submit is a fullstack project and my final project for the Technigo bootcamp. It's a digital organiser where the user can sign up or login if already created an account. Once logged in the user can create weekly schedules with tasks as well as add post it notes. All was developed using React and Redux on the frontend and Mongoose and MongoDB on the backend. 
https://claires-digital-organiser.netlify.app/
