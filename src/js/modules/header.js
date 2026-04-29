export const initBurger = () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;

    if (!burgerBtn || !mobileMenu) return;

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-open');
        
        // Блокируем скролл сайта, когда меню открыто
        if (mobileMenu.classList.contains('is-open')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    // Закрытие меню при клике на ссылку (важно для одностраничников)
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('is-active');
            mobileMenu.classList.remove('is-open');
            body.style.overflow = '';
        });
    });
};