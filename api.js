//Enlace de la api a consumir
let contenedor = document.querySelector('.contenedor')
let precio = document.querySelector('#precio')
let precio2 = document.querySelector('#precio2')
let imagen1 = document.querySelector('#imagen1')
let imagen2 = document.querySelector('#imagen2')
let infoProducto = document.getElementById('info-producto');
fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(respuesta => respuesta.json())
    .then(productos => {
        precio.textContent =`Precio $${productos[0].price}`
        imagen1.src = productos[0].image_link

        precio.textContent =`Precio $${productos[1].price}`
        imagen1.src = productos[1].image_link


        for (let index = 0; index < 5; index++) {
            console.log(`Producto en stock: ${productos[index].name}`)
            contenedor.innerHTML += `<button>${productos[index].name}</button>
        `
        }

    })
    
    let productosGuardados;
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(respuesta => respuesta.json())
    .then(productos => {
        productosGuardados = productos;
    })

 for (let i = 0; i < 10; i++) {
    console.log(`Producto en stock: ${productos[i].name}`)
    contenedor.innerHTML += `
      <button id="btn${i}" style="margin:5px;">${productos[i].name}</button>
      <br>
      <img src="${productos[i].image_link}" width="100">
      <br>Precio $${productos[i].price || "***"}<hr>
    `
  }

 


/*

boton.onclick = function () {
    fetch('https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png')
    .then(res => res.json())    
    .then(productos => {
            let articulo = document.querySelector('.productos')

            for (let index = 0; index < 3; index++) {
                articulo.innerHTML = `<h2>${producto.title}</h2>
<img src= "${producto.image}">
<p>${producto.description}</p>`
            }
        })
}


 let productos = document.getElementById('mostrarProductos')*/