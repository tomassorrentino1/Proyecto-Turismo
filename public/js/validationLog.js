window.addEventListener ('load', ()=> {
    let formLogIn = document.querySelector('form.login-form');
    
    
    formLogIn.addEventListener('submit', (e) => {
        const errores = [];
    
        let email = document.querySelector('.email');
        let password = document.querySelector('.password');
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
        if (email.value == "") {
            alert ('El campo email debe no debe estar vacio')
            errores.push(" ") 
        } else if (emailAdress.match(regexEmail)) {
            alert ('Ingresar un email valido')
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