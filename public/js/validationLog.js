window.addEventListener ('load', ()=> {
let formLogIn = document.querySelector('form.login-form');


formLogIn.addEventListener('submit', (e) => {
    e.preventDefault();

    let email = document.querySelector('.email');
    let password = document.querySelector('.password');

    if (email.value == "") {
        alert ('El campo email debe no debe estar vacio'); 
    };

    if (password.value == "") {
        alert ('El campo contraseña debe no debe estar vacio'); 
        };
    
});

})