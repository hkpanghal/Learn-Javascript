// 1. AND =>  all conditions must be true , symbol -> &&
// 2. OR =>  at least on condition must be true , symbol -> ||
// 3. NOT =>  revert the condition, symbol -> !


const age = 21
const gender = 'male'
if(age >= 18 && gender == 'male'){
    console.log("Adult boy")
}

const score = 85
if(score >= 70 || score >= 60){
    console.log("pass")
}

const verified = false
if(!verified){
    console.log("not verified")
}