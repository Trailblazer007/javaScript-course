//Exercises: Level 1
// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

//Using Ternary statements

// adultAge = 18;

// userInput = prompt("Enter your age");
// userInput >= 18
// ? console.log("You are old enough to drive")
// : console.log(`You are left with ${adultAge - userInput} years to drive`);

//Using If, Else and Else If statements

userInput = prompt("Enter your age");
adultAge = 18;
if (userInput >= adultAge){
    console.log("You are old enough to drive")
}else{
    console.log(`You are left with ${adultAge - userInput} years to drive`)
};