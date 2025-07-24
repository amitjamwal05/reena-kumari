// Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');

        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Form handling
        document.querySelector('.contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect to header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(74, 144, 164, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'linear-gradient(135deg, #4a90a4, #5c9bb5)';
                header.style.backdropFilter = 'none';
            }
        });