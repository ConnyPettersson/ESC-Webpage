
const htmlElement = document.querySelector('html');

const toggleButton = document.querySelector('.toggleButton')
const navBarLinks = document.querySelector('.hamburger-links')
const closeButton = document.querySelector(".close")
const whiteBackGround = document.querySelector(".toggleButtonBackground");

toggleButton.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)

function openMenu() {
  navBarLinks.style.display = 'flex';
  whiteBackGround.style.display = 'flex';
  htmlElement.style.overflow = 'hidden';
}

function closeMenu() {
  navBarLinks.style.display = 'none';
  whiteBackGround.style.display = 'none';
  htmlElement.style.removeProperty('overflow');
}