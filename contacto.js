// Cupón de descuento obtenido desde el servidor.
let urlCuponDescuento = "https://demo2420474.mockable.io/getCoupon";

fetch(urlCuponDescuento)
    .then(respuestaDes => respuestaDes.ok ? respuestaDes.json() : Promise.reject(respuestaDes))
    // Si esta todo OK, muestro mensaje por alert como antes.
    .then(data => {
        console.log(data);
        //alert(`Cupón ${data.text} para obtener un ${data.discountPercentage}% de descuento`)
        Swal.fire(`Cupón ${data.text} para obtener un ${data.discountPercentage}% de descuento`)
    })
    // En caso de error, devuelvemos un error 
    .catch(err => {
        console.log(err);
    })
    // Contamos 1 segundo y finalizamos la petición.
    .finally(() => setTimeout(() => {
        console.log("Fin de la petición");
    }, 1000));


// Se validan que todos los campos esten completos y que el mail sea válido.
const validarformulario = () => {

    // Seleccionamos cada input con su mensaje de validación.
    const nombreAValidar = document.querySelector("#nombre");
    const mostrarNombre = document.querySelector("#mostrarNombre");
    const emailAValidar = document.querySelector("#email");
    const mostrarEmail = document.querySelector("#mostrarEmail");
    const telefonoAValidar = document.querySelector("#telefono");
    const mostrarTelefono = document.querySelector("#mostrarTelefono");
    const asuntoAValidar = document.querySelector("#asunto");
    const mostrarAsunto = document.querySelector("#mostrarAsunto");
    const mensajeAvalidar = document.querySelector("#mensaje");
    const mostrarMensaje = document.querySelector("#mostrarMensaje");

    const validarNombre = () => {
        // Validamos que exista un nombre.
        if (nombreAValidar.value == "") {
            //console.log("Su nombre está vacío. Por favor coloque su nombre");
            mostrarNombre.innerHTML = "Su nombre está vacío. Por favor coloque su nombre"
            mostrarNombre.style.color = "red";
            mostrarNombre.style.paddingLeft = "130px";
            mostrarNombre.style.fontSize = "13px";
            nombreAValidar.style.border = "2px solid red";
            nombreAValidar.focus();
            return 0;
        } else {
            mostrarNombre.innerHTML = "";
            nombreAValidar.style.border = "2px solid green";
            mostrarNombre.style.paddingLeft = "";
            mostrarNombre.style.fontSize = "";
        }
    }

    const validarEmail = () => {
        // Validamos que exista el mail.
        if (emailAValidar.value == "") {
            //console.log("Su email está vacío. Por favor coloque su email");
            mostrarEmail.innerHTML = "Su email está vacío. Por favor coloque su email";
            mostrarEmail.style.color = "red";
            mostrarEmail.style.paddingLeft = "130px";
            mostrarEmail.style.fontSize = "13px";
            emailAValidar.style.border = "2px solid red";
            emailAValidar.focus();
            return 0;
        } else {
            // Verifico mail en caso de existir
            if (/^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(emailAValidar.value)) {
                mostrarEmail.innerHTML = "";
                emailAValidar.style.border = "2px solid green";
                mostrarEmail.style.paddingLeft = "";
                mostrarEmail.style.fontSize = "";
            } else {
                //console.log("Su email es inválido. Por favor verifique que no contenga símbolos o espacios");
                mostrarEmail.innerHTML = "Su email es inválido. Por favor ingrese su mail";
                mostrarEmail.style.color = "red";
                mostrarEmail.style.paddingLeft = "130px";
                mostrarEmail.style.fontSize = "13px";
                emailAValidar.style.border = "2px solid red";
                emailAValidar.focus();
                return 0;
            }
        }
    }

    const validarTelefono = () => {
        // Validamos que exista el teléfono.
        if (telefonoAValidar.value == "") {
            //console.log("Su teléfono está vacío. Por favor coloque su teléfono");
            mostrarTelefono.innerHTML = "Su teléfono está vacío. Por favor coloque su teléfono";
            mostrarTelefono.style.color = "red";
            mostrarTelefono.style.paddingLeft = "130px";
            mostrarTelefono.style.fontSize = "13px";
            telefonoAValidar.style.border = "2px solid red";
            telefonoAValidar.focus();
            return 0;
        } else {
            mostrarTelefono.innerHTML = "";
            telefonoAValidar.style.border = "2px solid green";
            mostrarTelefono.style.paddingLeft = "";
            mostrarTelefono.style.fontSize = "";
        }
    }


    const validarAsunto = () => {
        // Validamos que exista el asunto.
        if (asuntoAValidar.selectedIndex == 0) {
            //console.log("Usted no seleccionó un asunto/tema. Por favor coloque una de las opciones de la lista");
            mostrarAsunto.innerHTML = "Usted no seleccionó un tema. Por favor elija una opción";
            mostrarAsunto.style.color = "red";
            mostrarAsunto.style.paddingLeft = "130px";
            mostrarAsunto.style.fontSize = "13px";
            asuntoAValidar.style.border = "2px solid red";
            asuntoAValidar.focus();
            return 0;
        } else {
            mostrarAsunto.innerHTML = "";
            asuntoAValidar.style.border = "2px solid green";
            mostrarAsunto.style.paddingLeft = "";
            mostrarAsunto.style.fontSize = "";
        }
    }

    const validarMensaje = () => {
        // Validamos que exista el mensaje.
        if (mensajeAvalidar.value == "") {
            //console.log("Usted no colocó un mensaje. Por favor escriba su consulta");
            mostrarMensaje.innerHTML = "Usted no colocó un mensaje. Por favor escriba su consulta";
            mostrarMensaje.style.color = "red";
            mostrarMensaje.style.paddingLeft = "130px";
            mostrarMensaje.style.fontSize = "13px";
            mensajeAvalidar.style.border = "2px solid red";
            mensajeAvalidar.focus();
            return 0;
        } else {
            mostrarMensaje.innerHTML = ""
            mensajeAvalidar.style.border = "2px solid green";
            mostrarMensaje.style.paddingLeft = "";
            mostrarMensaje.style.fontSize = "";
        }
    }

    // Llamamos las funciones para validar cada input.
    const validacionMensaje = validarMensaje();
    const validacionAsunto = validarAsunto();
    const validacionTelefono = validarTelefono();
    const validacionEmail = validarEmail();
    const validacionNombre = validarNombre();

    if (validacionNombre == 0 || validacionEmail == 0 ||
        validacionTelefono == 0 || validacionAsunto == 0 ||
        validacionMensaje == 0) {
        return 0;
    }

}


// Envío de formulario.
let respuestaForm = document.querySelector("#respuestaFormulario");
const form = document.querySelector(".form");

function contactForm() {

    document.addEventListener("submit", (e) => {

        e.preventDefault();

        const validacionFormulario = validarformulario();
        //console.log(validacionFormulario)

        // Reemplazar este if cuando este todo OK ya que es solo para probar cuando se envia o no el formulario.
        // //Si el formulario retorna 0 es porque se encontró algun input sin completar.
        // if (validacionFormulario == 0) {
        //     alert("Formulario fallo")
        // } else {
        //     alert("Formulario exitoso")
        // }

        // Si no hubo error envio los datos al servidor.
        if (validacionFormulario != 0) {

            //aca si quiero poner el valor para convertir a json
            //fetch("https://formsubmit.co/ajax/albertodamianlopez@gmail.com", {
            fetch("https://demo2420474.mockable.io/submitForm", {
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

        }
    });


}

document.addEventListener("DOMContentLoaded", contactForm);
