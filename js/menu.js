(() => {
    const refs = {
        openMenuBtn: document.querySelector('[data-menu-open]'),
        closeMenuBtn: document.querySelector('[data-menu-close]'),
        menu: document.querySelector('[data-menu]'),
        openSearchBtn: document.querySelector('[data-search-open]'),
        closeSearchBtn: document.querySelector('[data-search-close]'),
        search: document.querySelector('[search-menu]'),
    };

    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);

    refs.openSearchBtn.addEventListener('click', toggleSearchForm)
    refs.closeSearchBtn.addEventListener('click', toggleSearchForm)

    function toggleSearchForm() {
        refs.search.classList.toggle('is-search-form-hidden')
    }

    function toggleModal() {
        refs.menu.classList.toggle('is-menu-hidden');
    }
})();