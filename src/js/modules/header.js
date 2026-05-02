export const initBurger = () => {
    // Ищем основные элементы через классы
    const burgerBtn = document.querySelector('.js-burger');
    const menuWrapper = document.querySelector('.js-menu-wrapper');
    const backBtn = document.querySelector('.js-back-btn');
    const body = document.body;

    if (!burgerBtn || !menuWrapper) return;

    // Переключение бургера
    burgerBtn.addEventListener('click', () => {
        body.classList.toggle('menu-open');
        // Сбрасываем подменю при закрытии основного меню
        menuWrapper.classList.remove('is-submenu-active');
    });

    // Логика Drill-down (вложенное меню)
    const drilldownItems = document.querySelectorAll('.js-drilldown');

    drilldownItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetName = item.getAttribute('data-target');
            // Ищем подменю, у которого data-menu совпадает с data-target кнопки
            const targetMenu = menuWrapper.querySelector(`.js-submenu[data-menu="${targetName}"]`);

            if (targetMenu) {
                // Скрываем все активные подменю перед открытием нужного
                menuWrapper.querySelectorAll('.js-submenu').forEach(m => m.classList.remove('is-active'));

                targetMenu.classList.add('is-active');
                menuWrapper.classList.add('is-submenu-active');
            }
        });
    });

    // Кнопка "Назад" в мобильном меню
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            // 1. Убираем флаг активного подменю у всей обертки
            menuWrapper.classList.remove('is-submenu-active');

            // 2. КРИТИЧНО: Находим все списки подменю и скрываем их
            const activeSubmenus = menuWrapper.querySelectorAll('.js-submenu.is-active');
            activeSubmenus.forEach(submenu => {
                submenu.classList.remove('is-active');
            });
        });
    }

    // Кнопка закрытия (если есть)
    const closeBtn = document.querySelector('.js-close-menu');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            body.classList.remove('menu-open');
            menuWrapper.classList.remove('is-submenu-active');
        });
    }
};