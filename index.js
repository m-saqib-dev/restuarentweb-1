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
const deadline = "December 31 2021 23:59:59 GMT+0200";
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const millieseconds = Math.floor((total * 5) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
    millieseconds,
  };
}
const anim = () => {
  let time = getTimeRemaining(deadline);
  timer.innerHTML = `days ${time.days} hours ${time.hours} minutes ${time.minutes} seconds ${time.seconds} m seconds ${time.millieseconds}`;
  requestAnimationFrame(anim);
};
anim();
requestAnimationFrame(getTimeRemaining);
console.log(getTimeRemaining(deadline));
