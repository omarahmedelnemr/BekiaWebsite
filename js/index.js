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
    let filePath = lang === 'ar' ? 'ar.html' : 'en.html';

    // Fetch the HTML content of the corresponding file
    fetch(filePath)
        .then(response => response.text()) // Get the text content of the HTML file
        .then(data => {
            // Insert the fetched HTML content into the #content div
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}

// Call the function to load content when the page loads
// window.onload = loadContent;
