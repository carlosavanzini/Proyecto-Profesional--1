/*
	Verti by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: [null, '736px']
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Dropdowns.
    $('#nav > ul').dropotron({
        mode: 'fade',
        noOpenerFade: true,
        speed: 300
    });

    // Nav.

    // Toggle.
    $(
            '<div id="navToggle">' +
            '<a href="#navPanel" class="toggle"></a>' +
            '</div>'
        )
        .appendTo($body);

    // Panel.
    $(
            '<div id="navPanel">' +
            '<nav>' +
            $('#nav').navList() +
            '</nav>' +
            '</div>'
        )
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'left',
            target: $body,
            visibleClass: 'navPanel-visible'
        });

})(jQuery);

/* Inicio agregado de botón con info para mostrar/ocultar contenido */

// Funcion para saber el archivo en el que estamos actualmente
function filename() {
    let rutaAbsoluta = self.location.href;
    let posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    let rutaRelativa = rutaAbsoluta.substring(posicionUltimaBarra + "/".length, rutaAbsoluta.length);
    return rutaRelativa;
}


if (filename() == 'productos.html') {

    // Por default lo vamos a setear en 0(Sin desplazamiento) y 1 sería con desplazamiento
    let i1 = 0;

    // Desabilito el contenido por default
    document.getElementById('LeerMas1').style.display = 'none';
    document.getElementById('LeerMas2').style.display = 'none';
    document.getElementById('LeerMas3').style.display = 'none';

    // Selecciona el ID button y al ejecutarse el evento clic, llama a la función

    let button1 = document.querySelector('#button1').addEventListener('click', function() {

        if (!i1) {
            // Selecciono el elemento "LeerMas" que es el id del span declarado
            document.getElementById('LeerMas1').style.display = 'inline';
            // Selecciono el id "button" para ocultar las características
            document.getElementById('button1').innerHTML = '- Características';
            i1 = 1;
        } else {
            // Selecciono el elemento "LeerMas" que es el id del span declarado
            document.getElementById('LeerMas1').style.display = 'none';
            // Selecciono el id "button" para mostrar las características
            document.getElementById('button1').innerHTML = '+ Características';
            i1 = 0;
        }

    })

    let i2 = 0;

    let button2 = document.querySelector('#button2').addEventListener('click', function() {

        if (!i2) {
            // Selecciono el elemento "LeerMas" que es el id del span declarado
            document.getElementById('LeerMas2').style.display = 'inline';
            // Selecciono el id "button" para ocultar las características
            document.getElementById('button2').innerHTML = '- Características';
            i2 = 1;
        } else {
            // Selecciono el elemento "LeerMas" que es el id del span declarado
            document.getElementById('LeerMas2').style.display = 'none';
            // Selecciono el id "button" para mostrar las características
            document.getElementById('button2').innerHTML = '+ Características';
            i2 = 0;
        }

    })

    let i3 = 0;

    let button3 = document.querySelector('#button3').addEventListener('click', function() {

        if (!i3) {
            // Selecciono el elemento "LeerMas" que es el id del span declarado
            document.getElementById('LeerMas3').style.display = 'inline';
            // Selecciono el id "button" para ocultar las características
            document.getElementById('button3').innerHTML = '- Características';
            i3 = 1;
        } else {
            // Selecciono el elemento "LeerMas" que es el id del span declarado
            document.getElementById('LeerMas3').style.display = 'none';
            // Selecciono el id "button" para mostrar las características
            document.getElementById('button3').innerHTML = '+ Características';
            i3 = 0;
        }

    })

}

/* Fin agregado de botón para mostrar/ocultar contenido */

// Guardar información de los vistantes.
function guardarLocalStorage() {

    if (!localStorage.getItem("opcion")) {

        let opcion = confirm("Desea ingresar su nombre y mail ?");
        let nombre = "";
        let mail = "";

        // Guardamos la respuesta en el local storage para validar la proxima vez
        localStorage.setItem("opcion", opcion);

        // Si la respuesta es afirmativa, le solicitamos sus datos
        if (opcion) {

            while (nombre == null || nombre == "") {

                // Solicito el nombre
                nombre = prompt("Por favor ingrese su nombre");

                // Validar nombre
                if (nombre == null || nombre == "") {
                    alert("No puede ingresar un nombre vacio. Por favor ingrese su nombre");
                }
                localStorage.setItem("nombre", nombre);
            }

            while (mail == null || mail == "" || !mail.includes('.') || !mail.includes('@')) {

                // Solicito el mail
                mail = prompt("Por favor ingrese su mail");

                // Validar mail
                if (mail == null || mail == "" || !mail.includes('.') || !mail.includes('@')) {
                    alert("El mail ingresado es invalido. Por favor ingreselo nuevamente");
                }
                localStorage.setItem("mail", mail);
            }

            guardarEnviarNovedades();
            guardarSaludo(nombre);

        }
    }
}


// Preguntar si desean recibir novedades vía email.
function guardarEnviarNovedades() {

    if (!localStorage.getItem("novedades")) {

        let novedades = confirm("¿Desea recibir por mail nuestras últimas novedades?");

        // Si desea recibir novedades, guardo su valor
        if (novedades == true) {
            localStorage.setItem("novedades", novedades);
        }
    }
}

//Personalizar Página Principal
function guardarSaludo(nombre) {

    // Obtener la hora del día
    let fecha = new Date();
    let hora = fecha.getHours();
    console.log(hora);
    if (hora > 00 && hora <= 06) {
        alert("Buenas madrugadas " + nombre);
    } else if (hora > 06 && hora <= 12) {
        alert("Buen día " + nombre);
    } else if (hora > 12 && hora <= 19) {
        alert("Buenas tardes " + nombre);
    } else if (hora > 19 && hora <= 24) {
        alert("Buenas noches " + nombre);
    }
}

guardarLocalStorage();