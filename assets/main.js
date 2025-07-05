// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.remove('transparent');
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.add('transparent');
        }
    }
    
    // Initial state
    navbar.classList.add('transparent');
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
});