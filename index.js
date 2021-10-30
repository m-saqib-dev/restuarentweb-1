const auth = document.getElementById("auth");
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");

window.addEventListener("scroll", (e) => {
  let b = () => {
    document.getElementById("social").style.top = `${window.scrollY + 100}px`;
    document.getElementById("auth").style.top = `${window.scrollY + 40}px`;
    requestAnimationFrame(b);
  };
  b();
});

loginBtn.addEventListener("mousedown", () => {
  document.getElementById("login-form").style.display = "grid";
  loginBtn.style.display = "none";
  registerBtn.style.display = "none";
});
registerBtn.addEventListener("mousedown", () => {
  document.getElementById("register-form").style.display = "grid";
  loginBtn.style.display = "none";
  registerBtn.style.display = "none";
});
