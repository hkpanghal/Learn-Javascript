// function greet(){
//     console.log("Hello")
// }

// greet()

// function greet(){
//     return "Welcome"
// }

// console.log(greet())


// function add(num1,num2){
//     return num1+num2
// }

// console.log(add(5,6))


// function accepting variable no. arguments

function add(){
    
    let sum = 0
    for(let i=0; i<arguments.length; i++){
        sum = sum + arguments[i]
    }

    return sum
}

console.log(add(1,2,3,4))
console.log(add(1,2,3))

// function add(...numbers){
//     let sum = 0
//     for(let i=0; i<numbers.length; i++){
//         sum = sum + numbers[i]
//     }

//     return sum
// }

// console.log(add(1,2,3,4))
// console.log(add(1,2,3))