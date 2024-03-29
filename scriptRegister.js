function register() {
    const [day, month, year] = document.getElementById("inputDate").value.split('/')
    const date = new Date(+year, month - 1, +day);
    fetch('http://arpaweb.ddns.net:8080/nuevousuario', {
        method: 'POST',
        body: JSON.stringify({
            "nombre": document.getElementById("inputNombre").value + " " + document.getElementById("inputApellido").value,
            "dni": document.getElementById("inputDNI").value,
            "telefono": document.getElementById("inputPhone").value,
            "fechaNacimiento": date,
            //"domicilio": document.getElementById("").value,
            "contraseņa": document.getElementById("inputPass").value,
            //"usuario": document.getElementById("").value,
            "mail": document.getElementById("inputEmail").value
        }),
        headers: {
            "Content-type": "application/json",
        }
    }).then(response => response.json())
            .then(text => {
                if (text.status === 200)
                    window.location.href = 'index.html'
                else {
                    myFunction2(text.mensaje);
                }
            });
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