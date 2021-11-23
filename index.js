const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const drawerMenu = document.getElementById("drawer-menu");
const timer = document.getElementById("timer");
const togglebtn = document.getElementsByClassName("toggle-btn");
console.log();
let isOpen = true;
function menu() {
  console.log(isOpen);
  if (isOpen) {
    isOpen = false;
    togglebtn[0].children[0].style.display = "none";
    togglebtn[0].children[1].style.display = "block";
    drawerMenu.style.left = "0%";
  } else {
    isOpen = true;
    drawerMenu.style.left = "100%";
    togglebtn[0].children[1].style.display = "none";
    togglebtn[0].children[0].style.display = "block";
  }
}
togglebtn[0].addEventListener("click", () => {
  menu();
});
