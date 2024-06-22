// const { stdin, stdout } = require('node:process');
// const readline = require('node:readline');

// const rl = readline.createInterface({
//     input:stdin,
//     output:stdout
// })

// rl.question("Enter your age : ", function(age){
//     if(age>=18){
//         console.log("You are child")
//     }
//     else{
//         console.log("You are adult")
//     }
//     rl.close()
// })


const marks = -101

if(marks>=80){
    console.log("Grade A")
}
else if(marks >= 60){
    console.log("Grade B")
}
else if(marks >= 40){
    console.log("Grade C")
}
else if(marks >= 0) {
    console.log("Reattempt the exam")
}
else{
    console.log("No grade")
}

//  ternary operator

const isVerified = true

isVerified == false ? console.log("not verified"): console.log("verified")

