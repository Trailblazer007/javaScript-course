// Exercises: Level 1
// 1. Create an empty object called dog
    let dog = {};

// 2. Print the the dog object on the console
       // console.log(dog);

/* 3 Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return 
woof woof */
        dog['name'] = 'bingo'
        dog.legs = '4';
        dog['color'] = 'brown';
        dog.age = '6 months';
        dog['bark'] = 'very active';
        

// 4 Get name, legs, color, age and bark value from the dog object
       let dogName = dog['name'];
       let dogLegs = dog.legs;
       let dogColor = dog.color;
       let dogAge = dog.age;
       let dogBark = dog.bark;
//        console.log(dogName, dogLegs, dogColor, dogAge, dogBark)

// 5 Set new properties the dog object: breed, getDogInfo
        dog.breed = 'bullmastiff';
        let dogBreed = dog.breed;

        dog['getDogInfo'] = function () {
                return `The full information about this dog is: ${dogName}. He has ${dogLegs} and is ${dogColor} in color. 
                He is also ${dogAge} and barks ${dogBark} and a special breed of ${dogBreed}`;
                
        } 
        


// Exercises: Level 2
        // const users = {
        //         Alex: {
        //         email: 'alex@alex.com',
        //         skills: ['HTML', 'CSS', 'JavaScript'],
        //         age: 20,
        //         isLoggedIn: false,
        //         points: 30
        //         },
        //         Asab: {
        //         email: 'asab@asab.com',
        //         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        //         age: 25,
        //         isLoggedIn: false,
        //         points: 50
        //         },
        //         Brook: {
        //         email: 'daniel@daniel.com',
        //         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        //         age: 30,
        //         isLoggedIn: true,
        //         points: 50
        //         },
        //         Daniel: {
        //         email: 'daniel@alex.com',
        //         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        //         age: 20,
        //         isLoggedIn: false,
        //         points: 40
        //         },
        //         John: {
        //         email: 'john@john.com',
        //         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        //         age: 20,
        //         isLoggedIn: true,
        //         points: 50
        //         },
        //         Thomas: {
        //         email: 'thomas@thomas.com',
        //         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        //         age: 20,
        //         isLoggedIn: false,
        //         points: 40
        //         },
        //         Paul: {
        //         email: 'paul@paul.com',
        //         skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        //         age: 20,
        //         isLoggedIn: false,
        //         points: 40
        //         }
        // }

// 1.  Find the person who has many skills in the users object.
        // let answer = '';
        // let max = 0;
        // for(let keys in users){
        //         if((users[keys].skills).length > max){
        //                 max = (users[keys].skills).length
        //                 answer = keys
        //         }
        // }
        // console.log(answer)

        

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
        // let loggedIn = 0;
        // for(let keys in users){
        //         if(users[keys].isLoggedIn === true){
        //                 loggedIn += 1
        //         }
        // }
        // console.log(`The number of logged in users are ${loggedIn} users`)

        // // The second part of the question
        // let highPointers = 0;
        // for(let keys in users){
        //         if(users[keys].points >= 50){
        //                 highPointers += 1;
        //         }
        // }
        // console.log(`The users with points above 50 are: ${highPointers}`)
       

// 3. Find people who are MERN stack developer from the users object
        // let mernDevs = 0 ;
        // for(let keys in users){
        //         if(users[keys].skills.includes('mongoDb', 'expressJs', 'resctJs', 'nodeJs')){
        //                 mernDevs += 1;
        //         }
        // }
        // console.log(`MERN stack developers are ${mernDevs} in number`)

// 4. Set your name in the users object without modifying the original users object
        // const users2 = Object.assign({}, users)
        // users2['Seun'] = {
        //         email: 'seun@seun.com',
        //         skills: ['HTML', 'CSS', 'JavaScript'],
        //         age: 26,
        //         isLoggedIn: false,
        //         points: 50
        // }
        // console.log(users2)


// 5. Get all keys or properties of users object
        // console.log(Object.keys(users))

// 6. Get all the values of users object
        // console.log(Object.values(users))

// 7. Use the countries object to print a country name, capital, populations and languages.
        //This question is invalid




