// Exercises: Level 1

// 1. Declare a function fullName and it print out your full name.

    // function fullName() {
    //     console.log("Fatoye Oluwaseun")
    // };
    // console.log(fullName());


// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

    // function fullName(firstName, lastName) {
    //     let wholeName = `${firstName} ${lastName}`;
    //     return wholeName;
    // };
    // console.log(fullName("Fatoye", "Oluwaseun"));

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.

    // function addNumbers(param1, param2){
    //     let sum = 0;
    //     sum = Number(param1 + param2);
    //     return sum;
    // }
    // console.log(addNumbers(5,6));

/* 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates 
areaOfRectangle. */

    // function areaOfRectangle(length, width){
    //     let area = length * width;
    //     return area;
    // }
    // console.log(areaOfRectangle(4,5));

/* 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which 
calculates perimeterOfRectangle. */

    // const perimeterOfRectangle = (length, width) => {
    //     let perimeter = 2 * (length + width);
    //     return perimeter;
    // } 
    // console.log(perimeterOfRectangle(3,9));

/* 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which 
calculates volumeOfRectPrism. */ 

    // const volumeOfRectPrism = (length, width, height) => {
    //     let volume =  (length * width *height);
    //     return volume;
    // } 
    // console.log(volumeOfRectPrism(3, 9, 2));


// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

    // function areaOfCircle(r){
    //     let area = Math.PI * r**2;
    //     return area;
    // }
    // console.log(areaOfCircle(7));

/* 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates 
circumOfCircle */

    // function circumOfCircle(r){
    //     let circumference = 2 * Math.PI * r;
    //     return circumference;
    // }
    // console.log(circumOfCircle(7));


// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

    // function densityCalc(mass, volume) {
    //     let density = mass / volume;
    //     return density;
    // }
    // console.log(densityCalc(54, 670));

/* 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time 
taken. Write a function which calculates a speed of a moving object, speed. */

    // function speedCalc(distance, time){
    //     let speed = distance / time;
    //     return speed + " m/s"
    // }
    // console.log(speedCalc(45, 23));

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

    // function weightCalc(mass, gravity){
    //     let weight = mass * gravity;
    //     return weight;
    // }
    // console.log(weightCalc(6, 9.8));

/* 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which converts 
oC to oF convertCelsiusToFahrenheit. */

    // function convertCelsiusToFahrenheit(celsius){
    //     let farTemp = (celsius * (9/5)) + 32;
    //     return farTemp;
    // }
    // console.log(convertCelsiusToFahrenheit(37.4));

/* 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function 
which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
Check if a person is underweight, normal, overweight or obese based the information given below. */
    // i. The same groups apply to both men and women.
    // ii. Underweight: BMI is less than 18.5
    // iii. Normal weight: BMI is 18.5 to 24.9
    // iv. Overweight: BMI is 25 to 29.9
    // v. Obese: BMI is 30 or more

    // function bmiCalc(weight, height){
    //     let bmi = weight / (height ** 2);

    //     if(bmi < 18.5){
    //         console.log("Underweight")
    //     }else if(bmi >= 18.5 || bmi <= 24.9){
    //         console.log("Normal weight")
    //     }else if(bmi >= 25 || bmi <= 29.9){
    //         console.log("Overweight")
    //     }else if(bmi >= 30){
    //         console.log("Obese")
    //     }else{console.log("Please enter valid inputs")};

    //     return bmi;
    // }
    // console.log(bmiCalc(90, 2));


/* 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, 
Spring or Summer. */

    // function checkSeason(month){
    //     if(month == "december" || month == "january" || month == "february"){
    //         return 'Autumn';
    //     }
    //     else if(month == "march" || month == "april" || month == "may"){
    //         return 'Spring';
    //     }
    //     else if(month == "june" || month == "july" || month == "august"){
    //         return 'Summer';
    //     }
    //     else if(month == "september" || month == "october" || month == "november"){
    //         return 'Autumn';
    //     }
    //     else{
    //         return 'oops! Something went horribly wrong'
    //     }
    // }
    // console.log(checkSeason("may"));


/* 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their 
maximum with out using Math.max method. */

    // function findMax(one, two, three){
    //     let result;
    //     if(one > two && one > three){
    //         return one;
    //     }
    //     else if(two > one && two > three){
    //         return two;
    //     }
    //     else if(three > one && three > two){
    //         return three;
    //     }
    //     else{
    //         return "Oops! something went horribly wrong.";
    //     }
        
    // }

    // console.log(findMax(0, 10, 5))
    // 10
    // console.log(findMax(0, -10, -2))
    // 0


