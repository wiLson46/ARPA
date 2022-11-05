if (!sessionStorage.getItem("accessToken")) {
    window.location.href = 'index.html';
}

function personas() {
    resp = fetch('http://arpaweb.ddns.net:8080/personas', {
        headers: {
            "Content-type": "application/json",
            'Authorization': "Bearer " + sessionStorage.getItem("accessToken")
        }
    })
            .then(response => response.json())
            .then(users => document.getElementById("count3").textContent = users.length);
}


function animales() {
    resp = fetch('http://arpaweb.ddns.net:8080/animales', {
        headers: {
            "Content-type": "application/json",
            'Authorization': "Bearer " + sessionStorage.getItem("accessToken")
        }
    })
            .then(response => response.json())
            .then(animales => document.getElementById("count2").textContent = animales.length);
}

function protectoras() {
    resp = fetch('http://arpaweb.ddns.net:8080/protectoras', {
        headers: {
            "Content-type": "application/json",
            'Authorization': "Bearer " + sessionStorage.getItem("accessToken")
        }
    })
            .then(response => response.json())
            .then(protectoras => document.getElementById("count1").textContent = protectoras.length);
}

personas();
protectoras();
animales();

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



//document.addEventListener("DOMContentLoaded", () => {
//    function counter(id, start, end, duration) {
//        let obj = document.getElementById(id),
//                current = start,
//                range = end - start,
//                increment = end > start ? 1 : -1,
//                step = Math.abs(Math.floor(duration / range)),
//                timer = setInterval(() => {
//                    current += increment;
//                    obj.textContent = current;
//                    if (current == end) {
//                        clearInterval(timer);
//                    }
//                }, step);
//    }
//    counter("count1", 0, 500, 500);
//    counter("count2", 0, 2000, 1000);
//    counter("count3", 0, personasEnArpa, 1500);
//});


function logout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

