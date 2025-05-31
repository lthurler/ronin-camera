const navMenu = document.getElementById("nav-menu"),
     navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");
     
navToggle && navToggle.addEventListener("click", () => {
          navMenu.classList.add("show-menu");
}),
    
navClose && navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
});
          
const navLink = document.querySelectorAll(".nav__link"),
     linkAction = () => {
          const e = document.getElementById("nav-menu");
          e.classList.remove("show-menu");
};
     
navLink.forEach((e) => e.addEventListener("click", linkAction));
const scrollUp = () => {
     const e = document.getElementById("scroll-up"),
          t = document.getElementById("tel-up");
     console.log(t), this.scrollY >= 350 ? e.classList.add("show-scroll") : e.classList.remove("show-scroll"), this.scrollY >= 350 ? t.classList.add("show-scroll") : t.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);
// const contactForm = document.getElementById("contact-form"),
//      contactName = document.getElementById("contact-name"),
//      contactEmail = document.getElementById("contact-email"),
//      contactModel = document.getElementById("contact-marca"),
//      contactProject = document.getElementById("contact-project"),
//     contactMessage = document.getElementById("contact-message"),
     
   /*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactProject = document.getElementById('contact-project'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
e.preventDefault()

// Check if the field has a value
if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
    // Add and remove color
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')
    // Show message
    contactMessage.textContent = 'Preencha todos os campos por favor'
}else {
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_vhr6jx1','template_b6335rj','#contact-form','zv4cDFntr7h6rvv2m') 
        .then(() => {
            // Show message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Email enviado com sucesso!'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
          
        }, (error) => {
            alert('OPA! ALGO FALHOU...', error)
        })

      // To clear the input field
      contactName.value = ''
      contactEmail.value = ''
      contactProject.value = ''
}
}

contactForm.addEventListener('submit', sendEmail)

const sr = ScrollReveal({ origin: "top", distance: window.innerWidth <= 768 ? '30px' : '40px', duration: 2500, delay: 400 });

sr.reveal(".contact__content"),
     sr.reveal("#card-sobre-container,#social-container, #copyright, #cabo-card, #mesh, #externo, #cftv-txt,  #ronin-txt", { delay: 600, origin: "bottom", interval: 100 }),
     sr.reveal("#main-text, #footer-logo img, #footer-content, #ronin-img, #cftv-img-container", { origin: "left" }),
     sr.reveal("#contato-container, #footer-menu, #footer-map", { origin: "right" }),
     sr.reveal(".qualification__content, .services__card", { interval: 100 });
