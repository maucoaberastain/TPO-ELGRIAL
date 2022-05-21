const listaprecios = [3500,3000,6000,4500,7000,15000,6100,1750];
var prize = 0;


function comprar(a){
    prize += listaprecios[a];
    document.getElementById("top").innerHTML = `<i class="fa-solid fa-wine-glass"></i>`+"("+prize+"$)";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }
    var email = document.getElementById('email').value;
    if (email.length == 0) {
      alert('El email esta vacio');
      return;
    }
    var mensaje = document.getElementById('mensaje').value;
    if (mensaje.length == 0) {
        alert('El mensaje esta vacio');
        return;
    }
    this.submit();
}