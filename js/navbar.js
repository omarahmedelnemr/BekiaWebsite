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
const items = nav.querySelectorAll("a")
// if (window.innerWidth < 1370){
  for (var item of items){
    item.addEventListener("click",()=>{
      if (window.innerWidth < 1370){
        bar.click()
      }
    })
  }
// }