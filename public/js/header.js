window.addEventListener ('load', ()=> {
if (sessionStorage.getItem ('nombreUsuario') == null) {
    let nombre = prompt ('Escribe tu nombre');
    document.querySelector ('.bienvenido').innerHTML = 'Buenos dias ' + nombre;
    sessionStorage.setItem ('nombreUsuario', nombre);
}else{
    let nombre = sessionStorage.getItem ('nombreUsuario');
    document.querySelector('.bienvenido').innerHTML = 'Buenos dias ' + nombre;
}

})