const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobMenuContainer = document.querySelector('.mob-menu-container');

// Відкрити меню
    openMenuBtn.addEventListener('click', () => {
    mobMenuContainer.classList.add('active');
    mobMenuContainer.style.display = 'block'; // Відображення меню
});

// Закрити меню при натисканні на close-menu-btn
    closeMenuBtn.addEventListener('click', () => {
    mobMenuContainer.classList.remove('active');
    setTimeout(() => {
        mobMenuContainer.style.display = 'none'; // Приховуємо після анімації
    }, 300); // Тайм-аут для завершення анімації
});