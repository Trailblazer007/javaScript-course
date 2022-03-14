// Exercises: Level 1
// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
firstName = 'Oluwaseun'; 
lastName = 'Fatoye';       
country = 'Estonia'; 
city = 'Rakvere'; 
age = 26; 
isMarried = true; 
year = 2022 

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Check if type of '10' is equal to 10
console.log('10' == 10);

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10);

// 4. Boolean value is either true or false.
// i. Write three JavaScript statements which provide truthy value.
    let creation = "mankind";
    let hobby = "reading";
    let employed = true;

// ii. Write three JavaScript statements which provide falsy value.
    let relationshipStatus = undefined;
    let smokeHistory = null;
    let pregnancyHistory = 0;

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// i. 4 > 3 
console.log(4 > 3);

// ii. 4 >= 3
console.log(4 >= 3);

// iii. 4 < 3
console.log(4 < 3);

// iv. 4 <= 3
console.log(4 <= 3);

// v. 4 == 4
console.log(4 == 4);

// vi. 4 === 4
console.log(4 === 4);

// vii. 4 != 4
console.log(4 != 4);

// viii. 4 !== 4
console.log(4 !== 4);

// ix. 4 != '4'
console.log(4 != '4');

// x. 4 == '4'
console.log(4 == '4');

// xi. 4 === '4'
console.log(4 === '4');

// xii. Find the length of python and jargon and make a falsy comparison statement.
const language = 'python';
console.log(language.length);

const trash = 'jargon';
console.log(trash.length);

console.log(language.length !== trash.length);


// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// i. 4 > 3 && 10 < 12
console.log(4 > 3 && 10 < 12);

// ii. 4 > 3 && 10 > 12
console.log(4 > 3 && 10 > 12);

// iii. 4 > 3 || 10 < 12
console.log(4 > 3 || 10 < 12);

// iv. 4 > 3 || 10 > 12
console.log(4 > 3 || 10 > 12);

// v. !(4 > 3)
console.log(!(4 > 3));

// vi. !(4 < 3)
console.log(!(4 < 3));

// vii. !(false)
console.log(!(false));

// viii. !(4 > 3 && 10 < 12)
console.log(!(4 > 3 && 10 < 12));

// ix. !(4 > 3 && 10 > 12)
console.log(!(4 > 3 && 10 > 12));

// x. !(4 === '4')
console.log(!(4 === '4'));
// xi. There is no 'on' in both dragon and python
    //previously the value 'python' was assigned to the variable 'python'
animal = 'dragon';
let languageFact = language.includes('on');
let animalFact = animal.includes('on');

console.log(!(animalFact && languageFact)); //added some stuff


// 7. Use the Date object to do the following activities

const now = new Date();

// i. What is the year today?
console.log(now.getFullYear());

// ii. What is the month today as a number?
const month = now.getMonth() + 1;
console.log(month);

// iii. What is the date today?
const date = now.getDate();
console.log(date);

// iv. What is the day today as a number?
const day = now.getDay() + 1;
console.log(day); 

// v. What is the hours now?
const hours = now.getHours();
console.log(hours);

// vi. What is the minutes now?
const minutes = now.getMinutes();
console.log(minutes);

// vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.
const seconds = now.getSeconds();
console.log(seconds);


// Exercises: Level 2
// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// const base = prompt('Enter the triangle base:', 'Enter value here');
// const height = prompt('Enter the triangle height:', 'Enter value here');

// const area = 0.5 * base * height;
// console.log(`The area of the triangle is ${area} sq units`);             

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

// 2. Write a script that prompts the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// const sideA = parseInt(prompt('Enter side a', 'Enter value here'));
// const sideB = parseInt(prompt('Enter side b', 'Enter value here'));
// const sideC = parseInt(prompt('Enter side c', 'Enter value here'));

// const perimeter = sideA + sideB + sideC;
// console.log(`The perimeter of the triangle is ${perimeter} units`);      

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// const length = parseInt(prompt('Enter length here:'));
// const width = parseInt(prompt('Enter width here:'));

// const perimeter = 2 * (length + width);
// const area = length * width;

// console.log(`The perimeter of the rectangle is ${perimeter} units`);
// console.log(`The area of the rectangle is ${area} sq units`);

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// const pi = Math.PI;
// let r = parseInt(prompt('Enter r below:'));
// const areaOfCircle = pi * r**2 ;
// const circumference = 2 * pi * r; 

// console.log(`The area of the circle is ${areaOfCircle} sq units`);
// console.log(`The perimeter of the circle is ${circumference} units`);


// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// let x = 0;
// let y = 2*x - 2;
// console.log(`The y - intercept is ${y}`);

// y = 0;
// x = 2/2;
// console.log(`The x - intercept is ${x}`);

// slopeOne = 

// 6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
// let x1 = 2;
// let y1 = 2;
// let x2 = 6;
// let y2 = 10; 
// const slopeTwo = ((y2 - y1) / (x2 - x1));
// console.log(slopeTwo);

// 7. Compare the slope of above two questions.
// console.log(slopeOne == slopeTwo);

// 8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
a = 1;
b = 6;
c = 9;

x1 = (-b + Math.sqrt(b^2 - 4*a*c))/2*a;

x2 = (-b - Math.sqrt(b^2 - 4*a*c))/2*a;

console.log(x1, x2);


// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.

// 11. Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.

// 15. Create a human readable time format using the Date time object

// i. YYYY-MM-DD HH:mm
// ii. DD-MM-YYYY HH:mm
// iii. DD/MM/YYYY HH:mm

// Exercises: Level 3
// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// i.YYY-MM-DD HH:mm eg. 20120-01-02 07:05
