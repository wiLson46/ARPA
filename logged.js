function getSession(){
    fetch('http://arpaweb.ddns.net:8080/login',{
        method:'GET',
    })(response => response.status)
    .then(text => {
        console.log(text)
        if(text==404)window.location.href = "./index.html";
    }
    );
}

getSession
