(() => {
    const refs = {
        openMenuBtn: document.querySelector('[data-menu-open]'),
        closeMenuBtn: document.querySelector('[data-menu-close]'),
        menu: document.querySelector('[data-menu]'),
        openSecondMenu: document.querySelector('.women'),
        secondMenu: document.querySelector('.second-mob-menu'),
        openThirdMenu: document.querySelector('.clothing'),
        thirdMenu: document.querySelector('.third-mob-menu'),
        goBackToSecond: document.querySelector('.go-back-btn'),
    };

    console.log(refs.openSearchBtn);

    refs.openMenuBtn.addEventListener('click', toggleFirstMenu);
    refs.closeMenuBtn.addEventListener('click', closeMenu);

    refs.openSecondMenu.addEventListener('click', toggleSecondMenu)
    refs.openThirdMenu.addEventListener('click', toggleThirdMenu)

    refs.goBackToSecond.addEventListener('click', goBackToSecondMenu)

    function goBackToSecondMenu() {
        refs.thirdMenu.classList.toggle('is-menu-hidden')
    }

    function closeMenu() {
        refs.thirdMenu.classList.toggle('is-menu-hidden');
        refs.secondMenu.classList.toggle('is-menu-hidden');
        refs.menu.classList.toggle('is-menu-hidden');
    }

    function toggleFirstMenu() {
        refs.menu.classList.toggle('is-menu-hidden')
    }

    function toggleSecondMenu() {
        refs.secondMenu.classList.toggle('is-menu-hidden');
    }

    function toggleThirdMenu() {
        refs.thirdMenu.classList.toggle('is-menu-hidden');
    }
})();