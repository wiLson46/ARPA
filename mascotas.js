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

function crearMascota() {
    let tipo = document.getElementById("tipo") === "Gato" ? "gato" : "perro";
    let movil = tipo === "Gato" ? document.getElementById("tamano").value === "si" ? true : false : document.getElementById("tamano").value;
    let castrado = document.getElementById("castrado") === "si" ? true : false;
    let detalle;
    if (tipo === "Gato") {
        detalle = JSON.stringify({
            "nombre": document.getElementById("inputAnimalName").value,
            "edad": document.getElementById("edad").value,
            "raza": document.getElementById("razas").value,
            "genero": document.getElementById("genero").value,
            "castrado": castrado,
            "protectora": {"nombre": document.getElementById("protectora").value},
            "tipo": document.getElementById("tipo").value,
            "aptoDepto": movil
        });
    } else{
        detalle = JSON.stringify({
            "nombre": document.getElementById("inputAnimalName").value,
            "edad": document.getElementById("edad").value,
            "raza": document.getElementById("razas").value,
            "genero": document.getElementById("genero").value,
            "castrado": castrado,
            "protectora": {"nombre": document.getElementById("protectora").value},
            "tipo": document.getElementById("tipo").value,
            "tamano": movil
        });
    }
    fetch('http://arpaweb.ddns.net:8080/animal/crear' + tipo, {
        method: 'POST',
        body: detalle,
        headers: {
            "Content-type": "application/json",
            'Authorization': "Bearer " + sessionStorage.getItem("accessToken")
        }
    }).then(response => response.json())
            .then(text => {
                if (text.status === 200)
                    myFunction(text.mensaje);
                else {
                    myFunction2(text.mensaje);
                }
            });
}

function listarRefugios() {
    fetch('http://arpaweb.ddns.net:8080/animales', {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            'Authorization': "Bearer " + sessionStorage.getItem("accessToken")
        }
    }).then(response => response.json())
            .then(response => {
                let tabla = document.getElementById("mascotas");
                console.log(response.length);
                for (var i = 0; i < response.length; i++) {
                    tabla.innerHTML = tabla.innerHTML + `<tr>
                                <td scope="row" data-label="ID">${response[i].animalid}</td>
                                <td data-label="Nombre">${response[i].nombre}</td>
                                <td data-label="Ciudad">${response[i].tipo}</td>
                                <td data-label="Telefono">${response[i].raza}</td>
                                <td data-label="Email">${response[i].genero}</td>
                                <td data-label="Detalles"><a href="detalleRefugio.html" class="linkNoStyle">Ver detalles</a></td>
                                </tr>`;
                }
            }
            );
}

listarRefugios();

function llenarProtectoras() {
    fetch('http://arpaweb.ddns.net:8080/protectoras', {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            'Authorization': "Bearer " + sessionStorage.getItem("accessToken")
        }
    }).then(response => response.json())
            .then(response => {
                let lista = document.getElementById("protectora");
                for (var i = 0; i < response.length; i++) {
                    lista.innerHTML = lista.innerHTML + `<option>${response[i].nombre}</option>`;
                }
            }
            );
}

llenarProtectoras();

function filtrar() {
    fetch('http://arpaweb.ddns.net:8080/animales/perros', {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            'Authorization': "Bearer " + sessionStorage.getItem("accessToken")
        }
    }).then(response => response.json())
            .then(response => {
                let tabla = document.getElementById("mascotas");
                for (var i = 0; i < response.length; i++) {
                    tabla.innerHTML = tabla.innerHTML + `<tr>
                                <td scope="row" data-label="ID">${response[i].animalid}</td>
                                <td data-label="Nombre">${response[i].nombre}</td>
                                <td data-label="Ciudad">${response[i].tipo}</td>
                                <td data-label="Telefono">${response[i].raza}</td>
                                <td data-label="Email">${response[i].genero}</td>
                                <td data-label="Detalles"><a href="detalleRefugio.html" class="linkNoStyle">Ver detalles</a></td>
                                </tr>`;
                }
            });
}

let tipo = document.getElementById("tipo");
tipo.addEventListener('change', (event) => {
    if (tipo.value === "Gato") {
        document.getElementById("tamano").innerHTML = `<option>si</option>
                            <option>no</option>`;
        document.getElementById("movil").innerHTML = "Apto Depto";
        document.getElementById("razas").innerHTML = "<option>mestizo</option><option>siames</option><option>angora</option>";
    } else {
        document.getElementById("razas").innerHTML = "<option>mestizo</option><option>salchica</option><option>golden</option><option>labrador</option><option>boxer</option>";
        document.getElementById("tamano").innerHTML = "<option>Peque\361o</option><option>Mediano</option><option>Grande</option>";
        document.getElementById("movil").innerHTML = "Tama\361o";
    }
});


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