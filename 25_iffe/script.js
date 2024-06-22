
const result = ((a,b) => a+b)(2,3);
// console.log(result)

(function(a,b){
    // console.log(a+b)
})(2,3)

const account = () => {
    
    let balance = ((amt) => amt)(1000);

    // let balance = amt
    return (value) => {
        if(value>balance){
            return "Not enough money"
        }
        else{
            return balance - value
        }
    }
    
}



const withdraw = account()
console.log(withdraw(100))

