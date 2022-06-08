const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

class datos{
    constructor(nombre,email,password){
        this.nombre=nombre;
        this.email=email;
        this.password=password;
    }
}

const baseDatosUser =[];

const botonReg = document.getElementById("btnReg")
botonReg.addEventListener("click",()=>{
    capturar();
})

const botonReg2= document.getElementById("btnReg2")
botonReg2.addEventListener("click",()=>{
    capturarReg();
})


function capturar(){

    let nombreUsuario = document.getElementById("nombre").value.trim();
    let emailUsuario = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if(nombreUsuario==""&&emailUsuario==""&&password==""){
        swal({
            icon: 'error',
            title: 'Oops...',
            text: 'No has completados los datos o los mismos son incorrectos',
          })
    }else{
        nuevoUsuario  = new datos(nombreUsuario,emailUsuario,password);
        console.log(nuevoUsuario)
        agregar();
        swal({
            title: "Usuario Registrado",
            icon: "success",
    
        });
    }

    
}

function agregar(){
    baseDatosUser.push(nuevoUsuario);
}

function capturarReg(){

    let nombreUsuarioReg = document.getElementById("nombreReg").value;
    let emailUsuarioReg = document.getElementById("emailReg").value;
    let passwordReg = document.getElementById("passwordReg").value;

    if(baseDatosUser.find(usuario => usuario.nombre === nombreUsuarioReg)&&baseDatosUser.find(usuario => usuario.email === emailUsuarioReg)&&baseDatosUser.find(usuario => usuario.password === passwordReg)){
        location.href="panelcontrol.html"
    }else{
        alert("Usuario No Registrado")}
    }



