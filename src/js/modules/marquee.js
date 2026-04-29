export const initMarquee = () => {
    const marqueeInner = document.getElementById('marquee-inner');
    
    if (!marqueeInner) return;

    // Клонируем содержимое один раз, чтобы создать эффект бесконечности
    const content = marqueeInner.innerHTML;
    marqueeInner.innerHTML = content + content;

    // Опционально: Остановка при наведении (пауза)
    marqueeInner.addEventListener('mouseenter', () => {
        marqueeInner.style.animationPlayState = 'paused';
    });

    marqueeInner.addEventListener('mouseleave', () => {
        marqueeInner.style.animationPlayState = 'running';
    });
};