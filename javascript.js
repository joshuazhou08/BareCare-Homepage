

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


