// Mostrar los productos

let urlproductos = "https://demo2420474.mockable.io/productList";
const productos = document.querySelector("#titulo");

fetch(urlproductos)
    .then(respuestaProd => respuestaProd.ok ? respuestaProd.json() : Promise.reject(respuestaProd))
    // Si esta todo OK, muestro mensaje por alert como antes.
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {

            //Si llega el campo "discountPrice", mostrar el campo "price" tachado y poner el valor con descuento resaltado
            // Si no viene nada en el precio de descuento, no se muestra el precio de descuento.
            if (isNaN(data[i].discountPrice)) {
                //console.log("precio 0")
                data[i].discountPrice = `<p id="pa"><br></p>`;
            } else {
                // Si viene el descuento, tachamos el precio
                data[i].price = `<del>${data[i].price}</del>`
                    //console.log("con precio descuento")
                    // Resaltamos el precio de descuento.
                data[i].discountPrice = `<p id="pa">Precio de descuento: $ <span class="resaltado" id>${data[i].discountPrice}</span></p>`
            }

            productos.innerHTML += ` 
                                        <div class="box">
                                        <div id="tema">
                                         <div id="t">${data[i].title}</div>
                                         <div id="perro"><img src="${data[i].imgUrl}"></img></div>
                                         <p id="pa">Unidades: ${data[i].inStock}</p>
                                         <p id="pa">Precio: $ ${data[i].price}</p>
                                         <p id="pa">Divisa: ${data[i].currency}</p>
                                         ${data[i].discountPrice}
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
    
    
    if (localStorage.getItem("confirmacionMailNovedades") == null) {
    
        consultarNovedadesMail()
    }
    
    // Consultar al usuario si desea obtener novedades por mail.
    function consultarNovedadesMail() {
    
        (async() => {
    
            const { value: confirmacionMail } = await Swal.fire({
                title: "¿Desea recibir mails con novedades?",
                showConfirmButton: true,
                confirmButtonText: 'Sí',
                showCancelButton: true,
                cancelButtonText: 'No',
                showCloseButton: true
            });
    
            // Si confirmó que desea recibir mails con novedades
            if (confirmacionMail) {
    
                localStorage.setItem("confirmacionMailNovedades", confirmacionMail)
                confirmacionMailObjeto = confirmacionMail;
                consultarNombreMail()
            } else {
                localStorage.setItem("confirmacionMailNovedades", "false") // Lo fuerzo en false
            }
        })() // es una función autoinvocada
    
    }
    
    function consultarNombreMail() {
    
        (async() => {
    
            const { value: confirmacion } = await Swal.fire({
                title: "¿Desea ingresar nombre y email?",
                showConfirmButton: true,
                confirmButtonText: 'Sí',
                showCancelButton: true,
                cancelButtonText: 'No',
                showCloseButton: true
            });
    
            // Si confirmó el ingreso del usuario y mail.
            if (confirmacion) {
                localStorage.setItem("confirmacionNombreEmail", confirmacion)
                nombreValid()
            } else {
                localStorage.setItem("confirmacionNombreEmail", "false") // Lo fuerzo en false
            }
    
        })() // es una función autoinvocada
    }
    
    //Guardar y validar nombre
    function nombreValid() {
    
        // inicio 
        (async() => {
    
            const { value: nombre } = await Swal.fire({
    
                title: "Ingrese su nombre",
                input: "text",
                inputPlaceholder: "Nombre",
                inputValidator: (value) => {
                    if (!value) {
                        return 'Ha ingresado un nombre inexistente. Por favor ingrese un nombre'
                    }
                }
            });
    
            if (nombre) {
                nombreObjeto = nombre;
                localStorage.setItem("nombre", nombre)
                emailValid()
    
            }
    
        })() // es una función autoinvocada
        // fin
    
    }
    
    function emailValid() {
    
        (async() => {
    
            const { value: MailUsuario } = await Swal.fire({
    
                title: "Ingrese su email",
                input: "email",
                inputPlaceholder: "Email",
                inputValidator: (value) => {
                    if (!value) {
                        return "Ha ingresado un mail en blanco"
                    } else {
    
                        if (value.includes("@") && value.includes(".")) {} else {
                            return "Ha ingresado un mail incompleto. Por favor ingrese un mail con con '@' y '.' "
                        }
                    }
                }
            });
    
            if (MailUsuario) {
                emailObjeto = MailUsuario;
                //enviarMail();
                localStorage.setItem("email", MailUsuario);
                Swal.fire(`Estaremos enviandole las últimas novedades a ${MailUsuario}`)
                enviarDatos();
            }
    
        })() // es una función autoinvocada
        // fin
    
    }
    
    ///////////// Enviamos los datos del usuario. ///////////////////
    
    function enviarDatos() {
        // Si no se completó el mail con la info en el local storage, no enviamos nada al servidor
        if (emailObjeto === "") {
    
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
    
            //fetch("https://formsubmit.co/ajax/albertodamianlopez@gmail.com", {
            fetch("https://demo2420474.mockable.io/userData", {
                method: "POST",
                // headers: { // Cabeceras HTTP
                //     // Ennviamos los datos en formato JSON
                //     'Content-Type': 'application/json'
                // },
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
    }