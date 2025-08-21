const sidebarLinks = document.querySelectorAll('.side-bar-item a');
const sections = document.querySelectorAll('.section-p1');

function setActiveLink() {
  let currentSection = null;

// Determine the current section based on scroll position
  sections.forEach(section => {
    const sectionTop = section.offsetTop -100;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (window.scrollY >= sectionTop  && window.scrollY < sectionBottom ) {
      currentSection = section.getAttribute('id');
    }
  });

// Highlight the active link and card in the sidebar
  sidebarLinks.forEach(link => {
    const href = link.getAttribute('href').substring(1);
    const parent = link.parentElement;
    if (href === currentSection) {
      parent.classList.add('side-bar-item-current');
      parent.classList.remove('side-bar-item');
    } else {
    parent.classList.remove('side-bar-item-current');
    parent.classList.add('side-bar-item');
    }
  });
}

window.addEventListener('scroll', setActiveLink);
    






const sidebar = document.querySelector('.side-bar');
const main = document.querySelector('.main-content');

sidebar.addEventListener('mouseenter', () => {
  main.classList.add('sidebar-expanded');
});

sidebar.addEventListener('mouseleave', () => {
  main.classList.remove('sidebar-expanded');
});






function generateRandomNumber(){
  const randomNum = Math.floor ( Math.random()*1000000)
  document.getElementById("random-number").innerHTML=randomNum;
}

window.addEventListener('scroll', generateRandomNumber)







let title = document.getElementById('PharmaGate');
let currentTop = 0;

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  title.style.top = currentTop + scrollY + 'px';
});






const background = document.querySelector('.threats-card');

// When mouse enters sidebar
sidebar.addEventListener('mouseenter', () => {
    background.style.left = '-380px';
});

// When mouse leaves sidebar
sidebar.addEventListener('mouseleave', () => {
    background.style.left = '-160px';
});








const cards = document.querySelectorAll('.threats-card');

windows.addEventListener('scroll', () => {
  let val = window.scrollY;

  cards.forEach(element => {
    element.style.top = val * 0.5 + 'px';    
  });
})