const newsletter_link = document.querySelector('#newsletter-link')

const newsletter = document.querySelector(".newsletter")

newsletter_link.addEventListener("click", ()=>{newsletter.scrollIntoView({behavior: "smooth"})})