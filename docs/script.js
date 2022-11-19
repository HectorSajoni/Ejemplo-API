
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
            celda.innerHTML = `<img src="${imagen}" alt="gato" height="200px" class="img-relleno">`
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
    const corazon = document.getElementById('corazon')
    getPrincipal()
    getUser()
    getComment()
    corazon.innerHTML = `<img src="https://i.pinimg.com/originals/f5/87/95/f58795d40b762a85abe1c461be485071.png" alt="" width="30px" class="img-corazon"></img>`
    corazon.value = "hueco"
}

function cambiarCorazon()
{
    const corazon = document.getElementById('corazon')
    if(corazon.value=="hueco")
    {
        corazon.innerHTML = `<img src="https://cdn.pixabay.com/photo/2014/04/02/10/44/heart-304420_960_720.png" alt="" width="30px" class="img-corazon"></img>`
        corazon.value = "lleno"
    }else
    {
        corazon.innerHTML = `<img src="https://i.pinimg.com/originals/f5/87/95/f58795d40b762a85abe1c461be485071.png" alt="" width="30px" class="img-corazon"></img>`
        corazon.value = "hueco"
    }
}