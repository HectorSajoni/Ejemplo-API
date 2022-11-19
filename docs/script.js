
const endpointGatos = 'https://api.thecatapi.com/v1/images/search'
const endpointUser = 'https://dummyjson.com/users'
const endpointComment = 'https://dummyjson.com/posts'

const content = document.getElementById('content')
let celdas = ['celda1', 'celda2', 'celda3', 'celda4', 'celda5', 'celda6', 'celda7', 'celda8', 'celda9', 'celda10',
'celda11', 'celda12', 'celda13', 'celda14', 'celda15', 'celda16', 'celda17', 'celda18']
const usuario = document.getElementById('usuario')
const text = document.getElementById('text')

getPrincipal()
getUser()
getComment()
getImage(celdas)


function getImage(array)
{
    if(array.length > 0)
    {
        let elemento = array.pop()
        let celda = document.getElementById(elemento)
        fetch(endpointGatos)
        .then((response)=>response.json())
        .then((info)=>
        {
            let imagen = info[0].url
            celda.innerHTML = `<img src="${imagen}" alt="gato" height="200px">`
            getImage(array)
        })
    }
}
function getPrincipal()
{
    fetch(endpointGatos)
    .then((response)=>response.json())
    .then((info)=>
    {
        const imagen = info[0].url
        content.innerHTML = `<img src="${imagen}" alt="gato" width="400px">`
    })
}

function getUser()
{
    fetch(endpointUser)
    .then((response)=>response.json())
    .then((info)=>
    {
        let num = Math.floor(Math.random()*30)
        const nombre = info.users[num].firstName
        const apellido = info.users[num].lastName
        usuario.innerHTML = `<p>${nombre} ${apellido}</p>`
    })
}

function getComment()
{
    fetch(endpointComment)
    .then((response)=>response.json())
    .then((info)=>
    {
        let num = Math.floor(Math.random()*30)
        const txt = info.posts[num].body
        text.innerHTML = `<p>${txt}</p>`
    })
}

function getAll()
{
    getPrincipal()
    getUser()
    getComment()
}