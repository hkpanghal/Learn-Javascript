function counter(start=0,end=Infinity,step=1){

    return {next(){
        let result
        if(start<end){
            result = {value:start,done:false}
            start=start+step;
        }
        else{
            result = {value:start,done:true}
        }

        return result
    }}
}

// const iterator = counter(1,10,2)
// let result = iterator.next()
// while(!result.done){
//    console.log(result.value)
//    result = iterator.next()
// }

function* range(start=0,end=Infinity,step=1){
    for(let i=start; i<end; i=i+step){
        yield i
    }

}

// for (const value of range(1,10,2)) {
//     console.log(value)
// }

const iter = range(1,10,2)
let result = iter.next()

while(!result.done){
    console.log(result.value)
    result = iter.next()

}