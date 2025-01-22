// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [ ];

function agregarAmigo(){
    let nombre = document.getElementById('amigo');
    //validar la entrada que no este vacio
    if(nombre.value == ''){
        alert('Debe ingresar un nombre');
        return;
    } else {
        // Verificar si el nombre ya existe en el array
        if(!amigos.includes(nombre.value)){
            amigos.push(nombre.value);
        } else {
            alert('El nombre ya está en la lista');
        }
        nombre.value = '';
        nombre.focus();
        mostrarAmigos();
    }
}

//crear una funcion para recorer el array de amigos y agregue cada combre en elemnto li en el html usar innerhtml limpiar duplciados
function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for(let i = 0; i < amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

//funcion que seleccione de forma aleatoria un amigo de la lista
function sortearAmigo(){
    if(amigos=== null || amigos.length === 0){
        alert('No hay amigos en la lista');
        return;
    }else{
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<h3>El amigo sorteado es: ${amigoSorteado}</h3>`;
        amigos = []; // Limpiar el arreglo
    }

}