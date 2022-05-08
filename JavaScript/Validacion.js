//Validación de formularios VideoIngreso y VideoAsociados con Javascript

function validaEnviarAsociado() {
    //valido nombre, apellido, mail y password NO NULO
    if (document.validacion.Nombre.value.length == 0 || 
        document.validacion.Apellido.value.length == 0 || 
        document.validacion.Mail.value.length == 0 || 
        document.validacion.Password.value.length == 0 || 
        document.validacion.RePassword.value.length == 0) {
            alert("Tiene que escribir nombre, apellido, correo electrónico y password")
            document.validacion.Nombre.focus() //foco en el campo Nombre
        return 0;
    }
    if (document.validacion.Password.value !== document.validacion.RePassword.value) {
            alert("Password no coincidente")
            document.validacion.Password.focus() //foco en el campo Nombre
        return 0;
    }
}

function validaEnviarIngreso() {
    //valido email y password NO NULO
    if (document.validacion.Email.value.length == 0 || 
        document.validacion.Password.value.length == 0) {
            alert("Tiene que escribir su email y password")
            document.validacion.Email.focus() //foco en el campo Email
        return 0;
    }
}