document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing! Check your email for 15% off.');
                newsletterForm.reset();
            }
        });
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const originalText = btn.textContent;
            btn.textContent = 'Added!';
            btn.style.background = 'var(--color-primary)';
            btn.style.color = 'white';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.style.color = '';
            }, 1500);
        });
    });

    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        lastScroll = currentScroll;
    });
});
