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
                 productos.innerHTML+=`<p id="t">${data[i].title}</p>`;
                 productos.innerHTML+=`<div id="descripcion"><p>${data[i].description}</p></div>`;
                 productos.innerHTML+=`<div id= "total"><div id="imagen"><div id="perro"><img src="${data[i].imgUrl}"></img><p id="hola">Unidades:${data[i].inStock}</p><p id="hola"> Precio: ${data[i].price}$</p><p id="hola"> Divisa: ${data[i].currency}</p><p id="hola"> Precio de descuento: ${data[i].discountPrice}$</p></div></div></div>`;

        }
        //`<img src="${data.imgUrl}"></img>`
        
    })
    // En caso de error, devuelvemos un error 
    .catch(err => {
        console.log(err);
    })
    // Contamos 1 segundo y finalizamos la petición.
    .finally(() => setTimeout(() => {
        console.log("Fin de la petición");
    }, 1000));