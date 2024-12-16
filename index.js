// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Scroll-to-top button
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollToTopButton.classList.remove('hidden');
    } else {
        scrollToTopButton.classList.add('hidden');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Testimonials slider
const testimonialsContainer = document.getElementById('testimonials-container');
const testimonialsSlider = document.getElementById('testimonials-slider');
const prevButton = document.getElementById('prev-testimonial');
const nextButton = document.getElementById('next-testimonial');
const testimonials = document.querySelectorAll('.testimonial');

let currentIndex = 0;

function updateSliderPosition() {
    testimonialsSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateSliderPosition();
}

function showPrevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateSliderPosition();
}

nextButton.addEventListener('click', showNextTestimonial);
prevButton.addEventListener('click', showPrevTestimonial);

// Optional: Auto-play the testimonials
setInterval(showNextTestimonial, 5000);

// Update slider width on window resize
function updateSliderWidth() {
    const containerWidth = testimonialsContainer.offsetWidth;
    testimonialsSlider.style.width = `${containerWidth * testimonials.length}px`;
    testimonials.forEach(testimonial => {
        testimonial.style.width = `${containerWidth}px`;
    });
    updateSliderPosition();
}

window.addEventListener('resize', updateSliderWidth);
updateSliderWidth();

