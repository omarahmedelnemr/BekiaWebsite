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