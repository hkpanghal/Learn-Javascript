
// function add(num1,num2,cb){
//     const result = num1 + num2
//     cb(result)
// }

// add(10,15, function(addedValue){
//     console.log(addedValue)
// })


// const add = (num1,num2,cb) => {
//     const result = num1 + num2
//     cb(result)
// }

// add(10,15, (addedValue) =>{
//     console.log(addedValue)
// })

const add = (num1,num2) => {
    const result = num1 + num2
    
    return () => console.log(result)
}

const result = add(10,15)
result()