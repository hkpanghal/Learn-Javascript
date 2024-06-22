const btns = document.querySelectorAll(".btn")
const input = document.querySelector("input")
const ansdiv = document.querySelector(".ans")

btns.forEach((btn) => {
    btn.addEventListener("click",() => {
        try {
            if(btn.innerText == "C"){
                input.value = ""
                ansdiv.innerText = "Ans : "
                return
            }
    
            if(btn.innerText == "X"){
                input.value = (input.value.substring(0,input.value.length - 1))
                return 
            }
        
            input.value += btn.innerText
    
            if(["+","-","*","/"].includes(btn.innerText)){
                return
            }
            
            const ans = eval(input.value)
            ansdiv.innerText = "Ans : " + ans
        } catch (error) {
            console.log(error.message)
        }

    })
})