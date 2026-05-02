export const initSelectDropdown = () => {
    // Ищем все селекты по новому классу
    const selects = document.querySelectorAll('.js-select');

    selects.forEach(select => {
        const header = select.querySelector('.js-select-header');
        const options = select.querySelectorAll('.js-select-option');
        const valueDisplay = select.querySelector('.js-select-value');
        const hiddenInput = select.querySelector('.js-select-input');

        // 1. Открытие / Закрытие
        header.addEventListener('click', (e) => {
            e.stopPropagation();

            // Закрываем все остальные селекты на странице
            selects.forEach(s => {
                if (s !== select) s.classList.remove('is-open');
            });

            // Переключаем класс is-open у текущего
            select.classList.toggle('is-open');
        });

        // 2. Выбор пункта меню
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();

                const value = option.getAttribute('data-value');
                const text = option.textContent;

                // Меняем текст и скрытое значение
                valueDisplay.textContent = text;
                if (hiddenInput) hiddenInput.value = value;

                // Закрываем список и меняем стиль на "выбрано"
                select.classList.remove('is-open');
                select.classList.add('is-selected');
            });
        });
    });

    // 3. Закрытие при клике мимо
    document.addEventListener('click', () => {
        selects.forEach(select => select.classList.remove('is-open'));
    });
};