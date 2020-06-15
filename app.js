var preloader= document.getElementById('loader');
  function myfunction(){
  preloader.style.display='none';
  }
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const overlay = document.querySelector('.overlay');
const navbarMenu = document.querySelector('.navbar__menu');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
window.addEventListener('scroll',()=>{
    console.log("scrolled!");
    const scrollable = document.documentElement.scrollHeight- window.innerHeight;
    const scrolled = window.scrollY;
    navbarMenu.classList.remove('hide');
   setTimeout(function(){
    navbarMenu.classList.add('hide');},4000); 
    
});
  

// Add class 'active' to section when near top of viewport

  /*const navigationLinks = document.querySelector("nav ul li a");
  navigationLinks.classList.add('active');

  let section = document.querySelector("section");
  section.addEventListener('click', function(){
    console.log("section clicked");
  });*/
 /*let fromTop = window.scrollBy;
  
 const navigationLinks = document.querySelector("nav ul li a");
    let section = document.querySelector("#");
    let viewport = section.getBoundingClientRect();
    section.addEventListener('scroll', function(){
      console.log("section clicked on viewport");
    });
   if(
      section.offsetTop = fromTop
    ) {
      navigationLinks.classList.add('active');
    }else{
      console.log("not on viewport");
    }
  */


// Scroll to anchor ID using scrollTO event
function scrolltotop(){
  window.scrollTo({top :0, behavior : smooth});
}

document.querySelector(".totop").addEventListener("click",scrolltotop);



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
  /* let menu = document.createElement('div');
 		menu.setAttribute('class','menu');
 		overlay.appendChild(menu);
*/
// Scroll to section on link click

// Set sections as active
