export const initDropdowns = () => {
    const dropdowns = document.querySelectorAll('.js-dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            // Предотвращаем переход по ссылке, если это триггер
            // e.preventDefault(); 
            
            // Если кликнутый элемент уже активен — закрываем, иначе открываем
            const isActive = dropdown.classList.contains('is-active');
            
            // Закрываем все открытые меню перед открытием нового
            closeAllDropdowns();

            if (!isActive) {
                dropdown.classList.add('is-active');
            }
            
            e.stopPropagation(); // Чтобы клик не дошел до document
        });
    });

    // Закрытие при клике в любое место экрана
    document.addEventListener('click', () => {
        closeAllDropdowns();
    });

    function closeAllDropdowns() {
        dropdowns.forEach(d => d.classList.remove('is-active'));
    }
};