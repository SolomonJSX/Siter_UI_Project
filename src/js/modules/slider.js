export const initSlider = () => {
    const wrapper = document.getElementById('caseWrapper');
    const slides = document.querySelectorAll('.cases__slide');
    const prevBtn = document.getElementById('casePrev');
    const nextBtn = document.getElementById('caseNext');
    const pagination = document.getElementById('casePagination');

    if (!wrapper || slides.length === 0) return;

    let currentIndex = 0;

    // Создаем точки пагинации
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        if (i === 0) dot.classList.add('is-active');
        dot.addEventListener('click', () => goToSlide(i));
        pagination.appendChild(dot);
    });

    const dots = pagination.querySelectorAll('span');

    function updateSlider() {
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('is-active', i === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });
};