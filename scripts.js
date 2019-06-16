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

// Accordion Open and Closing
var accordions = document.querySelectorAll(".accordion__header");

accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        // Grab the ul food list
        var content = accordion.nextElementSibling;
        // Granb the chevron inside of button and rotate on click
        var chevron = accordion.querySelector(".chevron");
        if(content.style.maxHeight){
            content.style.maxHeight = null;
            chevron.classList.add("rotate-chevron-down");
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            chevron.classList.add("rotate-chevron-up");
            chevron.classList.remove("rotate-chevron-down");
        }
        event.preventDefault();
    });
});