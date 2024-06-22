const options  = document.querySelectorAll(".op")
const colorCode = document.querySelector(".color-code")
const scoreDiv = document.querySelector("#score")

let score = 0
// localStorage.setItem("score",0)
function generateColorCode(min,max){
    return min + Math.floor(Math.random() * max-min)
}

function checkAnswer(option,index){
   
    if(option.style.backgroundColor === colorCode.innerText ){
        return true
    }

    return false
}

function updateColor(){
    const red = generateColorCode(0,255)
    const green = generateColorCode(0,255)
    const blue = generateColorCode(0,255)
    const color = `rgb(${red},  ${green},  ${blue})`
    colorCode.innerText = color
    randomAnswer = Math.floor(Math.random()*4)
    options[randomAnswer].style.backgroundColor = color
    scoreDiv.innerText = "Score : " + score

    options.forEach((option,index) => {
        if(index !== randomAnswer){
          
            const red = generateColorCode(0,255)
            const green = generateColorCode(0,255)
            const blue = generateColorCode(0,255)
            const color = `rgb(${red},  ${green},  ${blue})`
            option.style.backgroundColor = color
        }
    })
}   

options.forEach((option,index) => {
    option.addEventListener("click",() => {

       if(checkAnswer(option,index+1)){
        score++
        // localStorage.setItem("score",score)
       }
       else{
        score--
        // localStorage.setItem("score",score)
       }
       updateColor()
    })
    

});

updateColor()



