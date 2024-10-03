// function isIphoneOrFallback() {
//     // Check if the device is iPhone 8 or older
//     const ua = navigator.userAgent;
//     if (/iPhone/.test(ua) && !window.CSS.supports('(-webkit-overflow-scrolling: touch)')) {
//       return true; // iPhone 8 or older
//     }
//     return false;
// }
// // Initialize based on device
// console.log(isIphoneOrFallback())
// if (isIphoneOrFallback()) {
//     document.querySelector('#Collected_waste .slider-container').style.display = 'none';
//     document.querySelector('#Collected_waste .Slider').style.display = 'block';
//     document.querySelector("#Collected_waste").classList.remove("Slider3D")
// }
if (window.innerWidth < 800) {
    document.querySelector('#Collected_waste .slider-container').style.display = 'none';
    document.querySelector('#Collected_waste .Slider').style.display = 'block';
    document.querySelector("#Collected_waste").classList.remove("Slider3D");
    document.querySelector("#Collected_waste").style.height = 'max-content';
}
function changeLange(event){
    console.log("Clicked")
    if (localStorage.getItem("lang") === "en"){
        localStorage.setItem("lang","ar")
    }else{
        localStorage.setItem("lang","en")
    }
    window.location.reload()
}

// Function to load the content dynamically
function loadContent() {
    // Get the language from localStorage
    const lang = localStorage.getItem('lang') || 'ar'; // Default to 'ar' if no language is set

    // Define the file path based on the language
    var elements;
    var sectionsDirection = document.querySelectorAll(".language_directed_section")
    var direction;
    if (lang === 'ar'){
        elements = document.querySelectorAll(".EN")
        direction = 'rtl'
    }else{
        elements = document.querySelectorAll(".AR")
        direction = 'ltr'
    }
    for (var element of elements){
        element.style.display = "none"
    }
    for (var section of sectionsDirection){
        section.style.direction = direction
    }


    document.getElementById("content").style.display = 'block'
}

// Call the function to load content when the page loads
window.onload = loadContent;
