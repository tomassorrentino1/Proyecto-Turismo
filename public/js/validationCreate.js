window.addEventListener ('load', ()=> {
let formCreat = document.querySelector('form.crear-formulario');



formCreat.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.querySelector('.name');
    let lastname = document.querySelector('.lastname');
    let email = document.querySelector('.email');
    let password = document.querySelector('.password');

    if (name.value == "") {
        alert ('El campo nombre debe no debe estar vacio'); 
    } else if  (name.value.length < 2) {
        alert ('El campo nombre debe tener al menos 2 caracteres')
    };
    
    if (lastname.value == "") {
        alert ('El campo apellido debe no debe estar vacio'); 
    } else if  (lastname.value.length < 2) {
        alert ('El campo apellido debe tener al menos 2 caracteres')
    };

    if (email.value == "") {
        alert ('El campo email debe no debe estar vacio'); 
    };

    if (password.value == "") {
        alert ('El campo contraseña debe no debe estar vacio'); 
    } else if  (password.value.length < 8) {
        alert ('El campo contraseña debe tener al menos 8 caracteres')
    };
    
});

})