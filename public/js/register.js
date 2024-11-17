document.addEventListener("DOMContentLoaded", () => {
  async function handlerRegister(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      if (res.status === 200) {
        alert("Registro exitoso");
      } else {
        alert(`error ${data.msg}`);
      }
    } catch (error) {
      console.error(error);
      alert("Error de registro");
    }
  }

  document.getElementById('registerForm').addEventListener('submit', handlerRegister);
});
