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


// Envío de formulario.
let respuestaForm = document.querySelector("#respuestaFormulario");
const form = document.querySelector(".form");

function contactForm() {

    document.addEventListener("submit", (e) => {

        e.preventDefault();

        fetch("https://formsubmit.co/ajax/albertodamianlopez@gmail.com", {
            method: "POST",
            // Acá esta haciendo todo el parseo por el campo "name" de cada input.
            body: new FormData(e.target) // Probar con el server de guayerd para ver si hay que convertirlo o no con el json.stringify
        })

        .then(res => res.ok ? res.json() : Promise.reject(res))
            // Si esta todo OK, muestro mensaje por pantalla que todo se realizó correctamente.
            .then(json => {
                console.log(json);
                //respuestaForm.innerHTML = `<p> ${json.message} </p>`
                respuestaForm.innerHTML = "Su formulario fue enviado con éxito"
                    // Limpio los valores de los input
                form.reset();
            })
            // En caso de error, devuelvemos un error personalizado
            .catch(err => {
                console.log(err);
                //let msg = err.statusText || "Ocurrió un error al enviar, por favor intente nuevamente";
                //respuestaForm.innerHTML = `<p> Error ${err.status}: ${msg} </p>`
                respuestaForm.innerHTML = "Ocurrió un error al enviar, por favor intente nuevamente"
            })
            // Contamos 3 segundos y finalizamos la petición.
            .finally(() => setTimeout(() => {
                console.log("Fin de la petición");
                respuestaForm.innerHTML = ``;
            }, 3000));
    });

}

document.addEventListener("DOMContentLoaded", contactForm);