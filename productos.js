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