// Exercises: Level 2

/* 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear 
equation, solveLinEquation. */
    // // y = 8x + 9. 

    // const solveLinEquation = (a,b,c) => {   // a, b and c are just coefficients 
    //     let m = a/b;            // 'm' is the slope


    //     let c1 = -c/b;           // 'c1' is the intercept

    //     console.log(m, c1);
    // }
    
    // solveLinEquation(8, 1, -9);
    
/* 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values 
of a quadratic equation, solveQuadEquation. */

    // const solveQuadratic = (a, b, c) => {
    //     let x1 = (-b + Math.sqrt(b**2 - 4*a*c))/2*a;

    //     let x2 = (-b - Math.sqrt(b**2 - 4*a*c))/2*a;

    //     if(x1 === x2){
    //         console.log(x1)
    //     }else{
    //         console.log(x1, x2);
    //     }

    // }
    // console.log(solveQuadratic(3, -5, -2))

    // console.log(solveQuadratic()) // {0}
    // console.log(solveQuadratic(1, 4, 4)) // {-2}
    // console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    // solveQuadratic(1, 7, 12) // {-3, -4}
    // console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    // console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

    // const printArray = (arr) => {
    //    for(const element of arr){
    //        console.log(element);
    //    }

    // }
    // printArray([2,4,5]);

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

    // function showDateTime(){
    //     const now = new Date();

    //     const date = now.getDate();
    //     const month = now.getMonth() + 1;
    //     const year = now.getFullYear();
    //     const hour = now.getHours();
    //     const minutes = now.getMinutes();

    //     console.log(`${date}/${month}/${year} ${hour}:${minutes}`);
    // }
    // showDateTime()

    // showDateTime()
    // 08/01/2020 04:08

// 5. Declare a function name swapValues. This function swaps value of x to y.

    // function swapValues(x,y){
    //     console.log(y,x);
    // }

    // swapValues(3, 4) // x => 4, y=>3
    // swapValues(4, 5) // x = 5, y = 4

/* 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array 
(don't use method). */

    // function reverseArray(arr){
    //     for(i=arr.length; i>=0; i--){
    //     console.log(arr[i]);
    //     }
    // }

    // console.log(reverseArray([1, 2, 3, 4, 5]))
    // //[5, 4, 3, 2, 1]
    // console.log(reverseArray(['A', 'B', 'C']))
    // //['C', 'B', 'A']

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

    // function capitalizeArray(arr){
    //     for(let i=0; i<arr.length; i++){
    //         console.log(arr[i].toUpperCase());
    //     }
       
    // }
    // capitalizeArray(['man', 'sex', 'woman'])

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

        // function addItem(item){
        //     let arr = [];
        //     arr.push(item);
        //     console.log(arr);
        // }
        // addItem('sickler');

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

    // function removeItem(arr, n){
    //     arr.splice(n,1)
    //     console.log(arr);
    // }
    // console.log(removeItem([2,3,5,9,7,6], 3));

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

    // function sumOfNumbers(m){
    //     let sum = 0;
    //     for(let i = 0; i<= m; i++)
    //         sum += i;
    //         return sum;
    // }
    //     console.log(sumOfNumbers(5));

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

    // function sumOfOdds(k){
    //     let sum = 0;
    //     for(let i = 0; i<= k; i++){
    //         if(i % 2 !== 0){
    //             sum += i;
    //         } 
    //     } return sum
            
    // }
    // console.log(sumOfOdds(5))

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

    // function sumOfOdds(w){
    //     let sum = 0;
    //     for(let i = 0; i<= w; i++){
    //         if(i % 2 == 0){
    //             sum += i;
    //         } 
    //     } return sum
            
    // }
    // console.log(sumOfOdds(5))


/* 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens 
and odds in the number. */

    // function evensAndOdds(k){
    //     let countEven;
    //     let countOdd;

    //     const oddArr = [];
    //     const evenArr = [];
    //     for(let i=1; i<=k; i++){
    //         if(i % 2 !== 0){
    //             oddArr.push(i);
    //         }
    //         else if(i % 2 == 0){
    //             evenArr.push(i);
    //         }
    //         countOdd = oddArr.length;
    //         countEven = evenArr.length;
            
    //     }
    //     console.log(`The number of odds are ${countOdd}.`);
    //     console.log(`The number of evens are ${countEven}.`);
        
    // }
    // evensAndOdds(9);

    // evensAndOdds(100);
    // The number of odds are 50.
    // The number of evens are 51.

