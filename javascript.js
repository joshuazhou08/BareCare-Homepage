

const newsletter_link = document.querySelector('#newsletter-link')

const newsletter = document.querySelector(".newsletter")

newsletter_link.addEventListener("click", ()=>{newsletter.scrollIntoView({behavior: "smooth"})})

//Fade scroll animations using Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('fadeup')
        } else {
            entry.target.classList.remove('fadeup')
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((element) => {
    observer.observe(element);
})

//Nav bar hidden when scrolling down
const navbar = document.querySelector("nav")
let lastScrollTop = 0;

    window.addEventListener("scroll", function() {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > 200){

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.transform = "translateY(-100%)";
            navbar.style.opacity = '0';
        } else {
            // Scrolling up
            navbar.style.transform = "translateY(0)";
            navbar.style.opacity = '1';
        }

        lastScrollTop = currentScrollTop;
    }
    });

