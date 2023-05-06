const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
const headerTag = document.querySelector("section h1")
const pTag = document.querySelector("section p")

let currency = "USD"

// lets write a function to fetch data

const checkPrice = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            headerTag.innerHTML = data.bpi[currency].rate_float.toFixed(1)
        })
}

checkPrice()


const navLinks = document.querySelectorAll("nav a")

navLinks.forEach(link => {
    link.addEventListener("click", function(event) {

        event.preventDefault()
        currency = this.getAttribute("data-currency")
        checkPrice()

        pTag.innerHTML = `Price in ${currency} for BTC`

        navLinks.forEach(link => link.classList.remove("selected"))

        link.classList.add('selected')
    })
})


// check the price every 60secs

setInterval(() => {
    checkPrice()
}, 60000)