// 14. Write a function which takes any number of arguments and return the sum of the arguments

    // function sum(){
    //     let summ = 0;
    //     for(let i = 0; i < arguments.length; i++){
    //         summ += arguments[i];
    //     }
        
    //     return summ;
    // }

    // console.log(sum(1, 2, 3)) // -> 6
    // sum(1, 2, 3, 4) // -> 10

// 15. Write a function which generates a randomUserIp.

    // const randomUserIp = () => {
    //     let a = Math.floor(Math.random() * 256);
    //     let b = Math.floor(Math.random() * 256);
    //     let c = Math.floor(Math.random() * 256);
    //     let d = Math.floor(Math.random() * 256);
    //     return `${a}.${b}.${c}.${d}`;
    // }
    // console.log(randomUserIp())

// 16. Write a function which generates a randomMacAddress

    // function randomHexGenerator(numChar) {
    //     return Math.floor(Math.random() * Math.pow(16, numChar)).toString('16').padStart(numChar,'0');
    // };

    // function randomMacAddress(){
    //     let a = randomHexGenerator(2);
    //     let b = randomHexGenerator(2);
    //     let c = randomHexGenerator(2);
    //     let d = randomHexGenerator(2);
    //     let e = randomHexGenerator(2);
    //     let f = randomHexGenerator(2);
        
    //     return `${a}:${b}:${c}:${d}:${e}:${f}`;
    // }
    // console.log(randomMacAddress());

/* 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal 
number. The function return the hexadecimal number. */

    // function randomHexaNumberGenerator(){
    //     let randerTwo = Math.ceil(Math.random() + 3);
    //     let rander = Math.ceil((Math.random() * Math.pow(14, randerTwo))).toString('16');
    //     return rander;
    // }

    // console.log(randomHexaNumberGenerator());
    // '#ee33df'

/* 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The 
function return the id. */

    // function userIdGenerator(){
    //     let newId = Math.floor(Math.random() * Math.pow(12, 7)).toString('16').padEnd(7, '5');
    //     return newId;
    // }

    // console.log(userIdGenerator());
    // 41XTDbE

// Exercises: Level 3

/* 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter
 but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number 
 of ids which are supposed to be generated. */

    // const userIdGeneratedByUser = () =>{

    //     let noOfChar = parseInt(prompt('Enter number of characters'));
    //     let noOfId = parseInt(prompt('How many IDs do you want?'));

    //     function randomIdGenerator(x) { //       - this function returns a random number with 'x' characters
    //        return Math.floor(Math.random() * Math.pow(19, x)).toString('32').padStart(x, '#');
    //     };
        
    //     for(i=1; i<=noOfId; i++){console.log(randomIdGenerator(noOfChar))};  // returns the generated id for 'noOfId' times

    
    // }
    // userIdGeneratedByUser();


    // 'kcsy2
    // SMFYb
    // bWmeq
    // ZXOYh
    // 2Rgxf
    // '

    // userIdGeneratedByUser()
    // '1GCSgPLMaBAVQZ26
    // YD7eFwNQKNs7qXaT
    // ycArC5yrRupyG00S
    // UbGxOFI7UXSWAyKN
    // dIV0SSUTgAdKwStr
    // '

// 2. Write a function name rgbColorGenerator and it generates rgb colors.

    // rgbColorGenerator()
    // rgb(125,244,255)

    // const rgbColorGenerator = () => {
    //     let a = Math.floor(Math.random() * 256);
    //     let b = Math.floor(Math.random() * 256);
    //     let c = Math.floor(Math.random() * 256);
        
    //     console.log(`rgb(${a}, ${b}, ${c})`);
    // }
    // rgbColorGenerator();
    


// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

// const arrayOfHexaColors = () => {
//     let allHexCodes = '123456789abcdef';
//     let loopCount = parseInt(Math.random() * 50);
//     let hexColorArr = [];
    
//     for(let x=1; x<=loopCount; x++) {
//        let hexChars = [];
//        for (let i = 0; i < 6; i++) {
//           hexChars.push(allHexCodes[parseInt(Math.random() * allHexCodes.length) - 1]);
//        }
//        hexColorArr.push('#' + hexChars.join(''));
//     }
//     return hexColorArr;
//   } 
//   console.log(arrayOfHexaColors());

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

