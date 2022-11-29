function toggle() {
    let header = document.querySelector("#header");
    header.classList.toggle("active1");
  }
  
  const slides = document.querySelectorAll(".slide");
  
  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  }
  
  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }