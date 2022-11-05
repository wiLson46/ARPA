function register() {
    console.log("corriendo")
    fetch('http://arpaweb.ddns.net:8080/nuevousuario', {
        method: 'POST',
        body: JSON.stringify({
            "nombre": document.getElementById("inputNombre").value,
            "apellido": document.getElementById("inputApellido").value,
            "dni": document.getElementById("inputDNI").value,
            "telefono": document.getElementById("inputPhone").value,
            "fechaNacimiento": Date.parse(document.getElementById("inputDate").value),
            //"domicilio": document.getElementById("").value,
            "contraseña": document.getElementById("inputPass").value,
            //"usuario": document.getElementById("").value,
            "mail": document.getElementById("inputEmail").value,
        }),
        headers: {
            "Content-type": "application/json",
        }
    }).then(response => response.json())
            .then(text => {
                if (text.status === 200) {
                    myFunction(text.mensaje)
                } else {
                    myFunction2(text.mensaje)
                }
            })
    const [day, month, year] = document.getElementById("inputDate").value.split('/')
    const date = new Date(+year, month - 1, +day);
    console.log(date)
}

function myFunction(message) {
    var x = document.getElementById("toastOK");
    x.innerHTML = message;
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 5500);
}

function myFunction2(message) {
    var x = document.getElementById("toastNOT");
    x.innerHTML = message;
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 5500);
}