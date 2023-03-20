document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("formulario-contacto").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento){
    evento.preventDefault();
    let email = document.getElementById("email").value;
    let validaremail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(!validaremail.test(email)){
        alert('Por Favor, ingresa un email valido');
        return;
    }
    let nombre= document.getElementById("nombre").value;
    if(nombre.lenght==0){
        alert('No ingresaste un nombre');
        console.log('No ingresaste un nombre');
        return;
    }
    
    this.submit();
}

let anchoPantalla = document.documentElement.scrollWidth;

document.addEventListener("DOMContentLoaded",function (){
    if(anchoPantalla>992){
        document.getElementById('tarjeta-presentacion').style.display='';
    } else{
        document.getElementById('tarjeta-presentacion').style.display="none";
    }
});
const marcaDeAgua=document.getElementById("marcadeagua");
let fecha= new Date();
let anio= fecha.getFullYear();
marcaDeAgua.innerText="Jona Mendoza "+anio+" Mi Pag.";
