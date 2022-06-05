const items=[{"id":1,"Item":"Reserva de Salón","Precio":40000},{"id":2,"Item":"Italiano Nvl. 1","Precio":10000},{"id":3,"Item":"Italiano Nvl. 2","Precio":15000},{"id":4,"Item":"Italiano Nvl. 3","Precio":20000}];

const carrito = [];

let boton1 = document.getElementById("btnR");
boton1.addEventListener("click",()=>{
    carrito.push(items[0]);
    console.log(carrito);
})

let boton2 = document.getElementById("btn1");
boton2.addEventListener("click",()=>{
    carrito.push(items[1]);
    console.log(carrito);
})


let boton3 = document.getElementById("btn2");
boton3.addEventListener("click",()=>{
    carrito.push(items[2]);
    console.log(carrito);
})


let boton4 = document.getElementById("btn3");
boton4.addEventListener("click",()=>{
    carrito.push(items[3]);
    console.log(carrito);
})



