//1. Iterate 0 to 10 using for loop, do the same using while and do while loop

//using for loop
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

// Using for loop

// for(let i = 0; i<countries.length; i++){
//     console.log(countries[i])
// }


// Using while loop

// let i = 0;
// while(i < countries.length){
//     console.log(countries[i])
//     i++
// } 


// Using do while loop

// let i = 0;
// do{
//     console.log(countries[i])
//     i++
// }while(i < countries.length)


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

// Ieterating using for loop

// for(i = 0; i<webTechs.length; i++){
//     console.log(webTechs[i])
// }

// Ieterating using while loop
// let i = 0;
// while(i<webTechs.length){
//     console.log(webTechs[i])
//     i++
// }

// Ieterating using the do while loop
// let i = 0;
// do{
//     console.log(webTechs[i])
//     i++
// }while(i<webTechs.length)


// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

// Using while loop

// let i = countries.length - 1;
// while(i >= 0 ){
//     console.log(countries[i])
//     i--
// } 


// Using do while loop

// let i = countries.length - 1;
// do{
//     console.log(countries[i])
//     i--
// }while(i >= 0)




// For the webTechs

// Ieterating using while loop
// let i = webTechs.length - 1;
// while(i>= 0){
//     console.log(webTechs[i])
//     i--
// }

// Ieterating using the do while loop
// let i = webTechs.length - 1;
// do{
//     console.log(webTechs[i])
//     i--
// }while(i >= 0)


// 3. Iterate 0 to n using for loop

// let n = prompt('Enter a number');
// for(i=0; i<=n; i++){
//     console.log(i)
// }

// Using a function

// function reLoop(n){
//     for(i=0; i<=n; i++){
//         console.log(i)
//     }
// }
// console.log(reLoop(9))

// 4. Write a loop that makes the following pattern using console.log():
    // #
    // ##
    // ###
    // ####
    // #####
    // ######
    // #######

    // for(var i=1; i<=8; i++){
    //     console.log("#".repeat(i));
    // }

// 5. Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// for(let i=0; i<=10; i++){
//  console.log(`${i} * ${i} = ${i*i}`)
// }

// 6. Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

// console.log('i' + '    ' + 'i^2' + '    ' + 'i^3')
// for(let i= 0; i<=10; i++){
//     console.log(`${i}     ${i**2}     ${i**3}`)
// } 


// 7. Use for loop to iterate from 0 to 100 and print only even numbers
// for(let i = 0; i <= 100; i++){
//   if(i % 2 == 0){
//     console.log(i)
//   }
  
// }

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
// for(let i = 0; i <= 100; i++){
//   if(i % 2 !== 0){
//     console.log(i)
//   }
// }

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
// let count = 0;
// let i,j 

// for(j=2;j<=100;j++)
// {
//     for( i=1;i<=j;i++)
//     {
//         if(j%i==0) count++
//     }

//     if(count==2)
//     console.log(j)
//     count=0
    
// }

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum = 0;
// for(let i=0; i<=100; i++){
//   sum += i
// }
// console.log(sum)

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let odd = 0;
// let even = 0;

// for(i=0; i<=100; i++){
//   if(i % 2 == 0){
//     even += i
//   }
// }; 

// for(j=0; j<=100; j++){
//   if(j % 2 !== 0){
//     odd += j
//   }
// }
    

// console.log(`The sum of odd numbers are: ${odd} `);
// console.log(`The sum of even numbers are: ${even} `);


// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// let odd = 0;
// let even = 0;

// for(i=0; i<=100; i++){
//   if(i % 2 == 0){
//     even += i
//   }
// }; 

// for(j=0; j<=100; j++){
//   if(j % 2 !== 0){
//     odd += j
//   }
// }

// arrOddEven = Array();
// arrOddEven.push(even, odd);
// console.log(arrOddEven);

// 13. Develop a small script which generates array of 5 random numbers
// let newArray = [];
// for(let i = 0; i <= 4; i++){
//   randomNo = Math.random()
//   newArray.push(randomNo);
// }
// console.log(newArray)



// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
// let randomToFifty = Math.random() * 50
// nextArr = [];

// for(let k = 0; k <= 4; k++){
//   myValues = (Math.random() + randomToFifty )
//   nextArr.push(myValues)
  
// }console.log(nextArr)

