// There are three types of variables in js

// var => 
    // 1. global scoped
    // 2. kahi bhi use kar sakte hai program me
    // 3. Reassign is possible

// let => 
    // 1. block scoped
    // 2. sirf block me use kar sakte hai jha pr declare kiya gya ho
    // 3. Reassign is possible

// const => 
    // 1. block scoped
    // 2. sirf block me use kar sakte hai jha pr declare kiya gya ho
    // 3. Reassign is not possible 


//  console.log(myVar)

{
   var myVar = 10

   myVar = 30
}

// console.log(myVar)

// console.log(myLet) ReferenceError: myLet is not defined
{
    let myLet = 20

    // console.log(myLet)
    myLet = 30
}
// console.log(myLet) ReferenceError: myLet is not defined


// console.log(myConst) ReferenceError: myConst is not defined
{
    const myConst = 10 
    // console.log(myConst)

    // myConst = 10 TypeError: Assignment to constant variable.
}

// console.log(myConst)  ReferenceError: myConst is not defined