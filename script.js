const nav = document.getElementById('nav')

const homeNav = document.getElementById('home-nav');
const aboutNav = document.getElementById('about-nav');
const servicesNav = document.getElementById('services-nav');
const contactNav = document.getElementById('contact-nav');
const resourcesNav = document.getElementById('resources-nav');

let navArray = [homeNav, aboutNav, servicesNav, contactNav, resourcesNav];

window.addEventListener("scroll", () => {
    if (scrollY >= 100) {
        // console.log("Scrolled");
        nav.classList.add('onscroll');
    } else {
        nav.classList.remove('onscroll');
    }
});

const lThmBtn = document.getElementById('l-thm-btn');
const dThmBtn = document.getElementById('d-thm-btn');
const body = document.querySelector('body');
const logoImg = document.getElementById('logo-img')

const thmBtnClicked = (btnPri, btnSec, home, lgImg) => {
    btnPri.style.display = "none";
    btnSec.style.display = "block";
    home.classList.toggle('dark');
    if (lgImg.src.includes('assets/Logo-02.png')) {
        lgImg.src = "assets/Logo-02-lght.png";
    } else {
        lgImg.src = "assets/Logo-02.png";
    }
}

lThmBtn.addEventListener('click', () => {
    thmBtnClicked(lThmBtn, dThmBtn, body, logoImg);
    event.preventDefault();
});

dThmBtn.addEventListener('click', () => {
    thmBtnClicked(dThmBtn, lThmBtn, body, logoImg);
    event.preventDefault();
});


const openNav = document.querySelector('#open-nav');
const closeNav = document.querySelector('#close-nav');
const navB = document.querySelector('.nav-before');
const navItems = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll('.nav-link');


const homeTab = document.querySelector('#home-tab');
const aboutTab = document.querySelector('#about-tab');
const servicesTab = document.querySelector('#services-tab');
const contactTab = document.querySelector('#contact-tab');
const resourcesTab = document.querySelector('#resources-tab');
const dummyTab = document.querySelector('#dummy');
// const tabsArray = [homeTab, aboutTab, servicesTab, contactTab, resourcesTab];
const tabsArrayAll = document.querySelectorAll('.tab');
// console.log(tabsArrayAll);


const promptNav = (priBtn, secBtn, navBar) => {
    priBtn.style.display = 'none';
    secBtn.style.display = 'block';
    navBar.classList.toggle('open');
    navB.classList.toggle('open');
};

openNav.addEventListener('click', () => {promptNav(openNav, closeNav, nav)});
closeNav.addEventListener('click', () => {promptNav(closeNav, openNav, nav)});
navB.addEventListener('click', () => {
    closeNav.style.display = 'none';
    openNav.style.display = 'block';
    nav.classList.remove('open');
    navB.classList.remove('open');
    
});

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', () => {
    closeNav.style.display = 'none';
    openNav.style.display = 'block';
    nav.classList.remove('open');
    navB.classList.remove('open');
    });
}

const navBtnClickFn = (navBtnCl, actTab) => {
    for (let i = 0; i < navItems.length; i++) {navItems[i].classList.remove('active')};
    // for (let i = 0; i < tabsArray.length; i++) {tabsArray[i].classList.remove('active')};
    for (let i = 0; i < tabsArrayAll.length; i++) {tabsArrayAll[i].classList.remove('active')};
    navBtnCl.classList.add('active');
    actTab.classList.add('active');
}
