function loadScript(src,callback){
    const script = document.createElement("script")
    script.setAttribute("src",src)
    script.onload = ()=> callback(null,script)
    script.onerror = () =>  callback(new Error("Script Loading Error"),null)

    document.head.appendChild(script)
}

// loadScript("test.js",(err,script) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(script)
//     }
// })


function promisify(fn){
    return function(...args){
        return new Promise((resolve,reject) => {
            fn(...args,(err,result)=>{
                if(!err){
                    return resolve(result)
                }

                return reject(err)
            })
        })
    }
}

const load = promisify(loadScript)

load("test.js").then((message)=>{
    console.log(message)
}).catch((err) => {
    console.log(err)
})