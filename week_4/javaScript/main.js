//Exercises: Level 1
// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

//Using Ternary statements

// adultAge = 18;

// userInput = prompt("Enter your age");
// userInput >= 18
// ? console.log("You are old enough to drive")
// : console.log(`You are left with ${adultAge - userInput} years to drive`);


//Using If, Else and Else If statements

// userInput = prompt("Enter your age");
// adultAge = 18;
// if (userInput >= adultAge){
//     console.log("You are old enough to drive")
// }else if (userInput < 18){
//     console.log(`You are left with ${adultAge - userInput} years to drive`)
// }else{
//     console.log("Please enter a valid number")
// }

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// myAge = prompt("Enter your age", "This value is for myAge");
// yourAge = prompt("Enter your age", "This value is for yourAge");

// if (myAge == yourAge ){
//     console.log("We are age mates")
// }else if (myAge > yourAge){
//     console.log(
//         myAge - yourAge == 1
//         ? `I am ${myAge - yourAge} year older than you`
//         : `I am ${myAge - yourAge} years older than you`
//     );
// }else{
//     console.log(`You are ${yourAge - myAge} years older than me`)
// }

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
// i. using if else
// let a = prompt("Enter the value of a");
// let b = prompt("Enter the value of b");

// if (a > b){
//     console.log('a is greater than b')
// }else{
//     console.log('a is less than b')
// };

// ii. using ternary operator
// let a = prompt("Enter the value of a");
// let b = prompt("Enter the value of b");

// a > b
// ? console.log('a is greater than b')
// : console.log('a is less than b');

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// let num = parseInt(prompt("Enter the number to be checked"));
// if (num % 2 == 0){
//     console.log(`${num} is an even number`)
// }else{
//     console.log(`${num} is an odd number`)
// };


// Exercises: Level 2
// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let grade = parseInt(prompt("Enter your score here"));

// if (grade >= 80 && grade <= 100){
//     console.log("A")
// }else if(grade >= 70 && grade <= 89){
//     console.log("B")
// }else if(grade >= 60 && grade <= 69){
//     console.log("C")
// }else if(grade >= 50 && grade <= 59){
//     console.log("D")
// }else(grade >= 0 && grade <= 49){
//     console.log("F")
// }