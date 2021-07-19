
let nombre = "";
let email = "";
let confirmacion = "";
let mailTo;
const fecha = new Date();
const hora = fecha.getHours();


if (localStorage.getItem("confirmacion")==null){
  
  confirmacion = confirm("Desea ingresar Nombre e email?")
  localStorage.setItem("confirmacion", confirmacion)
  if(confirmacion==true){
    inicioUsuario()
    
  }
}

  
  //Funciones

  //Inicio de usuario
  function inicioUsuario(){
    nombreValid()
    emailValid()
    
  }
  //Guardar y validar nombre
  function nombreValid(nombre){
      do {
          nombre = prompt("Ingrese su nombre")
          
          if(nombre.trim() == ""){
              alert("Ingrese datos validos")
          }else{return localStorage.setItem("nombre", nombre) }
      } while (nombre=="" || nombre!==undefined);
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
        "Estaremos enviandole las ultimas novedades a " +
          localStorage.getItem("email")
      );
      localStorage.setItem("mail", mail);
      
    }
  }

  function saludaHoraInicio() {
    if (hora >= 00 && hora <= 06) {
      alert("Buenas madrugadas " + localStorage.getItem("nombre") + ". Difrute la pagina!!!" );
  }
  if (hora >= 07 && hora <= 12) {
    alert("Buen dia " + localStorage.getItem("nombre") + ". Difrute la pagina!!!");
  }
  if (hora >= 13 && hora <= 18) {
    alert("Buenas tardes " + localStorage.getItem("nombre") + ". Difrute la pagina!!!");
  }
  if (hora >= 19 && hora <= 23) {
    alert("Buenas noches " + localStorage.getItem("nombre") + ". Difrute la pagina!!!");
  }
  }

  function des(){
      let descuento= Math.floor(Math.random() * 5) + 1;
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