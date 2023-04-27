// Shwo and hide navbar on scroll
// Get the navbar element
const navbar = document.querySelector('.navbar');

// Set the initial scroll position to 0
let prevScrollpos = window.pageYOffset;

// Add an event listener for scrolling
window.addEventListener('scroll', () => {
// Get the current scroll position
const currentScrollPos = window.pageYOffset;


// If the user is scrolling up and the navbar is hidden, show it
if (prevScrollpos > currentScrollPos && navbar.classList.contains('hidden')) {
    navbar.classList.remove('hidden');
}

// If the user is scrolling down and the navbar is not hidden, hide it
else if (prevScrollpos < currentScrollPos && !navbar.classList.contains('hidden')) {
    navbar.classList.add('hidden');
}

// Set the previous scroll position to the current scroll position
prevScrollpos = currentScrollPos;
});

//Show navbar when burger clicked
const burgerButton = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links')
const dropMenu = document.querySelector('.dropdown-menu')
burgerButton.addEventListener('click', ()=>{
   //Show drop down menu
    dropMenu.classList.toggle('show');

    // Rote the lines for the burger menu
    burgerButton.classList.toggle('close');
})




//hide message box when ok button clicked
const okButton = document.querySelector('.ok-button');
const boxContainer = document.querySelector('#box-container');

//show message box when cv-button is clicked
const cvButton = document.querySelector('.cv-button');
const cv_button =document.querySelector('#cv-button')

//for lager screen
cvButton.addEventListener('click', ()=>{
    boxContainer.style.display = 'block';
})
//for small screen
cv_button.addEventListener('click', ()=>{
    boxContainer.style.display = 'block';
})

okButton.addEventListener('click', ()=>{
    boxContainer.style.display = 'none';
})

//Add animation to about me section when user scroll to it
const aboutMe = document.querySelector('.about-me-section');

const delay_text = document.querySelector('.delay-text');
const about_me_paragraph = document.querySelector('.about-me-paragraph');
const about_me_image = document.querySelector('.about-me-image');


window.addEventListener('scroll', ()=>{
    //Get scroll position 
    const aboutMeTop = aboutMe.getBoundingClientRect().top;
    const aboutMeBottom = aboutMe.getBoundingClientRect().bottom;

    if(aboutMeTop<= window.innerHeight && aboutMeBottom >= 0){
        //Add animation to about me title and paragraph and image
        delay_text.classList.add('animate-text');
        about_me_paragraph.classList.add('animate-text');
        about_me_image.classList.add('animate-image');
    }else {
        //Remove animation to about me title and paragraph and image
        delay_text.classList.remove('animate-text');
        about_me_paragraph.classList.remove('animate-text');
        about_me_image.classList.remove('animate-image');
    }
    
})

// Dark and light mode button functionality
const modeButton = document.querySelector('.mode-button');
const paragraphSpan = document.querySelector('#span');
const aboutMeParagraph = document.querySelector('.about-me-paragraph');
const bodyTag = document.querySelector('#body');

//Change the color of dark and light text when active and unactive
const textDark = document.querySelector('.dark');
const textLight = document.querySelector('.light');

modeButton.addEventListener('click', ()=>{
    modeButton.classList.toggle('active');
    paragraphSpan.classList.toggle('light');
    aboutMeParagraph.classList.toggle('light');
    bodyTag.classList.toggle('light');

    //Change the text color from red to green and vise versa
    textDark.classList.toggle('unactive');
    textLight.classList.toggle('unactive');
})

