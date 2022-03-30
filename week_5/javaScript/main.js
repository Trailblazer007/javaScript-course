// Exercise level 1
// 1. Declare an empty array;
// ExampleOfArray = Array();

// 2. Declare an array with more than 5 number of elements
// arrayNum = ['one', 'two', 'three', 'four', 'five', 'six'];

// 3. Find the length of your array
// console.log(arrayNum.length);

// 4. Get the first item, the middle item and the last item of the array
// console.log(array.num[0], arrayNum[6/2], arrayNum[arrayNum.length - 1])

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// let mixedDataTypes = ['toyota venza', 100, 
// {'sex': 'male'}, 
// {'hobbies': ['coding', 'playing bass']},
// {'sport': 'basketball'}
// ];

// console.log(mixedDatatypes.length)

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// itCompanies = itCompanies.map( company => company.toLocaleUpperCase() );

// 7. Print the array using console.log()
// console.log(itCompanies);

// 8. Print the number of companies in the array
// console.log(itCompanies.length);

// 9. Print the first company, middle and last company
// let firstItem = itCompanies[0];
// let middleItem = itCompanies[Math.floor(itCompanies.length / 2)]; 
// let lastItem = itCompanies[itCompanies.length - 1];
// console.log(firstItem, middleItem, lastItem);

// 10. Print out each company
// console.log(itCompanies[0]);
// console.log(itCompanies[1]);
// console.log(itCompanies[2]);
// console.log(itCompanies[3]);
// console.log(itCompanies[4]);
// console.log(itCompanies[5]);
// console.log(itCompanies[6]);


// 11. Change each company name to uppercase one by one and print them out

// console.log(itCompanies[0].toUpperCase());
// console.log(itCompanies[1].toUpperCase());
// console.log(itCompanies[2].toUpperCase());
// console.log(itCompanies[3].toUpperCase());
// console.log(itCompanies[4].toUpperCase());
// console.log(itCompanies[5].toUpperCase());
// console.log(itCompanies[6].toUpperCase());

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

// console.log(itCompanies.join(", ") + ' are big IT companies');

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

// userInput = prompt('Enter company name');

let regexMatch = (/facebook | google | microsoft | apple | ibm  | oracle | amazon/gi)
let result = regexMatch.test(itCompanies);

if(result = true){
    console.log(userInput)
}else{
    console.log("a company is not found")
};

// 14. Filter out companies which have more than one 'o' without the filter method
let word;
var companiesWithMoreThanOneLetterO = itCompanies.filter(function(element){if e.includes("o") )}

console.log(companiesWithMoreThanOneLetterO);

// 15. Sort the array using sort() method
// console.log(itCompanies.sort());

// 16. Reverse the array using reverse() method
// console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array
// console.log(itCompanies.slice(0,3));

// 18. Slice out the last 3 companies from the array
// console.log(itCompanies.slice(-3));


// 19. Slice out the middle IT company or companies from the array
// console.log(itCompanies.slice(3,4));

// 20. Remove the first IT company from the array
// console.log(itCompanies.shift());

// 21. Remove the middle IT company or companies from the array
// console.log(itCompanies.splice(3,1));

// 22. Remove the last IT company from the array
// console.log(itCompanies.pop());

// 23. Remove all IT companies
// console.log(itCompanies.slice(0,0));

//OR

// console.log(itCompanies.splice());