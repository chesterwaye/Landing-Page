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
const navMenu = document.getElementById('navbar__list');

const links = document.querySelectorAll('.menu__link');
const sec = document.querySelectorAll('section');

const secs = document.getElementsByTagName("section");

const isInViewport = (elem) => {
    const bounding = elem.getBoundingClientRect();

    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)


    );
};

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

 function buildNav() {
    for (let sectionItem of secs) {
        let li = document.createElement("li");
        li.className = "menu__link";
        li.innerHTML = `<a href="#${sectionItem.id}">${sectionItem.dataset.nav}</a>`;
        navMenu.appendChild(li);
    }
}
buildNav();
 

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// Add class 'active' to section when it is near top of viewport


// Add class 'active' to section when it is near top of viewport

const addActiveClass = (isInViewport) => {
    document.addEventListener("scroll", () => {
        for (let i = 0; i < sec.length; i++) {
            const section = sec[i];

            isInViewport(section)
                ? section.classList.add("your-active-class")
                : section.classList.remove("your-active-class");
        }
    });
};

// Make sections active

addActiveClass(isInViewport);

const scrollByClick = () => {
    const link = document.querySelectorAll('a[href^="#"]');
}


// Build a global variable
