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
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5500);
}

function myFunction2() {
    var x = document.getElementById("toastNOT");
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

/*
width = screen.availwidth;
height = screen.availheight;

if (width > 0 && height >0) {
    window.location.href = "http://localhost/main.php?width=" + width + "&height=" + height;
} else 
    exit();
*/