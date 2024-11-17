document.addEventListener("DOMContentLoaded", () => {
  async function handlerLogin(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.status === 200) {
        alert("Ingreso exitoso");
      } else {
        alert(`error ${data.msg}`);
      }
    } catch(error){
        console.error(error);
        alert('Error de Login');
    }
  }

  document.getElementById('loginForm').addEventListener('submit', handlerLogin);
});
