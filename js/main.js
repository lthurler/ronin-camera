// Card click

const cards = document.querySelectorAll('.card');
const services = document.querySelectorAll('.service');
const serviceTextContainer = document.getElementById('service-text-container');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const targetId = card.getAttribute('data-target');

        // Esconde todos os textos
        services.forEach(service => {
            service.classList.remove('active');
        });

        // Exibe o texto correspondente
        const targetService = document.getElementById(targetId);
        targetService.classList.add('active');

        // Exibe e aplica transição na div service-text-container
        serviceTextContainer.classList.add('active');       
    });
});



  /*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');
    const telUp = document.getElementById('tel-up');

    console.log(telUp)

    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll') 
    
    this.scrollY >= 350 ? telUp.classList.add('show-scroll')
        : telUp.classList.remove('show-scroll')    

}
window.addEventListener('scroll', scrollUp);


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactModel = document.getElementById("contact-marca"),
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
            contactModel.value = ''
            contactProject.value = ''
      }
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
    //reset:true /* Animations repeat */
})

sr.reveal(`.contact__content`)
sr.reveal(`#card-sobre-container,#social-container, #copyright, #cabo-card, #mesh, #externo, #ap`, {delay: 600, origin:'bottom', interval: 100})
sr.reveal(`#main-text, #footer-logo img, #footer-content`, {origin:'left'})
sr.reveal(`#main-img, #footer-menu, #footer-map`, {origin:'right'})
sr.reveal(`.qualification__content, .services__card`, { interval: 100 })

// , #mesh-txt, #externo-img, #ap-txt , #mesh-img, #externo-txt, #ap-img