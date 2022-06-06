const data = [{id:1,Item:"Reserva de Salón",Precio:40000,img:"img/salon.jpg"},{id:2,Item:"Italiano Nvl. 1",Precio:10000,img:"img/estudio.jpg"},{id:2,Item:"Italiano Nvl. 2",Precio:15000,img:"img/estudio.jpg"},{id:2,Item:"Italiano Nvl. 3",Precio:20000,img:"img/estudio.jpg"}]

const items = document.getElementById("items");
const tabla = document.getElementById("tbody")
const pieTabla=document.getElementById("pieTabla")
let carrito={};


items.addEventListener("click", e =>{
  addCarrito(e);
})
pintarCards(data)


function pintarCards(array){

  for(let dato of array){

    let div = document.createElement("div");
    div.classList="col-6 mt-3"
    div.innerHTML=`<div class="card" style="width: 18rem;">
    <img src="${dato.img}" class="card-img-top" alt="${dato.id}">
    <div class="card-body">
      <h5 class="card-title">${dato.Item}</h5>
      <p class="card-text">${dato.Precio}</p>
      <a class="btn btn-primary anadirCarrito">Añadir al carrito</a>
    </div>
  </div>`

  items.appendChild(div)

  }
}

const addCarrito = e =>{
 
  if(e.target.classList.contains(`btn-primary`)){
    setCarrito(e.target.parentNode)
  }
}
const setCarrito = objeto =>{
  const producto ={
    Item:objeto.querySelector("h5").textContent,
    Precio:objeto.querySelector("p").textContent,
    Cantidad:1
  }
  if(carrito.hasOwnProperty(producto.Item)){
    alert("Este item ya fue seleccionado")
  }
  carrito[producto.Item] = {...producto};
  pintarCarrito(carrito)

}


const pintarCarrito = ()=>{
  tabla.innerHTML="";
  

  Object.values(carrito).forEach(producto =>{
    let tr = document.createElement("tr")
    tr.innerHTML=`<tr>
    <td>${producto.Item}</td>
    <td>${producto.Cantidad}</td>
    <td>
        <button class="btn btn-danger btn-sm" id="botonEliminar">
            Eliminar
        </button>
    </td>
    <td>${producto.Precio}</td>
    </tr>`

    if(Object.keys(carrito).length !== 0){
      pieTabla.innerHTML="";
      let tr2 = document.createElement("tr")
      tr2.innerHTML=`<tr><td>Total</td><td></td><td></td><td><span></span></td></tr>`

      let tr3 = document.createElement("tr")
      tr3.innerHTML=`<tr><td></td><td></td><td></td><td><a class="btn btn-primary anadirCarrito">Finalizar Compra</a>
      </td></tr>`

      pieTabla.appendChild(tr2)
      pieTabla.appendChild(tr3)
    }


    const nPrecio=Object.values(carrito).reduce((acc,{Precio}) => Number(acc)+Number(Precio), 0)
    pieTabla.querySelector(`span`).textContent=nPrecio;

   

    tabla.appendChild(tr)
  }
  )
  
}

tabla.addEventListener("click", e=>{
  botonEliminar();
})


function botonEliminar (){
  const btnE = document.getElementById("botonEliminar")
  btnE.parentNode.parentNode.remove();
  console.log(btnE.parentNode.parentNode.children[0].textContent)

  for(i=0;i<4;i++){
    let carritoE = Object.values(carrito);

    if(carritoE[i].Item == btnE.parentNode.parentNode.children[i].textContent){
      carritoE.splice(i,1)
      console.log(carritoE)
      carrito = {...carritoE}
      pintarCarrito(carrito)

    }
  }


}



