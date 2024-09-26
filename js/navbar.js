let bar = document.getElementById("resbar");
let nav = document.getElementById("navItems");


bar.addEventListener("click", ()=>{
  if(nav.classList.contains("nav-items")) {
    nav.classList.remove("nav-items");
    nav.classList.add("nav-items-mob");
  } else {
    nav.classList.remove("nav-items-mob");
    nav.classList.add("nav-items");
  }
});

