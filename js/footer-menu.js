(() => {
    const refs = {
        openArrow: document.querySelectorAll('summary'),
        icons: document.querySelectorAll('.open-list-icon')
    };

    refs.icons.forEach((icon, index) => {
        icon.addEventListener('click', (e) => toggleClass(e, refs.icons, icon, index)
        )
    })

    refs.openArrow.forEach((item, index) => {
        item.addEventListener('click', (e) => toggleClass(e, refs.icons, item, index))
    })

    function toggleClass(e, nodeList, item, index) {
        if (e.target === item) {
            nodeList.forEach((node, idx) => {
                if (idx === index) {
                    node.classList.toggle('is-list-form-shown')
                }
            })
        }
    }
})();