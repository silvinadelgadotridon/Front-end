"use strict";

let usuarios = [];
const agrega1 = 1;
const agrega3 = 3;
let fila = document.querySelector("#mostrar");


let form2 = document.querySelector("#form-valores");
form2.addEventListener("submit", function (event) {
    event.preventDefault();
    let formData = new FormData(form2);
    let nombreApellido = formData.get("nombreapellido");
    let email = formData.get("email");
    let especialidades = formData.get("especialidades");
    let cantidad = formData.get("cantidad");
    console.log(`Nombre y Apellido: ${nombreApellido}, E-mail: ${email}, Especialidad: ${especialidades}, Cantidad: ${cantidad}`);

    let usuario = {
        "nombreapellido": nombreApellido,
        "email": email,
        "especialidad": especialidades
    }

    if (cantidad == agrega1) {
        agregar(usuario);   
    } else {
        for (let i = 0; i < agrega3; i++) {
            agregar(usuario);
        }
    }

});


function agregar(dato) {
    let nuevo = {
        nombreapellido: dato.nombreapellido,
        email: dato.email,
        especialidades: dato.especialidad
    };

    usuarios.push(nuevo);
    fila.innerHTML = '';
    document.querySelector('.formenviado').innerHTML = "";
    for (let i = 0; i < usuarios.length; i++) {
        let usuario = usuarios[i]; 
        let tr = document.createElement('tr');
        if((i %2) == 0){
            tr.classList.toggle('filapar');
        }else{
            tr.classList.toggle('filaimpar');           
        }

        let tdNombreApellido = document.createElement('td');
        tdNombreApellido.innerHTML = usuario.nombreapellido;
        tr.appendChild(tdNombreApellido);

        let tdEmail = document.createElement('td');
        tdEmail.innerHTML = usuario.email;
        tr.appendChild(tdEmail);

        let tdEspecialidad = document.createElement('td');
        tdEspecialidad.innerHTML = usuario.especialidades;
        tr.appendChild(tdEspecialidad);


        fila.appendChild(tr);
    }
    mostrarBotonEliminar();
}

let eliminar = document.querySelector('.eliminar');
eliminar.addEventListener('click', borrarTodo);

function borrarTodo() {
    usuarios = [];
    fila.innerHTML = '';
    mostrarBotonEliminar();
}


function mostrarBotonEliminar() {
    if (usuarios.length != 0) {
        eliminar.classList.add('botonvisible');
    } else {
        eliminar.classList.remove('botonvisible');
    }
}

let btnpresupuesto = document.querySelector('.enviarformpresupuesto');
btnpresupuesto.addEventListener('click', alerta);

function alerta() {
    if (usuarios.length == 0) {
        document.querySelector('.formenviado').innerHTML = "Seleccionar al menos una especialidad antes de solicitar el presupuesto";
    } else {
        document.querySelector('.formenviado').innerHTML = "Solicitud enviada";
    }
}