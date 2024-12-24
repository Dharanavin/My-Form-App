/*
2 types of datatypes in JS
1. Primitives
-Number
-String
-Boolean
-Null
-Undefined
-BigInt 2 power 64
-Symbol
2. Object
Arrays, objects
*/
//Addition

// const myNumber3 = 15;
//  //myNumber3 = 20;
// let result = 0
// result = myNumber2 + myNumber1
// result = myNumber2 - myNumber1
// result = myNumber2 * myNumber1
// result = myNumber2 / myNumber1
// result = myNumber2 % myNumber1
// result = myNumber1 + myNumber2

// console.log(typeof(myNumber1))
// console.log(typeof(myNumber2))
// console.log(result)

// let, const, var
//Hoisting: You can define & use the variable before declaration




// let myNumber2 = 4.023;
// let myNumber3 = 10;
// let myNumber4 = 50;
// //console.log(Math.random())
// console.log(Math.round(Math.random()* 100))


// let firstName = "Dhara"
// let lastName = 'Parmar'
// let fullName = firstName + " " + lastName + " " + "How are you?"
// let fullName2 = `"${firstName}" '${lastName}' How are you?`
// console.log(fullName)
// console.log(fullName2)
// console.log(firstName.charAt(5))


// let length = Number(prompt("Enter length of rectangle"))
// let breadth = Number(prompt("Enter breadth of rectangle"))
// let area = length * breadth
// let perimeter = 2 * (length + breadth)
// //console.log(`The area of reactangle with length = ${length} and breadth = ${breadth} is ${area}`)
// console.log(`The perimeter of reactangle with length = ${length} and breadth = ${breadth} is ${perimeter}`)

// Boolean : True or False
// let myBoolean1 = 0;
// let myBoolean2 = false;
// let myNewVal = 0;
// console.log(myBoolean1 == myNewVal)

// console.log(typeof(myBoolean1));
// console.log(typeof(myBoolean2));
// And-&& Or- || Not - !
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)


// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// console.log(!true)
// console.log(!false)
// console.log(Number(true))
// console.log(Number(false))
// if(age>18){
    //     console.log("You are eligible for license")
    // }
    // else if(age === 18){
        //     console.log("Wait till your birthday")
        // }
        // else{
            //     console.log("Please wait for some more years")
            // }
            

            //Ternary Opeartor
// let age = parseFloat(prompt("Enter Your age"))
// age > 18 ? console.log("You are eligible for license") : console.log("Please wait for some more years")

// let myNewVal1 = null
// console.log(myNewVal1)
// console.log(typeof(myNewVal1))
// let myNewVal2 
// console.log(myNewVal2)
// console.log(typeof(myNewVal2))








// myArray2[0] = "Siddharth"
// console.log(myArray2)
// // console.log(myArray2.at(0))
// console.log(myArray2.sort())
// console.log(typeof(myArray2))
// console.log(myArray2.toString())

//Pop, push, slice, splice, concat, join, toString, reverse
//Mutation vs Immutation

// const myCar1 = {
    //     model:"SUV",
    //     name:"i20",
    //     color:"black",
    //     NumbePlate:1234
    // }
    
    // console.log(myCar1)
    // let Today = new Date()
    // console.log(Today)
    // console.log(i)
    
    //1,2,3,....10
    // for(var i=1; i<=100;i++){
        //     console.log(i)
        // }
        // let i = 1
        // while (i<=100){
            //     console.log(i);
            //     i++
            // }
            
            // do {
                //     console.log(i);
                //     i++;
                // } while (i<=100);
                
                
// const myArray2 = ["Sid", "Khushi", "Aneri", "Janhavi", "Mantra", "Dhara"];

// myArray2.forEach(element => {
//     console.log(element)
// });

// for (let index = 0; index < myArray2.length; index++) {
//     const element = myArray2[index];
//     console.log(element)   
// }


// let myResult = (a,b)=> a + b

// console.log(myResult(5,6))

// let count = 0;


// function addition(){
//     let counter = 0
//     function increment(){
//         counter += 1; // count = count + 1
//     }
//     increment();
//     increment();
//     increment();
//     return counter
// }


// console.log(addition());

// function myGreeting(){
//     return "Hello"
// }

// let myGoodBye = ()=>{
//     return "Good Bye"
// }

// console.log(myGreeting());
// console.log(myGoodBye());


// function myGreeting1(greet1, myGoodBye){
//     //let greet1 = "Hello"
//     return greet1;
// }

// console.log(myGreeting1(), myGoodBye())

//function("submit", callback("reset", callback))
//Synchronous: line to line
// Asynchronous: Not line to line

const userForm = document.getElementById("userForm")
const userList = document.getElementById("userList")

userForm.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender= document.querySelector("input[name='gender']:checked").value;
    const languages = Array.from(document.querySelectorAll("input[name='language']:checked")).map(input => input.value);

    const user = {name, email, password, gender, languages}
    createUser(user);
    userForm.reset();
})


function createUser(user){
    const userDiv = document.createElement('div');
    userDiv.classList.add("user");
    userDiv.innerHTML = `
    <h1>${user.name}</h1> 
    <p>Email: ${user.email}</p>
    <p>Password: ${user.password}</p>
    <p>Gender: ${user.gender}</p>
    <p>Fav Programming Languages: ${user.languages.join(", ")}</p>
    <button onClick="deleteUser(this)" id="btn">Delete</button>
    `
    console.log(userDiv)
    userList.appendChild(userDiv);
}

function resetForm(){
    userForm.reset();
}

function deleteUser(button){
    button.parentElement.remove();
}

//Create Read Update Delete
//StopWatch
//Calculator
//Button = Click => BackGround Colour Change

