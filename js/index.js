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
    console.log('button clicked')
    boxContainer.style.display = 'block';
})
//for small screen
cv_button.addEventListener('click', ()=>{
    console.log('button clicked')
    boxContainer.style.display = 'block';
})
okButton.addEventListener('click', ()=>{
    boxContainer.style.display = 'none';
})