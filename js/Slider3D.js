const themes = [
    // { theme: "dark", priClr: "#1e2022", secClr: "#333539" },
    { theme: "light", priClr: "#fff", secClr: "#cecece" },
    // { theme: "custom", priClr: "#ccdff9", secClr: "#60a5fa" }
  ];
  
  let themeIndex = 0;
  
//   const themesDOM = document.querySelector(".themes");
  
//   const redirectBtn = document.getElementById("redirectTo");
  
  const componentID = "66aae00acee507776b3673b1";
  
  let baseURL = `https://we-code.dev/components/component?id=${componentID}`;
  
  const themeEvent = (targetEle) => {
    const targetElement = targetEle.target;
  
    const targetEleIndex = Array.from(
      document.querySelectorAll(".themes ul li")
    ).indexOf(targetElement);
  
    const switchThemeTo = targetElement.getAttribute("data-theme");
  
    const parentElement = targetElement.closest("ul");
  
    const { x: parentX } = parentElement.getBoundingClientRect();
    const { x: targetX } = targetElement.getBoundingClientRect();
  
    const fromX = `${targetX - parentX}px`;
  
    parentElement.style.setProperty("--posX", fromX);
  
    const containerEle = document.querySelector(".container");
  
    baseURL = `${baseURL.split("&")[0]}&theme=${switchThemeTo}`;
  
    containerEle.setAttribute("data-theme", switchThemeTo);
  
    const { priClr, secClr } = themes[targetEleIndex];
  
    containerEle.style.setProperty(
      "--matchBg",
      `linear-gradient(to bottom right, ${priClr}, ${secClr})`
    );
  };
  
  const renderThemes = () => {
    const ulEle = document.createElement("ul");
  
    themes.forEach((themeData) => {
      const { theme, priClr, secClr } = themeData;
  
      const liEle = document.createElement("li");
  
      liEle.style.background = `linear-gradient(to bottom right, ${priClr} 50%, ${secClr} 50%)`;
  
      liEle.setAttribute("data-theme", theme);
  
      liEle.addEventListener("click", themeEvent);
  
      ulEle.appendChild(liEle);
    });
  
    // themesDOM.appendChild(ulEle);
  };
  
//   redirectBtn.addEventListener("click", () => window.open(baseURL, "_blank"));
  
  renderThemes();
  
  
  
  
  
  
  
  
  const slideTransforms = [
    'translate3d(-300%, -50%, -6rem) rotateY(75deg) scale(0.75)',
    'translate3d(-250%, -50%, -3rem) rotateY(60deg) scale(0.8)',
    'translate3d(-200%, -50%, 0rem) rotateY(45deg) scale(0.85)',
    'translate3d(-150%, -50%, 3rem) rotateY(30deg) scale(0.9)', 
    'translate3d(-100%, -50%, 6rem) rotateY(15deg) scale(0.95)', 
    'translate3d(-50%, -50%, 9rem)', 
    'translate3d(0%, -50%, 6rem) rotateY(-15deg) scale(0.95)', 
    'translate3d(50%, -50%, 3rem) rotateY(-30deg) scale(0.9)', 
    'translate3d(100%, -50%, 0) rotateY(-45deg) scale(0.85)',
    'translate3d(150%, -50%, -3rem) rotateY(-60deg) scale(0.8)',
];
  
  const slides = document.querySelectorAll('.slide');
  
  slides.forEach((slide, index) => {
      const slideTransform = slideTransforms[index];
  
      slide.style.transform = slideTransform;
  });
  
  let debounceTimeOut;
  
  const navigateTo = (bool) => {
      clearTimeout(debounceTimeOut);
  
      debounceTimeOut = setTimeout(() => {
          if (bool) {
              slideTransforms.unshift(slideTransforms.pop());
          } else {
              slideTransforms.push(slideTransforms.shift());
          }
  
          slides.forEach((slide, index) => {
              slide.style.transform = slideTransforms[index];
          });
      }, 50);
  }
  
  document.getElementById('prev-slide').addEventListener('click', () => navigateTo(false));
  document.getElementById('nxt-slide').addEventListener('click', () => navigateTo(true));