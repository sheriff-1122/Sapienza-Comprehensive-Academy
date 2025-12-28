const form = document.getElementById("registerForm");
const infoMsg = document.getElementById("infoMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;

  // Save data in localStorage
  localStorage.setItem("fullName", fullName);
  localStorage.setItem("email", email);

  infoMsg.textContent = "Registration successful! Redirecting in 10 seconds...";

  // Redirect to welcome page after 10 seconds
  setTimeout(() => {
    window.location.href = "welcome.html";
  }, 10000);
});
