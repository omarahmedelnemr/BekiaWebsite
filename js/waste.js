if (window.innerWidth < 800) {
    document.querySelector('#Collected_waste .slider-container').style.display = 'none';
    document.querySelector('#Collected_waste .Slider').style.display = 'block';
    document.querySelector("#Collected_waste").classList.remove("Slider3D");
    document.querySelector("#Collected_waste").style.height = 'max-content';
}