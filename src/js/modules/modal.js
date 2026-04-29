export const initModal = () => {
    const modal = document.getElementById('orderModal');
    const openBtns = document.querySelectorAll('.btn--primary'); // Все кнопки "Оставить заявку"
    const closeBtn = document.getElementById('modalClose');
    const overlay = modal.querySelector('.modal__overlay');

    const openModal = () => {
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden'; // Запрещаем скролл сайта под модалкой
    };

    const closeModal = () => {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    };

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Закрытие по клавише Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });
};