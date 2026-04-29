export const initSelectDropdown = () => {
    // Ищем все элементы с этим классом
    const customSelects = document.querySelectorAll('.js-custom-select');

    customSelects.forEach(select => {
        const header = select.querySelector('.custom-select__header');
        const valueDisplay = select.querySelector('.custom-select__value');
        const options = select.querySelectorAll('.custom-select__option');
        const hiddenInput = select.querySelector('input[type="hidden"]');

        // 1. Клик по шапке — открываем/закрываем
        header.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Закрываем другие селекты, если они открыты
            document.querySelectorAll('.js-custom-select').forEach(other => {
                if (other !== select) other.classList.remove('is-active');
            });

            select.classList.toggle('is-active');
        });

        // 2. Клик по опции — выбираем значение
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                
                const val = option.dataset.value;
                const text = option.textContent;

                // Обновляем визуальную часть и скрытый инпут
                valueDisplay.textContent = text;
                if (hiddenInput) hiddenInput.value = val;

                // Убираем активный класс у всех опций и ставим текущей
                options.forEach(opt => opt.classList.remove('is-selected'));
                option.classList.add('is-selected');

                select.classList.remove('is-active');
            });
        });
    });

    // 3. Закрытие при клике в любое другое место
    document.addEventListener('click', () => {
        customSelects.forEach(select => select.classList.remove('is-active'));
    });
};