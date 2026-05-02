export const initMarquee = () => {
    // Ищем все элементы с этим классом
    const marquees = document.querySelectorAll('.js-marquee-inner');

    if (!marquees.length) return;

    marquees.forEach(marqueeInner => {
        // Клонируем содержимое для каждого конкретного элемента
        const content = marqueeInner.innerHTML;
        marqueeInner.innerHTML = content + content;

        // Пауза при наведении для каждого элемента отдельно
        marqueeInner.addEventListener('mouseenter', () => {
            marqueeInner.style.animationPlayState = 'paused';
        });

        marqueeInner.addEventListener('mouseleave', () => {
            marqueeInner.style.animationPlayState = 'running';
        });
    });
};