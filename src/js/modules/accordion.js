export const initAccordion = () => {
    const items = document.querySelectorAll('.accordion-item');

    items.forEach(item => {
        const trigger = item.querySelector('.accordion-item__trigger');
        const content = item.querySelector('.accordion-item__content');

        trigger.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-active');

            // Закрываем все остальные (если нужен режим "только один открытый")
            items.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('is-active');
                    otherItem.querySelector('.accordion-item__content').style.maxHeight = null;
                }
            });

            // Переключаем текущий
            if (isOpen) {
                item.classList.remove('is-active');
                content.style.maxHeight = null;
            } else {
                item.classList.add('is-active');
                // Устанавливаем высоту равную высоте контента внутри
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
};