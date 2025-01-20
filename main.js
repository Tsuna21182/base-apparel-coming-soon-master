const btn = document.querySelector(".btn");
const input = document.getElementById("input");
const mensaje = document.querySelector(".error");

btn.addEventListener("click", validation);

function validation(e) {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Limpiar clases previas antes de aplicar nuevas
  mensaje.classList.remove("active", "exitoso");

  if (input.value.trim() === "") {
    input.classList.add("input__error");
    mensaje.classList.add("active");
    mensaje.textContent = "Please provide an email address";
  } else if (!emailRegex.test(input.value.trim())) {
    input.classList.add("input__error");
    mensaje.classList.add("active");
    mensaje.textContent = "Please provide a valid email";
  } else {
    input.classList.remove("input__error");
    mensaje.classList.add("exitoso");
    mensaje.textContent = "¡Envío exitoso!";

    // Limpiar el campo de entrada después de un segundo
    setTimeout(() => {
      input.value = "";
      mensaje.classList.remove("exitoso");
      mensaje.textContent = "";
    }, 2000);
  }
}
