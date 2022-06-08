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