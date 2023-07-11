// ======================================== NAVBAR  ========================================
const hamburgerCheckbox = document.querySelector('.hambuger__checkbox');
const sideMenu = document.querySelector('.side__menu-bar');
const closeSideMenu = document.querySelector('.close__menu-bar-btn');
const navMenuLink = document.querySelectorAll('.navmenu__link');

hamburgerCheckbox.addEventListener('click', function (e) {
  sideMenu.classList = 'side__menu-bar show';
});

closeSideMenu.addEventListener('click', closeSideMenuFunction);

navMenuLink.forEach(function (element) {
  element.addEventListener('click', closeSideMenuFunction);
});

function closeSideMenuFunction(e) {
  sideMenu.classList = 'side__menu-bar hide';
}

// ======================================== ABOUT SECTION ========================================
var swiper = new Swiper('.about__swiper', {
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

// ======================================== SERVICES SECTION ========================================
const openModalBtn = document.querySelectorAll('.viewMore-btn');
const modalCloseBtn = document.querySelectorAll('.close__btn');
const modalBox = document.querySelectorAll('.modal__box-services');

openModalBtn.forEach(function (element, index) {
  element.addEventListener('click', function () {
    modalBox[index].style.visibility = 'visible';
    modalBox[index].style.opacity = 1;
  });
});

modalCloseBtn.forEach(function (element) {
  element.addEventListener('click', function () {
    modalBox.forEach(function (e) {
      e.style.visibility = 'hidden';
      e.style.opacity = 0;
    });
  });
});

// ======================================== CHANGE THEME BTN SECTION ========================================

const changeThemeBtn = document.querySelector('.change__theme-btn');
const changeThemeIcon = document.querySelector('.change_theme-icon');

const selectedTheme = localStorage.getItem('selected-theme');

if (selectedTheme) {
  document.body.setAttribute('data-theme', selectedTheme);
}

changeThemeBtn.addEventListener('click', function () {
  const bodyTheme = document.body.getAttribute('data-theme');

  if (bodyTheme.includes('light')) {
    document.body.setAttribute('data-theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
  }
  localStorage.setItem('selected-theme', document.body.getAttribute('data-theme'));
});

// ======================================== TESTIMONIAL SECTION ========================================
var swiper = new Swiper('.testimonial__swiper', {
  grabCursor: true,
});

// ======================================== NAVBAR ACTIVATED LINK ========================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__links a[href*=${sectionId}]`).classList.add('active-link');
    } else {
      document.querySelector(`.nav__links a[href*=${sectionId}]`).classList.remove('active-link');
    }
  });
}

// Attach an event listener to the "Send Message" button
document.getElementById('sendButton').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the user's details from the input fields
  const name = document.getElementById('getName').value;
  const email = document.getElementById('getEmail').value;
  const project = document.getElementById('getProject').value;
  const message = document.getElementById('getMessage').value;

  // Create an object with the user's details
  const data = {
    name,
    email,
    project,
    message,
  };

  // Send the data using EmailJS
  sendEmail(data);
});

// Function to send the email data using EmailJS
function sendEmail(data) {
  console.log(data)
  // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your EmailJS credentials
  emailjs.send('godswill__mails', 'tenplate_84tafkt', data, 'SEKI_clyAmYUyJozFzJed').then(
    function (response) {
      // Email sent successfully
      alert('Email sent successfully!');
    },
    function (error) {
      // Error occurred while sending the email
      console.error('Error:', error);
      alert('An error occurred while sending the email. Please try again later.');
    }
  );
}
