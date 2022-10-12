function register() {
    fetch('http://arpaweb.ddns.net:8080/login', {
        method: 'POST',
        body: JSON.stringify({
            "nombre": document.getElementById("inputNombre").value + " " + document.getElementById("inputApellido").value,
            //"apellido": document.getElementById("inputApellido").value,
            "dni": document.getElementById("inputDNI").value,
            "telefono": document.getElementById("inputPhone").value,
            "fechaNacimiento": Date.parse(document.getElementById("inputDate").value),
            //"domicilio": document.getElementById("").value,
            "contraseÃ±a": document.getElementById("inputPass").value,
            //"usuario": document.getElementById("").value,
            "mail": document.getElementById("inputEmail").value,
        }),
        headers: {
            "Content-type": "application/json",
        }
    }).then(response => response.text())
    .then(text => document.getElementById("resp").innerText = text)
    const [day, month, year] = document.getElementById("inputDate").value.split('/')
    const date = new Date(+year, month - 1, +day);
    console.log(date)
}