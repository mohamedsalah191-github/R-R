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

function sendMail(){
    let parms = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        phone : document.getElementById('phone').value,
        message : document.getElementById('message').value,

    }

    emailjs.send("service_93jxxr9","template_uklx9aw",parms).then(alert('Email Sent!'))
}




// var templateParams = {
//     name: 'James',
//     notes: 'Check this out!',
//   };
  
//   emailjs.send('service_93jxxr9', 'template_uklx9aw', templateParams).then(
//     (response) => {
//       console.log('SUCCESS!', response.status, response.text);
//     },
//     (error) => {
//       console.log('FAILED...', error);
//     },
//   );