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

//Sort the array and find the min and max age

let sortedAges = ages.sort();
console.log(sortedAges);

let minAge = sortedAges[0];
console.log('The minAge is ' + minAge);

let maxAge = sortedAges[sortedAges.length - 1];


// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array