// function arrayOfRgbcolors() {
//     let rgbArray = [];
  
//     let randomTimeAppearance = Math.ceil(Math.random() * 65);
   
//     let blue, red, green;
  
//     for (let i = 1; i <= randomTimeAppearance; i++) {
//       red = Math.floor(Math.random() * 256);
//       green = Math.floor(Math.random() * 256);
//       blue = Math.floor(Math.random() * 256);

//       let rgbContainer = (`rgb(${red}, ${green}, ${blue}) `);
//       rgbArray.push(rgbContainer);
//     }
//     return rgbArray;
//   }
  
//   console.log(arrayOfRgbcolors());

            // The function below generates a random number of either RGB or Hexadecimal colours
                    // function generateAnyNoOfColors(){
                            
                    //     let randomLimit = Math.floor(Math.random()* 6.5);
                        
                    //     if(randomLimit % 2 == 0){return arrayOfRgbcolors()}
                    //     return arrayOfHexaColors();
                        
                    // }
                    // console.log(generateAnyNoOfColors());

    

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

    // const convertHexaToRgb = (hex) => {
    //     const r = parseInt(hex.slice(1, 3), 16)
    //     const g = parseInt(hex.slice(3, 5), 16)
    //     const b = parseInt(hex.slice(5, 7), 16)
    //     // return {r, g, b} // return an object
    //     return `rgb(${r}, ${g}, ${b})`
    // }
    // console.log(convertHexaToRgb("#0080C0"));


// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

    // const convertRgbToHexa = (r,g,b) => {
    //     let hexR = r.toString(16).padStart(2, '0');
    //     let hexG = g.toString(16).padStart(2, '0');
    //     let hexB = b.toString(16).padStart(2, '0');

    //     return `#${hexR}${hexG}${hexB}`;
    // }
    // console.log(convertRgbToHexa(0,128,192));


    //Another Method Using regex;
    // function convertToRgb(rgb) {
    //     let [r, g, b] = rgb.match(/\d+/g)
    //     let hexR = Number(r).toString(16).padStart(2,"0")
    //     let hexG = Number(g).toString(16).padStart(2,"0")
    //     let hexB = Number(b).toString(16).padStart(2,"0")
    //         return `#${hexR}${hexG}${hexB}`
    //     }
        
    //     console.log(convertToRgb("15, 128,192"));

    // Another Method Using Split Instead of RegEx;
     // function convertToRgb(rgb) {
    //     let [r, g, b] = rgb.split(",")
    //     let hexR = Number(r).toString(16).padStart(2,"0")
    //     let hexG = Number(g).toString(16).padStart(2,"0")
    //     let hexB = Number(b).toString(16).padStart(2,"0")
    //         return `#${hexR}${hexG}${hexB}`
    //     }
        
    //     console.log(convertToRgb("15, 128,192"));

   
// 7. Write a function generateColors which can generate any number of hexa or rgb colors.
        // const generateColors = (color, amount) => {
            
        //     if(color == 'hexa' || color == 'hex'){
        //         let hexArray = [];
                
        //         for(let i=1; i<=amount; i++){
        //             let hexColR = (Math.floor(Math.random()* 256)).toString(16).padStart(2,"0");
        //             let hexColG = (Math.floor(Math.random()* 256)).toString(16).padStart(2,"0");
        //             let hexColB = (Math.floor(Math.random()* 256)).toString(16).padStart(2,"0");

        //             hexArray.push(`#${hexColR}${hexColG}${hexColB}`);

        //         }if(hexArray.length == 1){return hexArray.join()}return hexArray ;
                
        //     }else if(color == 'rgb'){
        //         let rgbArray = [];

        //        for(let i=1; i<=amount; i++){
        //         let r = Math.floor(Math.random()* 256);
        //         let g = Math.floor(Math.random()* 256);
        //         let b = Math.floor(Math.random()* 256);

        //         rgbArray.push(`rgb(${r}, ${g}, ${b})`)
        //        }if (rgbArray.length == 1){return rgbArray.toString()}return rgbArray;

        //     }else {return 'invalid input'}

        // }
        // console.log(generateColors('rgb', 1));
    

    // console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    // console.log(generateColors('hexa', 1)) // '#b334ef'
    // console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    // console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'


// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

    // const shuffleArray = (arr) => {
    //     return arr.sort();
    // }
    // console.log(shuffleArray(['man', 'cow', 'girl', 'gender', 'football']))


// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

    // const factorial = (n) => {
    //     let product = 1;
    //     for(let i=n; i>= 1; i--){
    //         product *= i;
    //     }return product;
        
    // }
    // console.log(factorial(5));

// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
    // const isEmpty = (arr) => {
    //     if(arr.length == 0){return `array is empty`} return `array is not empty`

    // }
    // console.log(isEmpty([]))

// 11. Call your function sum, it takes any number of arguments and it returns the sum.
    // function sum() {
    //     let adder = 0;
    //     for (let i = 0; i < arguments.length; i++) {
    //         adder += arguments[i]
    //     }
    //     return adder;
    // }
    // console.log(sum(4,6,7));


/* 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items.
 Check if all the array items are number types. If not give return reasonable feedback. */

//     function sumOfArrayItems(arr){
//         let sum = 0;
//         for(element of arr){
//             sum += element
//         }
//         return sum;
//     }
// console.log(sumOfArrayItems([2,5,3]));


/* 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all 
the array items are number types. If not give return reasonable feedback. */

    // function average(arr){
    // let sum = 0;
    // for(element of arr){
    //     sum += element
    // }
    // return sum/element;
    // }
    // console.log(average([2,5,3]));

/* 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return 
the array. If the array length is less than five it return 'item not found'. */
    // function modifyArray(array){
    //    if(array.length <5){return `item not found`}

    //     let capsWord = array[4].toUpperCase();
    //     array.splice(4, 1, capsWord);
    //     return array;
    // };
    

    // console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
    // ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
    // console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
    // ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    //console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));
    //     'Not Found'

// 15. Write a function called isPrime, which checks if a number is prime number.

    // const isPrime = (number) => {
    //     if(number % 2 == 0){
    //         return 'The number is not a prime number'
    //     }return 'The number is a prime number'
    // }
    // console.log(isPrime(5));

// 16. Write a functions which checks if all items are unique in the array.
// function uniqueItem(arr) {
//         // empty object
//     let map = {};
//     let result = false;
//     for(let i = 0; i < arr.length; i++) {
//        // check if object contains entry with this element as key
//        if(map[arr[i]]) {
//           result = true;
//           // terminate the loop
//           break;
//        }
//        // add entry in object with the element as key
//        map[arr[i]] = true;
//     }
//     if(result) {
//        return 'Array contains duplicate elements';
//     } else {
//        return'Array does not contain duplicate elements';
//     }
//  }
// console.log(uniqueItem(['a', 1, 'a', 2, '1']))

// 17. Write a function which checks if all the items of the array are the same data type.

    // function checkDataType(arr){
    //     let result = true;
    //     for(let i= 1; i<arr.length; i++){
    //         if(typeof(arr[0]) !== typeof(arr[i]) ){
    //             result = false;
    //             break;
    //         }
            
    //     }
    //     return result;
    // }
    // console.log(checkDataType(['a', true, NaN, 60]));
    // console.log(checkDataType(['a', 'bang', undefined, 600]));
    // console.log(checkDataType(['a', 'seven']))

/* 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function 
isValidVariable which check if a variable is valid or invalid variable. */

    // function isValidVariable(word){
    //     let pattern = /[^A-Za-z$_0-9]/gi;
    //     if(pattern.test(word)){
    //         return `invalid variable!`
    //     }      
    //     return `valid varaible!`;
    // }
    // console.log(isValidVariable('%manner'));

// 19.  Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
    // const sevenRandomNumbers = () => {
    //     let arr = [];
    //     while (arr.length < 7) {
    //         let r = Math.floor(Math.random() * 12) + 1;
    //         if (arr.indexOf(r) === -1) arr.push(r);
    //     }
    //     return arr
    //     };

    //     sevenRandomNumbers()
    // [(1, 4, 5, 7, 9, 8, 0)]

/* 20. Write a function called reverseCountries, it takes countries array and first it copies the array and returns the 
reverse of the original array */
//     function reverseCountries(arr){
//         let newArr = [];
//         for(let i = arr.length - 1; i>= 0; i--){
//             newArr.push(arr[i])
//         }
//         return newArr;
//     }
// console.log(reverseCountries(['USA', 'california', 'mexico', 'UK']))





