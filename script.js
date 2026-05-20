document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            if (email) {
                const btn = newsletterForm.querySelector('.btn');
                const originalText = btn.textContent;
                btn.textContent = '✓ Subscribed!';
                btn.style.background = 'var(--color-success)';
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    newsletterForm.reset();
                }, 2000);
            }
        });
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const originalText = btn.textContent;
            btn.textContent = '✓ Added';
            btn.classList.add('added');
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                const current = parseInt(cartCount.textContent);
                cartCount.textContent = current + 1;
                cartCount.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    cartCount.style.transform = 'scale(1)';
                }, 200);
            }
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('added');
            }, 1500);
        });
    });

    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    wishlistButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            const svg = btn.querySelector('svg');
            if (btn.classList.contains('active')) {
                svg.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    svg.style.transform = 'scale(1)';
                }, 200);
            }
        });
    });

    const quickViewButtons = document.querySelectorAll('.quick-view-btn');
    quickViewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productName = btn.closest('.product-card').querySelector('h4').textContent;
            alert(`Quick view: ${productName}\n\nThis would open a product modal in production.`);
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.category-card, .product-card, .feature-card, .testimonial-card, .step-card, .instagram-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    const bannerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('banner-visible');
                bannerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const bannerCard = document.querySelector('.banner-card');
    if (bannerCard) {
        bannerCard.style.opacity = '0';
        bannerCard.style.transform = 'scale(0.95)';
        bannerCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        bannerObserver.observe(bannerCard);
    }

    document.querySelectorAll('.animate-in').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });

    document.querySelectorAll('.banner-visible').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'scale(1)';
    });

    let lastScroll = 0;
    const heroVisual = document.querySelector('.hero-visual');
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (heroVisual && currentScroll < 600) {
            const translateY = currentScroll * 0.15;
            heroVisual.style.transform = `translateY(${translateY}px)`;
        }
        lastScroll = currentScroll;
    });
});
