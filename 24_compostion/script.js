function add(a,b){
    return a+b
}


function square(value){
    return value*value
}

function mul(a,b){
    return a*b
}
//  not suitable
// function compose(){
//     return function(a,b){
//         return square(add(a,b))
//     }
// }
// console.log(compose()(2,3))  


function compose(fn1,fn2){
    return function(a,b){
        return fn2(fn1(a,b))
    }
}

// modern syntax 

const composeModern = (fn1,fn2) => (a,b) => fn2(fn1(a,b))

// console.log(compose(add,square)(2,3))
// console.log(compose(mul,square)(2,3))

// console.log(composeModern(add,square)(2,3))
// console.log(composeModern(mul,square)(2,3))


// Generic code


function composed(...fns){
    return function(...args){
        return fns.reduce((accumulator,currentfun) => currentfun(accumulator) ,args)
    }
}
function sum(values){
    return values.reduce((prev,curr) => prev+curr ,0)
}

function increase(value){
    return value+1
}

// modern syntax

const composeAll = (...fns) => (...args) => fns.reduce((acc,currfn) => currfn(acc),args)


console.log(composed(sum,square,increase)(2,5))
console.log(composeAll(sum,square,increase)(2,5))