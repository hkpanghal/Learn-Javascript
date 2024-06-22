async function getWeatherDetails(value="london"){
    try {
        const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=20e369d8e8124ab188182744241706&q=${value}`)

        return result.json()
    } catch (error) {
        console.log(error)
    }

    return null
}

const inputBox = document.querySelector("#input-box")
const serachBtn = document.querySelector("#search-btn")
const country = document.querySelector("#country")
const loc = document.querySelector("#location")
const region = document.querySelector("#region")
const condition = document.querySelector("#condition")
const temp = document.querySelector("#temp")
const icon = document.querySelector("#icon")




serachBtn.addEventListener("click",async () => {
    const value = inputBox.value

    const result = await getWeatherDetails(value)

    console.log(result.current,result.location.name)
    country.innerText = "Country : " + result.location.country
    loc.innerText = "Location : " + result.location.name
    region.innerText = "Region : " + result.location.region
    icon.setAttribute("src",result.current.condition.icon)
    condition.innerText = "Condtion : " + result.current.condition.text
    temp.innerText = "Temp : " + result.current.temp_c 

    
})