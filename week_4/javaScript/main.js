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
myAge = prompt("Enter your age", "This value is for myAge");
yourAge = prompt("Enter your age", "This value is for yourAge");

if (myAge == yourAge){
    console.log("We are age mates")
}else if (myAge > yourAge){
    console.log(`I am ${myAge - yourAge} years older than you`)
}else{
    console.log(`You are ${yourAge - myAge} years older than me`)
}
