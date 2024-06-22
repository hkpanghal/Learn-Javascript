
function adder(a){
    return function (b){
        return function(c){
            return a+b+c
        }
    }
}


// console.log(adder(2)(3)(5))


const mailer = (to) => (subject) => (body) => `Sending mail to: ${to}, subject: ${subject}, body: ${body}`

console.log(mailer("Hk panghal")("Learn Js")("complete course of javascript"));
