const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

const header = document.querySelector('.site-header');
const hero = document.querySelector('.hero');
if (header && hero) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    header.classList.add('is-compact');
                } else {
                    header.classList.remove('is-compact');
                }
            });
        },
        { rootMargin: '-80px 0px 0px 0px' }
    );
    observer.observe(hero);
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#') && targetId.length > 1) {
            const target = document.querySelector(targetId);
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
