const webTechs = [
    'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

// function confirm(lang) {
//     if (webTechs.includes(lang)){
//         return `${lang} is a CSS preprocess`
//     }else{
//         webTechs.push(lang);
//     }
// }
// console.log(confirm('Sass'));
// console.log(webTechs);

// 6. Concatenate the following two variables and store it in a fullStack variable.
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
// const backEnd = ['Node','Express', 'MongoDB'];
// const fullStack = [...frontEnd, ...backEnd];

// console.log(fullStack);

// Exercise Level 3;
// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// i. Sort the array and find the min and max age

// let sortedAges = ages.sort();
// console.log(sortedAges);

// let minAge = sortedAges[0];
// console.log('The minAge is ' + minAge);

// let maxAge = sortedAges[sortedAges.length - 1];
// console.log('The maxAge is ' + maxAge);

// ii. Find the median age(one middle item or two middle items divided by two)
// let sortedAges = ages.sort();
// let medianOdd = sortedAges[Math.floor(sortedAges.length / 2)];

// let medianEven = (sortedAges[Math.floor(sortedAges.length / 2)] + sortedAges[Math.ceil(sortedAges.length / 2)]) / 2

// function medianChecker(){
//     if (sortedAges.length % 2  == 0){
//         return medianEven
//     }
//     else {
//         return medianOdd
//     }
// }
// console.log('The median age is ' + medianChecker() + ' years');


// iii. Find the average age (all items divided by number of items)
let sum = 0;
let average = 0;
function arrayAverage(){
    for(let i = 0; i < ages.length; i++){
         average = (sum += ages[i]) / ages.length;
    } return average;
}
console.log(arrayAverage(ages));


// iv. Find the range of the ages(max minus min)
let sortedAges = ages.sort();
let range =  sortedAges[sortedAges.length - 1] - sortedAges[0];

console.log(range);

// v Compare the value of (min - average) and (max - average), use abs() method 
let min = sortedAges[0];
let max = sortedAges[sortedAges.length - 1];

let minAverage = Math.abs(min - average);
let maxAverage = Math.abs(max - average);

console.log(minAverage)
console.log(maxAverage)

