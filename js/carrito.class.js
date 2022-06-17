class Carrito{
    constructor(productos){
        this.productos=productos;
    }
    agregarProducto(producto){
        const esta = this.productos.find(element=>producto.id===element.id);
        esta ?  swal({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'El Item ya fue seleccionado',
                          }) :this.productos.push(producto);

    }

    calcularTotal(){
        let total =0;
        for(let i=0; i<this.productos.length;i++){
            total+=this.productos[i].Precio
        }
        return total;
    }
    vaciarCarrito(){
        this.productos=[]
        localStorage.clear()
    }

    borrarProducto(producto){
        const pABorrar= this.productos.find(element=>producto.id===element.id)
        let index=this.productos.indexOf(pABorrar)
        this.productos.splice(index,1)
    }

}

