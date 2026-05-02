export const initModal = () => {
    // Ищем модальное окно по техническому классу
    const modal = document.querySelector('.js-modal');
    // Ищем кнопки открытия (лучше добавить им специфичный класс)
    const openBtns = document.querySelectorAll('.js-open-modal');

    if (!modal) return;

    // Ищем элементы управления ВНУТРИ модалки
    const closeBtn = modal.querySelector('.js-modal-close');
    const overlay = modal.querySelector('.modal__overlay');

    const openModal = () => {
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    };

    // Привязываем событие ко всем кнопкам открытия
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    // Безопасная проверка наличия элементов перед добавлением слушателей
    closeBtn?.addEventListener('click', closeModal);
    overlay?.addEventListener('click', closeModal);

    // Закрытие по клавише Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });
};