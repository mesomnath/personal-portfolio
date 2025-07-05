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

    // Skills section animations
    const skillCategories = document.querySelectorAll('.skill-category');
    const skillTags = document.querySelectorAll('.skill-tag');
    
    // Add staggered animation to skill categories when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const skillsContainer = entry.target;
                const categories = skillsContainer.querySelectorAll('.skill-category');
                
                categories.forEach((category, index) => {
                    setTimeout(() => {
                        category.style.opacity = '1';
                        category.style.transform = 'translateY(0)';
                        
                        // Animate skill tags within each category
                        const tags = category.querySelectorAll('.skill-tag');
                        tags.forEach((tag, tagIndex) => {
                            setTimeout(() => {
                                tag.style.opacity = '1';
                                tag.style.transform = 'translateX(0)';
                            }, tagIndex * 100);
                        });
                    }, index * 200);
                });
                
                observer.unobserve(skillsContainer);
            }
        });
    }, observerOptions);
    
    const skillsContainer = document.querySelector('.skills-tree-container');
    if (skillsContainer) {
        // Initially hide all categories and tags
        skillCategories.forEach(category => {
            category.style.opacity = '0';
            category.style.transform = 'translateY(30px)';
            
            const tags = category.querySelectorAll('.skill-tag');
            tags.forEach(tag => {
                tag.style.opacity = '0';
                tag.style.transform = 'translateX(-20px)';
            });
        });
        
        observer.observe(skillsContainer);
    }
    
    // Add enhanced click effect to skill tags
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Scale animation
            this.style.transform = 'scale(0.95) translateX(5px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // Add mouseenter and mouseleave for smooth transitions
        tag.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});