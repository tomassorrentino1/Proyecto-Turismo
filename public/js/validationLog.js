window.addEventListener ('load', ()=> {
let formLogIn = document.querySelector('form.login-form');


formLogIn.addEventListener('submit', (e) => {
    const errores = [];

    let email = document.querySelector('.email');
    let password = document.querySelector('.password');

    if (email.value == "") {
        alert ('El campo email debe no debe estar vacio')
        errores.push(" ") 
    }

    if (password.value == "") {
        alert ('El campo contraseña debe no debe estar vacio')
        errores.push(" ")  
        }
    if (errores.length > 0) {

            e.preventDefault();
        }
    
});

})