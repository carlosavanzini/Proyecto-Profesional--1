let nombre = "";
let email = "";
let confirmacion = "";
let mailTo;
const fecha = new Date();
const hora = fecha.getHours();

// Declaramos variables globales para armar el objeto.
let tokenObjeto = '';
let nombreObjeto = "";
let emailObjeto = "";
let confirmacionMailObjeto = Boolean;

if (localStorage.getItem("confirmacion") == null) {

    confirmacion = confirm("Desea ingresar nombre y email?")
    localStorage.setItem("confirmacion", confirmacion)
    if (confirmacion == true) {
        inicioUsuario()

    }
}


//Funciones

//Inicio de usuario
function inicioUsuario() {
    nombreValid()
    emailValid()

}
//Guardar y validar nombre
function nombreValid(nombre) {
    do {
        nombre = prompt("Ingrese su nombre")

        if (nombre.trim() == "") {
            alert("Ha ingresado un nombre inexistente. Por favor ingrese un nombre")
        } else {
            nombreObjeto = nombre;
            return localStorage.setItem("nombre", nombre)
        }
    } while (nombre == "" || nombre !== undefined);
}
//Guardar y validar email
function guardarEmail(email) {
    email = prompt("Ingrese su email");
    let arrEmail = email.split("");
    if (arrEmail.includes("@") && arrEmail.includes(".")) {
        localStorage.setItem("email", email);
        emailObjeto = email;
        enviarMail(mailTo);
    } else {
        alert("El mail ingresado es inexistente. El mail debe contar al menos con '@' y '.'");
    }
}

function emailValid(email) {
    do {
        guardarEmail(email);
    } while (localStorage.getItem("email") === null);
}

//Preguntar para enviar mail
function enviarMail(mail) {
    mail = confirm("Desea recibir mails con novedades?");
    conformacionMail = mail;
    if (mail == true) {
        alert(
            "Estaremos enviandole las últimas novedades a " +
            localStorage.getItem("email")
        );
        localStorage.setItem("mail", mail);
    }
    confirmacionMailObjeto = mail;
    console.log(confirmacionMailObjeto);
}


///////////// Enviamos los datos del usuario. ///////////////////

// Si no se completó con info en el local storage, no enviamos nada al servidor
if (nombreObjeto === "" || emailObjeto === "" || confirmacion == false) {

    console.log("No se van a enviar los datos del usuario al servidor");

} else {

    // Vamos a armar un token aleatorio con longitud 10.
    const armarToken = longitudDiez => {
        let cadena = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        // Obtengo la longitud total de la cadena (62)
        let cadenaLength = cadena.length;
        for (let i = 0; i < longitudDiez; i++) {
            // Cada caracter posee un random por la longitud de la cadena
            tokenObjeto += cadena.charAt(Math.floor(Math.random() * cadenaLength));
        }
        return tokenObjeto;
    }

    console.log(armarToken(10));

    // Guardamos los datos en un objeto. 
    let datos = {
        token: tokenObjeto,
        name: nombreObjeto,
        email: emailObjeto,
        sendEmail: confirmacionMailObjeto
    };

    console.log(datos);

    fetch("https://formsubmit.co/ajax/albertodamianlopez@gmail.com", {
        //fetch("https://demo2420474.mockable.io/submitForm", {
        method: "POST",
        headers: { // Cabeceras HTTP
            // Ennviamos los datos en formato JSON
            'Content-Type': 'application/json'
        },
        // El cuerpo de la petición es una cadena de texto con los datos en formato JSON
        body: JSON.stringify(datos)
    })

    .then(res => res.ok ? res.json() : Promise.reject(res))
        // Si esta todo OK, muestro mensaje por pantalla que todo se realizó correctamente.
        .then(data => {
            console.log(data);
            console.log("Sus datos de usuario fueron enviados con éxito");
        })
        // En caso de error, devuelvemos un error personalizado
        .catch(err => {
            console.log(err);
        })
        // Contamos 1 segundo y finalizamos la petición.
        .finally(() => setTimeout(() => {
            console.log("Fin de la petición de usuarios");
        }, 1000));

}

// Selector de la imagen banner
const imgBanner = document.querySelector("#imagenbanner");

let urlBanner = "http://demo2420474.mockable.io/getHomeBanner";

fetch(urlBanner)
    .then(respuestaBanner => respuestaBanner.ok ? respuestaBanner.json() : Promise.reject(respuestaBanner))
    // Si esta todo OK
    .then(data => {
        console.log(data);
        imgBanner.innerHTML = `<a href="${data.link}"><img src="${data.imgUrl}" alt="${data.title}"></a>`
    })
    // En caso de error, devuelvemos un error 
    .catch(err => {
        console.log(err);
    })
    // Contamos 1 segundo y finalizamos la petición.
    .finally(() => setTimeout(() => {
        console.log("Fin de la petición de la imagen banner");
    }, 1000));