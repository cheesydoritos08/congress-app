const cheerio = require("cheerio")
const axios = require("axios")

let checkButton = document.querySelector("#check-button")
let urlInput = document.querySelector("#url-input")
checkButton.addEventListener("click", () => {
    let url = urlInput.textContent
    if (url=""){
        console.log("Nothing's here!")
        return
    }

    getSomething(url)
})


async function getSomething(url) {
    try {
        const response = await axios.get(url)
        const $ = cheerio.load(response.data)
        const bodyText = $("p").text()

        console.log(bodyText)
    
    
    }
    catch(error){
        console.error(error)
    }
    
}

getSomething()