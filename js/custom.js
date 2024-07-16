// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// window.addEventListener('scroll', function() {
//     var navbar = document.querySelector('.nBar');
//     if (window.scrollY > 50) {
//       navbar.classList.add('scrolled');
//     } else {
//       navbar.classList.remove('scrolled');
//     }
//   });

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
  
    const observerOptions = {
        threshold: 0.1
    };
  
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.remove('show');
                entry.target.classList.add('hidden');
            }
        });
    }, observerOptions);
  
    sections.forEach((section, index) => {
        section.classList.add('hidden');
  
        // Apply different animations to different sections
        if (index % 3 === 0) {
            section.classList.add('fade-in');
        } else if (index % 3 === 1) {
            section.classList.add('fade-in');
        } else {
            section.classList.add('zoom-in');
        }
  
        observer.observe(section);
    });
  });
//   send mail

let button = document.getElementById('ahmed');
button.addEventListener('click', (e)=>{
    e.preventDefault();
    sendMail();
})

function sendMail(){
    let parms = {
        name : document.getElementById('from_name').value,
        email : document.getElementById('email').value,
        phone : document.getElementById('phone').value,
        message : document.getElementById('message').value,


        
    }
    console.log()

    emailjs.send("service_93jxxr9","template_uklx9aw",parms).then(alert('Message Sent!'))
    
}






// const form = document.getElementById('contactForm');
// const submitBtn = document.getElementById('submitBtn');
// const requiredFields = ['name', 'email', 'phone', 'message'];

// form.addEventListener('input', function() {
//   let allFilled = requiredFields.every(id => document.getElementById(id).value.trim() !== '');
//   submitBtn.disabled = !allFilled;
// });

// form.addEventListener('submit', function(event) {
//   event.preventDefault();

//   const name = document.getElementById('name').value.trim();
//   const email = document.getElementById('email').value.trim();
//   const phone = document.getElementById('phone').value.trim();
//   const message = document.getElementById('message').value.trim();

//   if (!name || !email || !phone || !message) {
//     alert('All fields are required.');
//     return;
//   }

//   if (!validateEmail(email)) {
//     alert('Please enter a valid email address.');
//     return;
//   }

//   if (!validatePhone(phone)) {
//     alert('Please enter a valid phone number.');
//     return;
//   }

//   // If all validations pass, proceed with form submission
//   sendMail();
// });

// function validateEmail(email) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// }

// function validatePhone(phone) {
//   const re = /^[0-9]{10,15}$/;
//   return re.test(phone);
// }

// function sendMail() {
//   // Your email sending logic here
//   alert('Mail sent successfully!');
// }
