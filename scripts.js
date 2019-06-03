// Menu Opening and Closing
var menuOpen = document.getElementsByClassName("menu-open")[0];
var menuClose = document.getElementsByClassName("menu-close")[0];
var menu = document.getElementsByTagName("nav")[0];

menuOpen.addEventListener('click', openmenu);
menuClose.addEventListener('click', closemenu);


function openmenu(event) {
  event.preventDefault();
  // console.log("click");
  menu.classList.add("nav-open");
  menuOpen.classList.add("spin");
}

function closemenu(event) {
  event.preventDefault();
  menu.classList.remove("nav-open");
  menuOpen.classList.remove("spin");
}
