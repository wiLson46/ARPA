if (!sessionStorage.getItem("accessToken")) {
    window.location.href = 'index.html';
}

function loggedUser() {
    const param = {
        mail: sessionStorage.getItem("email")
    };
    resp = fetch('http://arpaweb.ddns.net:8080/persona?mail=' + param.mail, {
        headers: {
            "Content-type": "application/json",
            'Authorization': "Bearer " + sessionStorage.getItem("accessToken")
        }
    })
            .then(response => response.json())
            .then(user => document.getElementById("loggedUser").innerText = user.nombre);
}

loggedUser();

function crearRefugio() {
    fetch('http://arpaweb.ddns.net:8080/nuevaprotectora', {
        method: 'POST',
        body: JSON.stringify({
            "nombre": document.getElementById("protectoraName").value,
            "ciudad": document.getElementById("ciudad").value,
            "direccion": document.getElementById("direccion").value,
            "telefono": document.getElementById("telefono").value,
            "capacidad":{"capTotal": document.getElementById("capTotal").value},
            "mail": document.getElementById("mail").value
        }),
        headers: {
            "Content-type": "application/json",
            'Authorization': "Bearer " + sessionStorage.getItem("accessToken")
        }
    }).then(response => response.json())
            .then(text => console.log(text));
}

function listarRefugios() {
    fetch('http://arpaweb.ddns.net:8080/protectoras', {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            'Authorization': "Bearer " + sessionStorage.getItem("accessToken")
        }
    }).then(response => response.json())
            .then(response => {
                let tabla = document.getElementById("tabla");
                for (var i = 0; i < response.length; i++) {
                    console.log(response[0]);
                    tabla.innerHTML = tabla.innerHTML+`<tr>
                                <td scope="row" data-label="ID">${response[i].protectoraid}</td>
                                <td data-label="Nombre">${response[i].nombre}</td>
                                <td data-label="Ciudad">${response[i].ciudad}</td>
                                <td data-label="Dirección">${response[i].domicilio}</td>
                                <td data-label="Telefono">${response[i].telefono}</td>
                                <td data-label="Email">${response[i].mail}</td>
                                <td data-label="Empleados">${response[i].empleados.length}</td>
                                <td data-label="Animales">${response[i].animales.length}</td>
                                <td data-label="Detalles"><a href="detalleRefugio.html" class="linkNoStyle">Ver detalles</a></td>
                                </tr>`;
                }
    });
}

listarRefugios();