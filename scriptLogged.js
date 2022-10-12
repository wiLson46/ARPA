if (!sessionStorage.getItem("accessToken")) {
  window.location.href = 'index.html';
}

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
      let obj = document.getElementById(id),
              current = start,
              range = end - start,
              increment = end > start ? 1 : -1,
              step = Math.abs(Math.floor(duration / range)),
              timer = setInterval(() => {
                  current += increment;
                  obj.textContent = current;
                  if (current == end) {
                      clearInterval(timer);
                  }
              }, step);
  }
  counter("count1", 0, 500, 500);
  counter("count2", 0, 2000, 1000);
  counter("count3", 0, 1000, 1500);
});


function logout() {
  sessionStorage.clear();
  window.location.href = 'index.html';
}

function loggedUser() {
  const param = {
      mail: sessionStorage.getItem("email")
  };
  resp = fetch('http://localhost:8080/persona?mail=alandsn137@gmail.comg', {
      headers: {
          "Content-type": "application/json",
          'Authorization': "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGFuZHNuMTM3QGdtYWlsLmNvbWcsbnVsbCIsImlzcyI6IkNvZGVKYXZhIiwiaWF0IjoxNjY1NjEyMTI1LCJleHAiOjE2NjU2OTg1MjV9.xJHkxp2d9nWkJEePbX9lFJQWz46NNYMiyNZhUF_DIq6BuzPQ3qj1Dz_XMuG7jlxzzE_iXlXRjJDW9Z4IuSmWxg"
      }
  })
          .then(response => response.json())
          .then(user => document.getElementById("loggedUser").innerText = user.nombre);
}

loggedUser();