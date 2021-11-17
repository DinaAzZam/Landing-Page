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

// Define all sections
const sections = document.querySelectorAll('section');

// Define the un orderd list
const ulList = document.querySelector('#navbar__list');

// Define the virsual DOM
const fragment = document.createDocumentFragment();

// build the navbar
sections.forEach(item => {

  // Li for each section
  const navNode = document.createElement('li');

  // Link for each section
  const navLink = document.createElement('a');

  // Set the data according to each section
  const navData = item.getAttribute('data-nav');
  navNode.setAttribute('data-nav', navData);

  // append each link to each li
  navNode.appendChild(navLink);

  // set the content text
  navLink.textContent = navData;

  //append each li to DOM
  fragment.appendChild(navNode);

  // Scroll to section on link click
  navLink.addEventListener('click', () =>{
    item.scrollIntoView({'behavior':'smooth'});
  });
});

ulList.appendChild(fragment);

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', () => {
  sections.forEach(section => {

    const rect = section.getBoundingClientRect();

    if(rect.top >= 0 && rect.top < 200) {
      const activeOne = section;

      sections.forEach(eachSec => {
        // remove active class from all sections
        eachSec.classList.remove('your-active-class');
        // add active class to the active section only
        activeOne.classList.add('your-active-class');


        // data nav for active section
        const activeNavbar = activeOne.getAttribute('data-nav');

        // Define all list items
        const listItems = document.querySelectorAll('li');

        listItems.forEach(lItem => {
          // data nav for each li
          const liData = lItem.getAttribute('data-nav');

          if(activeNavbar == liData) {
            const activeLi = lItem;

            listItems.forEach(term => {
              term.classList.remove('active');
              activeLi.classList.add('active');
            });
          }
        });
      });
    }
  });
});
