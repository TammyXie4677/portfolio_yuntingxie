document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Hide mobile menu on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
        lastScroll = currentScroll;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.querySelector('.cta-button');
    
    const email = 'tintin_xie@outlook.com';
    const subject = 'Job Opportunity Inquiry';
    const body = 'Hi Yunting,\n\nI came across your portfolio and would like to discuss a potential opportunity...';
    
    contactButton.addEventListener('click', function(e) {
        e.preventDefault();
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    });
});