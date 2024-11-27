
async function getQuote() {
    const response = await fetch('https://dummyjson.com/quotes/random')
    const data = await response.json()
    console.log(data)
    
    // const randomItem = Math.floor(Math.random() * data.length)
    // const randomQuote = data[randomItem]
    document.querySelector(".quote"). 
    innerHTML = `<h3>${data.quote}</h3>
    <p>- ${data.author}</p>`
}