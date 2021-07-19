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
            alert("Ingrese datos válidos")
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
        alert("Datos invalidos");
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

function saludaHoraInicio() {
    if (hora >= 00 && hora <= 06) {
        if (localStorage.getItem("nombre") != null) {
            alert("Buenas madrugadas " + localStorage.getItem("nombre") + ". Disfrute la página!!!");
        } else {
            alert("Buenas madrugadas. Disfrute la página!!!")
        }
    }
    if (hora >= 07 && hora <= 12) {
        if (localStorage.getItem("nombre") != null) {
            alert("Buen día " + localStorage.getItem("nombre") + ". Disfrute la página!!!");
        } else {
            alert("Buen día. Disfrute la página!!!")
        }
    }
    if (hora >= 13 && hora <= 18) {
        if (localStorage.getItem("nombre") != null) {
            alert("Buenas tardes " + localStorage.getItem("nombre") + ". Disfrute la página!!!");
        } else {
            alert("Buenas tardes. Disfrute la página!!!")
        }
    }
    if (hora >= 19 && hora <= 23) {
        if (localStorage.getItem("nombre") != null) {
            alert("Buenas noches " + localStorage.getItem("nombre") + ". Disfrute la página!!!");
        } else {
            alert("Buenas noches. Disfrute la página!!!")
        }
    }
}

function des() {
    let descuento = Math.floor(Math.random() * 5) + 1;
    console.log("")
    switch (descuento) {
        case 1:
            alert("5HOTSALE para obtener un 5% de descuento")
            break;
        case 2:
            alert("10HOTSALE para obtener un 10% de descuento")
            break;
        case 3:
            alert("15HOTSALE para obtener un 15% de descuento")
            break;
        case 4:
            alert("20HOTSALE para obtener un 20% de descuento")
            break;
        case 1:
            alert("25HOTSALE para obtener un 25% de descuento")
            break;

        default:
            break;
    }

}
des()