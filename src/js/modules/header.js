export const initBurger = () => {
    const burgerBtn = document.getElementById('burger-btn');
    const body = document.body;
    const menuWrapper = document.querySelector('.header__menu-wrapper');
    const backBtn = document.getElementById('submenu-back');

    if (!burgerBtn) return;

    // Toggle Burger
    burgerBtn.addEventListener('click', () => {
        body.classList.toggle('menu-open');
        // Сбрасываем подменю при закрытии
        menuWrapper.classList.remove('is-submenu-active');
    });

    // Drill-down Logic
    const drilldownItems = document.querySelectorAll('.js-drilldown');
    drilldownItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            const targetMenu = document.getElementById(targetId);

            if (targetMenu) {
                document.querySelectorAll('.header__submenu-list').forEach(m => m.classList.remove('is-active'));
                targetMenu.classList.add('is-active');
                menuWrapper.classList.add('is-submenu-active');
            }
        });
    });

    // Back Button
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            menuWrapper.classList.remove('is-submenu-active');
        });
    }
};