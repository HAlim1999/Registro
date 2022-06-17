let miCarrito= new Carrito([])
if(localStorage.getItem(`carrito`)){
  let carritoStorage=JSON.parse(localStorage.getItem("carrito"))
  if(carritoStorage.productos.length!==0){
    for(let i =0; i<carritoStorage.productos.length; i++){
      miCarrito.agregarProducto(carritoStorage.productos[i])
      mostrarProdcutos()
      mostrarCarrito()
      mostrarTotalCarrito()
      programarBotonesCarrito()
    }
  }
}

mostrarProdcutos()
mostrarCarrito()
mostrarTotalCarrito()
programarBotonesCarrito()


function mostrarProdcutos(){
  let divContainer = document.getElementById("items")
  productos.forEach(element=>{
    const div = document.createElement("div");
    div.classList="col-6 mt-3"
    div.innerHTML=`
    <div class="card" style="width: rem;">
    <img src="${element.img}" class="card-img-top" alt="${element.id}">
    <div class="card-body">
      <h5 class="card-title">${element.Item}</h5>
      <p class="card-text">${element.Precio}</p>
    </div>
  </div>
    `
    const btn =document.createElement('button');
    btn.textContent="Agregar al Carrito"
    btn.classList="btn btn-primary"
    btn.addEventListener('click',()=>{
      miCarrito.agregarProducto(element);
      localStorage.setItem(`carrito`, JSON.stringify(miCarrito))
      mostrarCarrito()
    })
    div.appendChild(btn)
    divContainer.appendChild(div)
  })
}

function mostrarCarrito(){
  const tbody = document.getElementById("tbody")
  tbody.innerHTML=""
  miCarrito.productos.forEach(element=>{
    const tr = document.createElement("tr");
    tr.innerHTML=`
    <tr>
      <td><img src='${element.img}' width="50px"/></td>
      <td>${element.Item}</td>
      <td>${element.Precio}</td>
     <td>
    `
    tbody.appendChild(tr)
    const btnBorrar=document.createElement('button')
    btnBorrar.classList="btn btn-danger"
    btnBorrar.textContent=("Eliminar Item")
    btnBorrar.addEventListener('click', ()=>{
      borrarProducto(element)
    })
    tbody.appendChild(btnBorrar)

  })

 mostrarTotalCarrito();


}

function mostrarTotalCarrito(){

  const divTotal=document.getElementById("totalCarrito")
  divTotal.innerHTML="";
  total = miCarrito.calcularTotal()
  divTotal.innerHTML=total.toFixed(2);
}

function programarBotonesCarrito(){
  programarVaciarcarrito()
}

function programarVaciarcarrito(){
  const btn = document.getElementById("vaciarCarrito")
  btn.classList="btn btn-danger"
  btn.addEventListener('click', ()=>{
    miCarrito.vaciarCarrito();
    mostrarCarrito();
  })
  
}
function borrarProducto(producto){
  miCarrito.borrarProducto(producto)
  localStorage.setItem(`carrito`, JSON.stringify(miCarrito))
  mostrarCarrito()
}











//RELOJ
const addZeros = n => {
    if (n.toString().length <2) return "0".concat(n);
    return n;
}


const actualizarhora = ()=>{
    const time = new Date();
    let hora = addZeros(time.getHours());
    let minutos = addZeros(time.getMinutes());
    let segundos = addZeros(time.getSeconds());
    document.querySelector(".hora").textContent=hora;
    document.querySelector(".minutos").textContent=minutos;
    document.querySelector(".segundos").textContent=segundos;

}
actualizarhora()

setInterval(actualizarhora,1000)

// FIN RELOJ