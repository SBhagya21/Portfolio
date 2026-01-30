
const header = document.querySelector("header");
const headerH1 = document.querySelector("header h1");

let hasAnimated = false;

function handleHeaderAnimation() {
  const rect = header.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible && !hasAnimated) {
      headerH1.classList.add("show");
      hasAnimated = true;
    }

    if (!isVisible) {
      headerH1.classList.remove("show");
      hasAnimated = false;
    }
}


function animateSkills() {
   const skills = document.getElementById("skills");
   const bars = document.querySelectorAll(".skillbar-fill");
 
   const sectionTop = skills.getBoundingClientRect().top;
   const sectionBottom = skills.getBoundingClientRect().bottom;
   const screenHeight = window.innerHeight;

   if (sectionTop < screenHeight && sectionBottom > 0) {
    bars.forEach((bar, index ) => {
        setTimeout(() => {
             bar.style.transform = `scaleX(${bar.dataset.level})`;
            }, index * 200);
        });
   } 
   else {
    bars.forEach(bar => {
        bar.style.transform = "scaleX(0)";
    });
   }
}

window.addEventListener("load", () => {
    handleHeaderAnimation();
    animateSkills();
} );

window.addEventListener("scroll", () => {
    handleHeaderAnimation();
    animateSkills();  
});

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(() => {
            animateSkills();

        }, 50);
    });
});
