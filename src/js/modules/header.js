export const initBurger = () => {
    const burgerBtn = document.getElementById('burger-btn');
    const body = document.body;
    const wrapper = document.querySelector('.header__menu-wrapper');
    const backBtn = document.getElementById('submenu-back');
    const closeBtn = document.getElementById('menu-close');
    
    const drilldownItems = document.querySelectorAll('.js-drilldown');
    const submenuLists = document.querySelectorAll('.header__submenu-list');
    const dropdownItems = document.querySelectorAll('.header__menu-list .js-dropdown');

    if (!burgerBtn) return;

    // Вспомогательная функция для сброса всех активных состояний подменю
    const resetMenuState = () => {
        if (wrapper) wrapper.classList.remove('is-submenu-active');
        submenuLists.forEach(list => list.classList.remove('is-active'));
        dropdownItems.forEach(item => item.classList.remove('is-active'));
    };

    // 1. Логика основного бургера (открыть/закрыть всё меню)
    burgerBtn.addEventListener('click', () => {
        body.classList.toggle('menu-open');
        
        // Если меню закрывается — сбрасываем вложенность Drill-down
        if (!body.classList.contains('menu-open')) {
            resetMenuState();
        }
    });

    // 2. Логика простых выпадающих списков (аккордеон)
    dropdownItems.forEach(item => {
        const triggers = [item.querySelector('a'), item.querySelector('.icon-arrow')];

        triggers.forEach(el => {
            if (!el) return;
            el.addEventListener('click', (e) => {
                if (window.innerWidth < 1024) {
                    e.preventDefault();
                    item.classList.toggle('is-active');
                }
            });
        });
    });

    // 3. Drill-down логика: Вход в подменю
    drilldownItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            const targetList = document.getElementById(targetId);

            if (targetList && wrapper) {
                // Прячем другие подменю, если они были открыты, и активируем нужное
                submenuLists.forEach(list => list.classList.remove('is-active'));
                targetList.classList.add('is-active');
                
                // Активируем режим "drill-down" во враппере
                wrapper.classList.add('is-submenu-active');
            }
        });
    });

    // 4. Кнопка "Назад": Возврат к главному списку меню
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            if (wrapper) wrapper.classList.remove('is-submenu-active');
            submenuLists.forEach(list => list.classList.remove('is-active'));
        });
    }

    // 5. Кнопка "Закрыть" (X): Полное закрытие меню и сброс состояний
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            body.classList.remove('menu-open');
            resetMenuState();
        });
    }
};