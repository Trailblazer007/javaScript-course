// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
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

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// function checker(name){
//     if (countries.includes(name)) {
//         return name.toUpperCase();
//     }else countries.push(name)
// }
// console.log(checker("Ethiopia"))
// console.log(countries);

// 1.Slice the first ten countries from the countries array
console.log(countries.slice(0,10));

// 2. Find the middle country(ies) in the countries array
let midCountry = countries[Math.floor(countries.length / 2)];
console.log(`The country at the middle is: ${midCountry}`);


/* 3. Divide the countries array into two equal arrays if it is even. 
If countries array is not even , one more country for the first half.*/
let midIndex = Math.floor(countries.length / 2);
const firstHalf = countries.splice(0, midIndex + 1);
const secondHalf = countries.splice(-midIndex);
console.log(firstHalf);
console.log(secondHalf);
