window.addEventListener ('load', ()=> {
let formCreat = document.querySelector('form.crear-formulario');



formCreat.addEventListener('submit', (e) => {
    

    const errores = [];

    let name = document.querySelector('.name');
    let lastname = document.querySelector('.lastname');
    let email = document.querySelector('.email');
    let password = document.querySelector('.password');

    if (name.value == "") {
        alert ('El campo nombre no debe estar vacio')
        errores.push(" ") 
    } else if  (name.value.length < 2) {
        alert ('El campo nombre tener al menos 2 caracteres')
        errores.push(" ") 
    }
    
    if (lastname.value == "") {
        alert ('El campo apellido debe no debe estar vacio')
        errores.push(" ") 
    } else if  (lastname.value.length < 2) {
        alert ('El campo apellido debe tener al menos 2 caracteres')
        errores.push(" ") 
    }

    if (email.value == "") {
        alert ('El campo email no debe estar vacio')
        errores.push(" ") 
    }

    if (password.value == "") {
        alert ('El campo contraseña no debe estar vacio')
        errores.push(" ") 

    } else if  (password.value.length < 8) {
        alert ('El campo contraseña debe tener al menos 8 caracteres')
        errores.push(" ") 
    }
    if (errores.length > 0) {

        e.preventDefault();
    }
});

})