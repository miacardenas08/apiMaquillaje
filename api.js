//Enlace de la api a consumir
let contenedor = document.querySelector('.contenedor')
fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(respuesta => respuesta.json())
    .then(productos => {
        for (let index = 0; index < 5; index++) {
            console.log(`Producto en stock: ${productos[index].name}`)
            contenedor.innerHTML += `<p>Producto en stock: ${productos[index].name}</p>
        `
        }
    
    })

    fetch('https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png')

boton.onclick = function () {
.then(productos => {
let articulo = document.querySelector('.productos')

for (let index = 0; index < 3; index++) {
articulo.innerHTML = '<h2>${producto.title}</h2>
<img src= "${producto.image}">
<p>${producto.description}</p>
'