// Exercises: Level 3
/* 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and 
incomes and its description and expenses is a set of incomes and its description.*/
        // const personAccount = {
        //         firstName: 'Max', 
        //         lastName: 'Payne', 

        //         incomes: {
        //                 firstHalf: 700,
        //                 secondHalf: 850
        //         }, 
        //         expenses: {
        //                 food: 120,
        //                 transportation: 50,
        //                 mobileData: 100
        //         }, 

        //         totalIncome:()=>{
        //                 return `${personAccount.incomes.firstHalf + personAccount.incomes.secondHalf}`
        //         },
        //         totalExpense(){
        //                 return `${this.expenses.food + this.expenses.transportation + this.expenses.mobileData}`
        //         },
        //         accountInfo: {
        //                 bankName: 'First Bank',
        //                 accountNumber: '307*****47'
        //         },
        //         // addIncome:, 
        //         // addExpense: 
        //         accountBalance(){
        //                return `${this.totalIncome() - this.totalExpense()}`
        //         }


        // }
        // console.log(personAccount.accountBalance())

// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

        const users = [
            {
                _id: 'ab12ex',
                username: 'Alex',
                email: 'alex@alex.com',
                password: '123123',
                createdAt:'08/01/2020 9:00 AM',
                isLoggedIn: false
            },
            {
                _id: 'fg12cy',
                username: 'Asab',
                email: 'asab@asab.com',
                password: '123456',
                createdAt:'08/01/2020 9:30 AM',
                isLoggedIn: true
            },
            {
                _id: 'zwf8md',
                username: 'Brook',
                email: 'brook@brook.com',
                password: '123111',
                createdAt:'08/01/2020 9:45 AM',
                isLoggedIn: true
            },
            {
                _id: 'eefamr',
                username: 'Martha',
                email: 'martha@martha.com',
                password: '123222',
                createdAt:'08/01/2020 9:50 AM',
                isLoggedIn: false
            },
            {
                _id: 'ghderc',
                username: 'Thomas',
                email: 'thomas@thomas.com',
                password: '123333',
                createdAt:'08/01/2020 10:00 AM',
                isLoggedIn: false
            }
            ];

            const products = [
        {
            _id: 'eedfcf',
            name: 'mobile phone',
            description: 'Huawei Honor',
            price: 200,
            ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
            ],
            likes: []
        },
        {
            _id: 'aegfal',
            name: 'Laptop',
            description: 'MacPro: System Darwin',
            price: 2500,
            ratings: [],
            likes: ['fg12cy']
        },
        {
            _id: 'hedfcg',
            name: 'TV',
            description: 'Smart TV:Procaster',
            price: 400,
            ratings: [{ userId: 'fg12cy', rate: 5 }],
            likes: ['fg12cy']
        }
        ]

/* Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which
 allows user to add to the collection. If user exists, inform the user that he has already an account. */

        // function signUp(object){
        //         return users.every(user => object._id !== user._id) 
        //                ? users.push(object)
        //                : `user already exists!`
                                            
        // }
        
        // console.log(signUp({
        //         _id: 'ab12ex',
        //         username: 'Alex',
        //         email: 'alex@alex.com',
        //         password: '123123',
        //         createdAt:'08/01/2020 9:00 AM',
        //         isLoggedIn: false
        // }))


/*b. Create a function called signIn which allows user to sign in to the application */
        // function signIn(email, password){
        //         for(let i = 0; i < users.length; i++){
        //                 if(email == users[i].email && password == users[i].password){
        //                         alert ('You have successfuly signed in!');
        //                         break;
                                
        //                 } alert ('Kindly create an account');
        //                 break;
        //         }
                
        // }
        // console.log(signIn("alex@alex.com", 123123))

/* 3. The products array has three elements and each of them has six properties. 
        a. Create a function called rateProduct which rates the product
        b. Create a function called averageRating which calculate the average rating of a product */

        // function rateProduct(products){
        //         for(let i= 0; i < products.length; i++){
        //                 if(products[i].ratings.length == 0) { 
        //                         products[i].ratings.push(`rate: ${Math.ceil(Math.random() * 3)}`);
        //                         return products[i]
        //                 }
                        
        //         }
        //     }
        // console.log(rateProduct(products));


        // function averageRating(obj){
        //        let totalRatings = obj.ratings.reduce((acc, cv)=> acc + cv.rate, 0);
        //        return totalRatings/obj.ratings.length;
              
        // }
        // console.log(averageRating({
        //         _id: 'eedfcf',
        //         name: 'mobile phone',
        //         description: 'Huawei Honor',
        //         price: 200,
        //         ratings: [
        //           { userId: 'fg12cy', rate: 5 },
        //           { userId: 'zwf8md', rate: 4.5 }
        //         ],
        //         likes: []
        //       }))

        // function averageRating(arr){
        //         return arr.map((product) => {
        //                 let totalRatings = product.ratings.reduce((acc, cv)=> acc + cv.rate, 0);
        //                 return totalRatings/product.ratings.length;
        //         })

        // }
        // console.log(averageRating(products))

/* 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove 
like if it was liked. */
