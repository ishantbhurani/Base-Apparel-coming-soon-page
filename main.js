const subForm = document.querySelector(".subscription-form");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (email) => emailRegex.test(email);

subForm.onsubmit = (e) => {
  e.preventDefault();
  const userEmail = e.target.email.value;
  if (userEmail && validateEmail(userEmail)) {
    e.target.classList.remove("error");
    console.log(userEmail);
  } else {
    e.target.classList.add("error");
  }
};
