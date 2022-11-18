
const endpoint = 'https://api.unsplash.com/photos/?client_id=hOdAX1uTd3b796ejWX9-v75E1QCeVkHRMeSNRghWUYo' //'https://api.chucknorris.io/jokes/random'
const endpoint2 = 'https://api.thecatapi.com/v1/images/search'
content = document.getElementById('content')

/*fetch(endpoint)
    .then((response)=>response.json())
    .then((info)=>
    {
        const frase = info.map((element)=>{"hola"})
        console.log(frase)
        content.innerHTML = `<div>${frase}</div>`
    })*/

fetch(endpoint2)
.then((response)=>response.json())
.then((info)=>
{
    const imagen = info[0].url
    content.innerHTML = `<img src="${imagen}" alt="gato" height="600px">`
})