console.log("script loaded OK");

const barra = document.getElementById('browseMobile')
const toggler = document.getElementById('toggle');
toggler.onclick = function () {
    toggler.classList.toggle('active');

    if (barra.className == "closed") {
        barra.className = "opened";
    }
    else {
        barra.className = "closed";
    }
}

function myFunction() {
    var x = document.getElementById("toastOK");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5500);
}

function myFunction2(message) {
    var x = document.getElementById("toastNOT");
    x.innerHTML=message;
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5500);
}


const showFiltering = document.getElementById('contenedorFiltros');
const togglerFiltering = document.getElementById('toggleF');
//const changeTableHeight = document.getElementById('tabConteRefu');
togglerFiltering.onclick = function () {
    togglerFiltering.classList.toggle('active');

    if (showFiltering.className == "closedFiltering") {
        showFiltering.className = "openedFiltering";
        togglerFiltering.className = "giraRuedaAd";
       // changeTableHeight.style.height = "500px";
    }
    else {
        showFiltering.className = "closedFiltering";
        togglerFiltering.className = "giraRuedaAt";
       // changeTableHeight.style.height = "845px";
    }
}

function login() {
    resp = fetch('http://arpaweb.ddns.net:8080/login', {
        method: 'POST',
        body: JSON.stringify({
            "password": document.getElementById("inputPass").value,
            "email": document.getElementById("inputEmail").value
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then(response => response)
            .then(resp => {
                if (resp.status === 200) {
                    const respj = resp.json()
                            .then(data => {
                                sessionStorage.setItem("accessToken", data.accessToken);
                                sessionStorage.setItem("email", data.email);
                                window.location.href = 'logged.html';
                            });
                } else {
                    resp.json().then(data => myFunction2(data.mensaje));
                }
            });

}

/*
width = screen.availwidth;
height = screen.availheight;

if (width > 0 && height >0) {
    window.location.href = "http://arpaweb.ddns.net/main.php?width=" + width + "&height=" + height;
} else 
    exit();
*/