let nombre = "";
let email = "";
let confirmacion = "";
let mailTo;
const fecha = new Date();
const hora = fecha.getHours();


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
        } else { return localStorage.setItem("nombre", nombre) }
    } while (nombre == "" || nombre !== undefined);
}
//Guardar y validar email
function guardarEmail(email) {
    email = prompt("Ingrese su email");
    let arrEmail = email.split("");
    if (arrEmail.includes("@") && arrEmail.includes(".")) {
        localStorage.setItem("email", email);
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
    if (mail == true) {
        alert(
            "Estaremos enviandole las últimas novedades a " +
            localStorage.getItem("email")
        );
        localStorage.setItem("mail", mail);

    }
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
        console.log("Fin de la petición");
    }, 1000));