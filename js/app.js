const form = document.getElementById("form");
const email = document.getElementById("email");
const alert = document.getElementById("alert");

const Campo = {
  email: false,
};

const Filter = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const reset = () => {
  Campo.email = false;
  email.value = "";
  alert.classList.remove("alert-active");
  email.classList.remove("txt-active");
};

const ValidarTxt = (dato) => {
  if (Filter.email.test(dato)) {
    Campo.email = true;
    alert.classList.remove("alert-active");
    email.classList.remove("txt-active");
  } else {
    Campo.email = false;
    alert.classList.add("alert-active");
    email.classList.add("txt-active");
  }
};

email.addEventListener("keyup", () => {
  ValidarTxt(email.value);
});

email.addEventListener("blur", () => {
  ValidarTxt(email.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (Campo.email == true) {
    reset();
    Swal.fire({
      icon: "success",
      title: "SUCCESS",
      text: "Data sent.",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "WARNING",
      text: "The form has errors.",
    });
  }
});
