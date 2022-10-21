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
            "contraseña": document.getElementById("inputPass").value,
            //"usuario": document.getElementById("").value,
            "mail": document.getElementById("inputEmail").value,
        }),
        headers: {
            "Content-type": "application/json",
        }
    }).then(response => response)
            .then(resp =>{
                if (resp.status === 200){
                    window.location.href = 'index.html'
        } else {
            //aca se usaria resp.json().mensaje para capturar la respeusta de error y mandarla al toast o a otra parte
        }
    });
}
