// ==================== Toggle Icon navbar =====================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
};


// ==================== Scroll Setion active links =====================

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=>{
        let top = window.screenY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
      
        if (top >= offset && top < offset + height  ){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };

    });
    
// // ==================== Sticky navbar =====================

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY >100);

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};

// // Get all the navigation links
// const navLinks = document.querySelectorAll('.nav-links');

// // Add a click event listener to each navigation link
// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     // Remove the active class from all the navigation links
//     navLinks.forEach(link => link.classList.remove('active'));

//     // Add the active class to the clicked navigation link
//     link.classList.add('active');
//   });
// });

// // Add a scroll event listener to the window
// window.addEventListener('scroll', () => {
//   // Get the current scroll position of the window
//   const scrollPosition = window.scrollY;

//   // Get the top offset of each section
//   const sectionOffsets = Array.from(document.querySelectorAll('section')).map(section => ({
//     id: section.id,
//     offsetTop: section.offsetTop,
//     height: section.offsetHeight
//   }));

//   // Get the id of the section that is currently in view
//   const currentSectionId = sectionOffsets.reduce((acc, section) => {
//     if (scrollPosition >= section.offsetTop - section.height / 2) {
//       return section.id;
//     } else {
//       return acc;
//     }
//   }, sectionOffsets[0].id);

//   // Remove the active class from all the navigation links
//   navLinks.forEach(link => link.classList.remove('active'));

//   // Add the active class to the navigation link of the current section
//   const currentNavLink = document.querySelector(`.nav-links[href="#${currentSectionId}"]`);
//   currentNavLink.classList.add('active');
// });



