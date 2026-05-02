import IMask from 'imask';

export const initFormLogic = () => {
    // 1. Маска телефона
    const phoneInput = document.querySelector('.js-phone-mask');
    if (phoneInput) {
        IMask(phoneInput, { mask: '+{7} (000) 000-00-00' });
    }

    // 2. Логика плавающих лейблов для обычных инпутов
    const inputItems = document.querySelectorAll('.js-input-item');
    inputItems.forEach(item => {
        const input = item.querySelector('input, textarea');

        const toggleActive = () => {
            if (input.value.trim() !== "" || document.activeElement === input) {
                item.classList.add('is-active');
            } else {
                item.classList.remove('is-active');
            }
        };

        input.addEventListener('focus', toggleActive);
        input.addEventListener('blur', toggleActive);
        input.addEventListener('input', toggleActive);
    });

    // 3. Обновленный селект
    const customSelects = document.querySelectorAll('.js-custom-select');
    customSelects.forEach(select => {
        const header = select.querySelector('.custom-select__header');
        const valueDisplay = select.querySelector('.custom-select__value');
        const options = select.querySelectorAll('.custom-select__option');
        const hiddenInput = select.querySelector('input[type="hidden"]');

        header.addEventListener('click', (e) => {
            e.stopPropagation();
            select.classList.toggle('is-active');
        });

        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const val = option.dataset.value;
                const text = option.textContent;

                valueDisplay.textContent = text;
                hiddenInput.value = val;

                select.classList.add('is-selected'); // Цвет станет черным, появится мелкий label
                select.classList.remove('is-active');
            });
        });
    });
};