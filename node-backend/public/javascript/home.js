gsap.to(".navbar-icon", {
  duration: 0.3,
  opacity: 1,
  y: 0,
  stagger: 0.2, 
  ease: "power2.out"
});

gsap.to(".incide-invisible-first-page-main-box-center-bottom-container, .invisible-first-page-main-box-center-bottom-container", {
  duration: 0.2,
  opacity: 1,
  y: 0,
  stagger: 0.1,
  ease: "power2.out"
})

document.getElementById("arbtn1").addEventListener("click", () => {
  document.getElementById("ans1").style.display = "block";
  document.getElementById("ans2").style.display = "none";
  document.getElementById("ans3").style.display = "none";
  document.getElementById("ans4").style.display = "none";
  document.getElementById("ans5").style.display = "none";
  document.getElementById("ans6").style.display = "none";
});

document.getElementById("arbtn2").addEventListener("click", () => {
  document.getElementById("ans1").style.display = "none";
  document.getElementById("ans2").style.display = "block";
  document.getElementById("ans3").style.display = "none";
  document.getElementById("ans4").style.display = "none";
  document.getElementById("ans5").style.display = "none";
  document.getElementById("ans6").style.display = "none";
});

document.getElementById("arbtn3").addEventListener("click", () => {
  document.getElementById("ans1").style.display = "none";
  document.getElementById("ans2").style.display = "none";
  document.getElementById("ans3").style.display = "block";
  document.getElementById("ans4").style.display = "none";
  document.getElementById("ans5").style.display = "none";
  document.getElementById("ans6").style.display = "none";
});

document.getElementById("arbtn4").addEventListener("click", () => {
  document.getElementById("ans1").style.display = "none";
  document.getElementById("ans2").style.display = "none";
  document.getElementById("ans3").style.display = "none";
  document.getElementById("ans4").style.display = "block";
  document.getElementById("ans5").style.display = "none";
  document.getElementById("ans6").style.display = "none";
});

document.getElementById("arbtn5").addEventListener("click", () => {
  document.getElementById("ans1").style.display = "none";
  document.getElementById("ans2").style.display = "none";
  document.getElementById("ans3").style.display = "none";
  document.getElementById("ans4").style.display = "none";
  document.getElementById("ans5").style.display = "block";
  document.getElementById("ans6").style.display = "none";
});

document.getElementById("arbtn6").addEventListener("click", () => {
  document.getElementById("ans1").style.display = "none";
  document.getElementById("ans2").style.display = "none";
  document.getElementById("ans3").style.display = "none";
  document.getElementById("ans4").style.display = "none";
  document.getElementById("ans5").style.display = "none";
  document.getElementById("ans6").style.display = "block";
});

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}