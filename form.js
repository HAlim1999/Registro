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


function capturar(){

    function datos(nombre,email,password){
        this.nombre=nombre;
        this.email=email;
        this.password=password;
    }

    let nombreUsuario = document.getElementById("nombre").value;
    let emailUsuario = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    nuevoUsuario  = new datos(nombreUsuario,emailUsuario,password);
    console.log(nuevoUsuario)
    agregar();
}

const baseDatosUser =[];

function agregar(){
    baseDatosUser.push(nuevoUsuario);
    console.log(baseDatosUser);
}


function capturarReg(){

    function datos(nombre,email,password){
        this.nombre=nombre;
        this.email=email;
        this.password=password;
    }
    let nombreUsuarioReg = document.getElementById("nombreReg").value;
    let emailUsuarioReg = document.getElementById("emailReg").value;
    let passwordReg = document.getElementById("passwordReg").value;

    UsuarioReg  = new datos(nombreUsuarioReg,emailUsuarioReg,passwordReg);
    console.log(UsuarioReg)
}

