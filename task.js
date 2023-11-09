window.addEventListener('scroll', () => {
    const revealElements = document.querySelectorAll('.reveal')
    for (const el of revealElements) {                
        if (isVisible(el)) {
            el.classList.add('reveal_active')
        } else {
            el.classList.remove('reveal_active')
        }
    }
})

function isVisible(element) {
    const {top, bottom} = element.getBoundingClientRect()
    if (bottom < 100 || top + 100 > window.innerHeight) {
        return false
    } else {
        return true
    }
}