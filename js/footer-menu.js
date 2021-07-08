(() => {
    const refs = {
        openArrow: document.querySelectorAll('.open-list-icon'),
    };

    refs.openArrow.forEach(item => item.addEventListener('click', function () {
        item.classList.toggle('is-list-form-shown')
    }))
})();