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
