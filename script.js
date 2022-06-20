console.log("script loaded");

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
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

function myFunction2() {
    var x = document.getElementById("toastNOT");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}


const showFiltering = document.getElementById('contenedorFiltros')
const togglerFiltering = document.getElementById('toggleF');
togglerFiltering.onclick = function () {
    togglerFiltering.classList.toggle('active');

    if (showFiltering.className == "closedFiltering") {
        showFiltering.className = "openedFiltering";
        togglerFiltering.className = "giraRuedaAd";
    }
    else {
        showFiltering.className = "closedFiltering";
        togglerFiltering.className = "giraRuedaAt";
    }
}
