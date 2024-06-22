
// const greet = () => "hello"

// console.log(greet());


// const greet = () => {
//     return "Hello"
// }
// console.log(greet())

// const add = (num1,num2) => num1+num2
// console.log(add(4,5))

// const say = value => console.log(value)

// say("Hello")

// ******************************************************************************************

// difference between arrow function and normal function



// 1. Hoisting is not present in arrow functions

// greet() ReferenceError: Cannot access 'greet' before initialization
// const greet = () => console.log("Hello")

// greet() no error function is hoisted
// function greet(){
//     console.log("Hello")
// }

// 2. Argument Object is not present in arrow functions

// const add = () =>{
//     console.log(arguments)
// }
// add(1,2)

// 3. This keyword arrow functions have global context and normal fuctions have local context

// const person = {
//     name:"Rahul",
//     sayName: function () {
//         console.log(this)
//     }
// }

// person.sayName()

const person = {
    name:"Rahul",
    sayName:() => {
        console.log(this)
    }
}

// person.sayName()


// function greet() {
   
//     console.log(this)
// }

// console.log(typeof(greet))


// const greet = () => {
//     console.log(this)
// }
// console.log(typeof(greet))


// function details(name,age,city){
//     this.name = name
//     this.age = age,
//     this.city = city
//     return this
// }

// console.log(typeof(details));
