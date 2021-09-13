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

// mostrar los productos

let urlproductos = "https://demo2420474.mockable.io/productList";
const productos = document.querySelector("#titulo");

fetch(urlproductos)
    .then(respuestaProd => respuestaProd.ok ? respuestaProd.json() : Promise.reject(respuestaProd))
    // Si esta todo OK, muestro mensaje por alert como antes.
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {

            //Si llega el campo "discountPrice", mostrar el campo "price" tachado y poner el valor con descuento resaltado

            // Si no viene nada en el precio de descuento, lo seteamos en 0.
            if (isNaN(data[i].discountPrice)) {
                data[i].discountPrice = 0;
                //console.log("precio 0")
            } else {
                // Si viene el descuento, tachamos el precio
                data[i].price = `<del>${data[i].price}</del>`
                    //console.log("con precio descuento")
                data[i].discountPrice = `<span class="resaltado">${data[i].discountPrice}</p>`
            }

            productos.innerHTML += ` 
                                        <div class="box">
                                        <div id="tema">
                                         <div id="t">${data[i].title}</div>
                                         <div id="perro"><img src="${data[i].imgUrl}"></img></div>
                                         <p id="pa">Unidades: ${data[i].inStock}</p>
                                         <p id="pa">Precio: $ ${data[i].price}</p>
                                         <p ip="pa">Divisa: ${data[i].currency}</p>
                                         <p id="pa">Precio de descuento: $ ${data[i].discountPrice}</p>
                                         <div id="parrafo">${data[i].description}</div>
                                        </div>
                                        </div>`
        }


    })
    // En caso de error, devuelvemos un error 
    .catch(err => {
        console.log(err);
    })
    // Contamos 1 segundo y finalizamos la petición.
    .finally(() => setTimeout(() => {
        console.log("Fin de la petición");
    }, 1000));