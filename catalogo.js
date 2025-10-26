const productos = [
  {
    nombre: "Philodendron Pink Princess",
    descripcion: "Variegado con tonos rosados y verdes, ideal para interiores luminosos.",
    precio: "$2,349.99",
    imagen: "imagen 1.jpg"
  },
  {
    nombre: "Anthurium crystallinum",
    descripcion: "Follaje aterciopelado con venas blancas brillantes, aspecto elegante.",
    precio: "$829.33",
    imagen: "imagen 2.png"
  },
  {
    nombre: "Rhaphidophora tetrasperma",
    descripcion: "Conocida como 'mini monstera', hojas divididas de aspecto tropical.",
    precio: "$339.19",
    imagen: "imagen 3.jpg"
  },
  {
    nombre: "Goeppertia kegeljanii",
    descripcion: "Hojas ovaladas con patrón de mosaico verde-amarillo brillante.",
    precio: "$460.09",
    imagen: "imagen 4.jpeg"
  }
];

const catalogo = document.getElementById('catalogo');

productos.forEach(producto => {
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('tarjeta');

  const img = document.createElement('img');
  img.src = producto.imagen;
  img.alt = producto.nombre;
  tarjeta.appendChild(img);

  const titulo = document.createElement('h2');
  titulo.textContent = producto.nombre;
  tarjeta.appendChild(titulo);

  const desc = document.createElement('p');
  desc.textContent = producto.descripcion;
  tarjeta.appendChild(desc);

  const precio = document.createElement('p');
  precio.textContent = producto.precio;
  precio.classList.add('precio');
  tarjeta.appendChild(precio);

  const boton = document.createElement('button');
  boton.textContent = "Comprar";
  boton.classList.add('boton');
  boton.onclick = () => alert(`Has comprado: ${producto.nombre}`);
  tarjeta.appendChild(boton);

  catalogo.appendChild(tarjeta);
});
