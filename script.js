// ============================================================
// SCRIPT.JS - ULTRA PREMIUM WITH ANIMATED BACKGROUND
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ============================================================
    // 1. PRELOADER
    // ============================================================
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 2000);
    }

    // ============================================================
    // 2. CUSTOM CURSOR (premium)
    // ============================================================
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');
    if (cursor && cursorFollower) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        });
        document.querySelectorAll('a, button, .service-card, .portfolio-item, .btn-primary, .btn-outline').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorFollower.classList.add('hover');
                cursor.style.width = '16px';
                cursor.style.height = '16px';
            });
            el.addEventListener('mouseleave', () => {
                cursorFollower.classList.remove('hover');
                cursor.style.width = '10px';
                cursor.style.height = '10px';
            });
        });
        if ('ontouchstart' in window) {
            cursor.style.display = 'none';
            cursorFollower.style.display = 'none';
        }
    }

    // ============================================================
    // 3. SCROLL PROGRESS
    // ============================================================
    const progressBar = document.querySelector('.scroll-progress-bar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            progressBar.style.width = progress + '%';
        });
    }

    // ============================================================
    // 4. NAVBAR SCROLL EFFECT
    // ============================================================
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ============================================================
    // 5. HAMBURGER MENU
    // ============================================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });
    }

    // ============================================================
    // 6. SCROLL REVEAL
    // ============================================================
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealElements.forEach(el => revealObserver.observe(el));

    // ============================================================
    // 7. COUNTER ANIMATION
    // ============================================================
    const counters = document.querySelectorAll('.stat-item .number[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                let current = 0;
                const increment = target / 50;
                const suffix = el.textContent.includes('+') ? '+' : '';
                const interval = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        el.textContent = target + suffix;
                        clearInterval(interval);
                    } else {
                        el.textContent = Math.floor(current) + suffix;
                    }
                }, 30);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObserver.observe(c));

    // ============================================================
    // 8. HERO PARTICLES (enhanced)
    // ============================================================
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = (60 + Math.random() * 40) + '%';
            particle.style.animationDuration = (10 + Math.random() * 12) + 's';
            particle.style.animationDelay = (Math.random() * 10) + 's';
            particle.style.width = (2 + Math.random() * 4) + 'px';
            particle.style.height = particle.style.width;
            particle.style.opacity = 0.1 + Math.random() * 0.3;
            particlesContainer.appendChild(particle);
        }
    }

    // ============================================================
    // 9. 3D TILT EFFECT
    // ============================================================
    document.querySelectorAll('[data-tilt]').forEach(el => {
        el.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            this.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`;
        });
        el.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
        });
    });

    // ============================================================
    // 10. HERO TILT (3D effect on hero image)
    // ============================================================
    const heroTilt = document.getElementById('heroTilt');
    if (heroTilt) {
        heroTilt.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        heroTilt.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            this.style.transition = 'transform 0.6s ease';
        });
    }

    // ============================================================
    // 11. SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ============================================================
    // 12. PARALLAX EFFECT ON HERO
    // ============================================================
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                hero.style.backgroundPositionY = scrolled * 0.2 + 'px';
            }
        }
    });

    // ============================================================
    // 13. RIPPLE EFFECT ON BUTTONS
    // ============================================================
    document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.cssText = `
                position: absolute;
                left: ${x - 10}px;
                top: ${y - 10}px;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: rippleAnim 0.7s ease-out forwards;
                pointer-events: none;
            `;
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 700);
        });
    });

    // ============================================================
    // 14. ADD RIPPLE ANIMATION KEYFRAMES
    // ============================================================
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes rippleAnim {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleSheet);

    // ============================================================
    // 15. FORM HANDLING
    // ============================================================
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
                btn.style.background = '#4CAF50';
                btn.style.borderColor = '#4CAF50';
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.style.background = '';
                    btn.style.borderColor = '';
                    form.reset();
                }, 3000);
            }, 1500);
        });
    });

    // ============================================================
    // 16. CONSOLE WELCOME (Branding)
    // ============================================================
    console.log('%c🎬 AwaisVisuals · Ultra Premium Animated', 'font-size:24px; font-weight:bold; color:#f5c84e;');
    console.log('%cStory first. Style second. Impact always.', 'font-size:16px; color:#b0b8c5;');
    console.log('%c✨ Dynamic Background · Glass UI · 3D Effects', 'font-size:14px; color:#fae38f;');

    // ============================================================
    // 17. EXTRA: Dynamic Background Orbs Mouse Tracking
    // ============================================================
    const orbs = document.querySelectorAll('.orb-bg');
    if (orbs.length > 0) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            orbs.forEach((orb, index) => {
                const speed = 15 + index * 5;
                orb.style.transform = `translate(${x * speed}px, ${y * speed}px) scale(1.05)`;
            });
        });
    }

    // ============================================================
    // 18. EXTRA: Smooth Reveal on Load
    // ============================================================
    setTimeout(() => {
        document.querySelectorAll('.hero-content, .hero-visual').forEach(el => {
            el.style.opacity = '1';
        });
    }, 300);

});