
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.toggleButton');
  const navBarLinks = document.querySelector('.navBar-links');

  toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
  });
});


/* const toggleButton = document.getElementsByClassName("toggleButton")[0]
const navBarLinks = document.getElementsByClassName("navBar-links")[0]

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active")
}) */


/* document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggleButton");
  const navBarLinks = document.querySelector(".navBar-links");

  toggleButton.addEventListener("click", () => {
    navBarLinks.classList.toggle("active");
  });
}); */


/* const toggleButton = document.getElementsByClassName("toggleButton")[0];
const navBarLinks = document.getElementsByClassName("navBar-links")[0];

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");

  // Hämta alla li-element inuti .navBar-links
  const liElements = navBarLinks.querySelectorAll('li');

  // Loopa igenom li-elementen och lägg till/ta bort klassen 'visible'
  liElements.forEach((li) => {
    li.classList.toggle('visible');
  });
}); */

/* const toggleButton = document.getElementsByClassName("toggleButton")[0];
const navBarLinks = document.getElementsByClassName("navBar-links")[0];

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");

  // Hämta alla li-element inuti .navBar-links
  const liElements = navBarLinks.querySelectorAll('li');

  // Loopa igenom li-elementen och lägg till/ta bort klassen 'visible'
  liElements.forEach((li) => {
    li.classList.toggle('visible');
  });
});

// Lägg till en ny event listener för att visa menyn vid klick på .toggleButton när skärmstorleken är mindre än 440px
toggleButton.addEventListener("click", () => {
  const windowWidth = window.innerWidth;

  // Kontrollera om skärmstorleken är mindre än 440px
  if (windowWidth <= 440) {
    // Visa menyn och ta bort 'active'-klassen
    navBarLinks.classList.add('active');

    // Loopa igenom li-elementen och lägg till klassen 'visible'
    liElements.forEach((li) => {
      li.classList.add('visible');
    });
  }
}); */


/* const toggleButton = document.querySelector(".toggleButton")[0]
const navBarLinks = document.querySelector(".navBar-links")[0]

toggleButton.addEventListener("click", () => {
  // Toggle active-klassen på .navBar-links
  navBarLinks.classList.toggle("active");

  // Hämta alla li-element inuti .navBar-links
  const liElements = navBarLinks.querySelectorAll('li');

  // Loopa igenom li-elementen och lägg till/ta bort klassen 'visible'
  liElements.forEach((li) => {
    li.classList.toggle('visible');
  });
});

// Stäng menyn när en länk klickas (för mobila enheter)
const navLinks = document.querySelectorAll('.navBar-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navBarLinks.classList.remove('active');
  });
}); */






