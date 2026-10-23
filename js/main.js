// ============================================================
// Breavians - Main JavaScript
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

    // ========== DOM REFERENCES ==========
    const navbar = document.getElementById('navbar');
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    const navAnchors = navLinks.querySelectorAll('a');
    const contactForm = document.getElementById('contactForm');
    const sections = document.querySelectorAll('section[id]');
    const hero = document.querySelector('.hero');

    // ========== 1. STICKY NAVBAR ==========
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ========== 2. ACTIVE NAV LINK HIGHLIGHTING ==========
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navAnchors.forEach((link) => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        },
        {
            threshold: 0.3,
            rootMargin: '-80px 0px 0px 0px',
        }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    // ========== 3. MOBILE HAMBURGER MENU ==========
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    navAnchors.forEach((link) => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // ========== 4. SMOOTH SCROLL ==========
    navAnchors.forEach((link) => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = target.offsetTop - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth',
                    });
                }
            }
        });
    });

    // Also handle smooth scroll for other anchor links on the page
    // (hero buttons, service links, footer links, scroll indicator, etc.)
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        // Skip nav links already handled above
        if (anchor.closest('#navLinks')) return;

        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = target.offsetTop - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth',
                    });
                }
            }
        });
    });

    // ========== 5. SCROLL ANIMATIONS ==========
    const animateElements = document.querySelectorAll('[data-animate]');

    const animateObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const delay = el.getAttribute('data-delay');
                    if (delay) {
                        setTimeout(() => {
                            el.classList.add('visible');
                        }, parseInt(delay, 10));
                    } else {
                        el.classList.add('visible');
                    }
                    animateObserver.unobserve(el);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px',
        }
    );

    animateElements.forEach((el) => animateObserver.observe(el));

    // ========== 6. COUNTER ANIMATION ==========
    const statNumbers = document.querySelectorAll('.stat-number');

    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'), 10);
        if (isNaN(target)) return;

        const duration = 2000; // ms
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic for a nice deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);

            el.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    const counterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    statNumbers.forEach((el) => counterObserver.observe(el));

    // ========== 7. CONTACT FORM HANDLING ==========
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thank you! We'll get back to you soon.");
            contactForm.reset();
        });
    }

    // ========== 8. PARALLAX EFFECT ON HERO SHAPES ==========
    if (hero) {
        const shapes = hero.querySelectorAll('.shape');

        document.addEventListener('mousemove', (e) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const moveX = (e.clientX - centerX) / centerX; // -1 to 1
            const moveY = (e.clientY - centerY) / centerY; // -1 to 1

            shapes.forEach((shape, index) => {
                // Each shape moves at a different speed for depth
                const speed = (index + 1) * 20;
                const x = moveX * speed;
                const y = moveY * speed;
                shape.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }

});