// 15. Develop a small script which generate a six characters random id: 
// 5j2khz

// console.log(Math.floor(Math.random() * Math.pow(16, 6)).toString('16').padStart(6, '0'))

// Exercises: Level 2
// 1. Develop a small script which generate any number of characters random id:
// console.log(Math.floor(Math.random() * Math.pow(16,6)).toString('16'))

// 2. Write a script which generates a random hexadecimal number.
// console.log(Math.floor(Math.random() * Math.pow(16, 6)).toString('16'))

// 3. Write a script which generates a random rgb color number.
// rgb(240,180,80)

// let red = Math.floor(Math.random() * 255);
// let green = Math.floor(Math.random() * 255);
// let blue = Math.floor(Math.random() * 255);


// console.log(`rgb(${red} ${green} ${blue})` )

// 4. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// let countriesToCaps = [];
// for(i = 0; i < countries.length; i++){
//   countriesToCaps.push(countries[i].toUpperCase())
// }
// console.log(countriesToCaps)

// 5. Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

// const countriesLength = [];
// for(k=0; k<countries.length; k++){
//   countriesLength.push(countries[k].length)
// }console.log(countriesLength);

// 6. Use the countries array to create the following array of arrays:

  /*
  [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
  ]
  */

  // const detailedArray = [];
  // for(b=0; b<countries.length; b++){
  //   detailedArray.push([countries[b], countries[b].toUpperCase().slice(0,3), countries[b].length])
  // }console.log(detailedArray.slice());

/* 7. In above countries array, check if there is a country or countries containing
   the word 'land'. If there are countries containing 'land', print it as array. 
   If there is no country containing the word 'land', print 'All these countries are without land'. */
  
  // let countriesWithLand = countries.filter((e) => e.includes('land'));

  // if (countriesWithLand.length > 0){
  //   console.log(countriesWithLand);
  // }
  // else {
  //   console.log("No country found with 'land' in it");
  // }

/* 8. In above countries array, check if there is a country or countries end with a substring 'ia'. 
  If there are countries end with, print it as array. If there is no country containing the word 'ai', 
  print 'These are countries ends without ia'. */

  // let wordWithIa = countries.filter((e) => e.endsWith('ia'));

  //   if(wordWithIa ){
  //     wordWithIa;
  //   }
  //     else{console.log('These are countries that end without -ia')
  //   }
  //   console.log(wordWithIa)


// 9. Using the above countries array, find the country containing the biggest number of characters.

  // let lengthArray = [];

  //   for(let i=0; i<countries.length; i++){
  //     lengthArray.push(countries[i].length)     
  //     }
  //   let longestCountryLength = Math.max(...lengthArray);
  
  //   countries.map((e)=> {
  //     if(e.length === longestCountryLength){
  //         console.log(e)
  //     }
  // })

// 10. Using the above countries array, find the country containing only 5 characters.

  // let fiveChar = countries.filter((e) => e.length === 5)
  // console.log(fiveChar)


// 11. Find the longest word in the webTechs array

  // let lengthArray = [];

  // for(let i=0; i<webTechs.length; i++){
  //   lengthArray.push(webTechs[i].length);
  // };
  
  // let maxLength = Math.max(...lengthArray);

  // webTechs.filter((e) => {
  //   if(e.length === maxLength){
  //     console.log(e)
  //   }
  // })

// 12. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// let newArr = [];

// for(let i=0; i<webTechs.length; i++){
//   newArr.push([webTechs[i], webTechs[i].length]);
// }console.log(newArr);

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

/* 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the 
acronym MERN by using the array mernStack */
// for(let i=0; i<mernStack.length; i++){
//   console.log(mernStack[i][0]);
// }

/* 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a 
for loop or for of loop and print out the items. */

// for(let i=0; i<webTechs.length; i++){
//   console.log(webTechs[i]);
// }

/* 15 This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] 
reverse the order using loop without using a reverse method. */

// const fruits = ['banana', 'orange', 'mango', 'lemon'] ;

// for(let i=fruits.length; i>=0; i--){
//     console.log(fruits[i]);
//   }

// 16. Print all the elements of array as shown below.


  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ] 

// for(let i=0; i<fullStack.length; i++){
//   console.log(fullStack[i].join('\n'))
// }

// using the map method

fullStack.map((e)=> {
  e.map((e)=>console.log(e))
})



  
  
  








