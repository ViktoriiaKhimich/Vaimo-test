(() => {
    const refs = {
        openArrow: document.querySelectorAll('summary'),
        icons: document.querySelectorAll('.open-list-icon')
    };

    refs.openArrow.forEach((item, index) => {
        item.addEventListener('click', function (e) {
            if (e.target === item) {
                refs.icons.forEach((icon, idx) => {
                    if (index === idx) {
                        icon.classList.toggle('is-list-form-shown')
                    }
                })
            }
        })
    })
})();