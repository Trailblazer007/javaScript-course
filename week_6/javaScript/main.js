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
] 

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

console.log('i' + '    ' + 'i^2' + '    ' + 'i^3')
for(let i= 0; i<=10; i++){
    console.log(`${i}     ${i**2}     ${i**3}`)
} 



