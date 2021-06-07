function scrollTop() {
    let offset = 480
    let selectorBtn = 'to-top';
    let $buttonTop = document.querySelector("." + selectorBtn);
    let getTop = () => window.pageYOffset || document.documentElement.scrollTop

    window.addEventListener('scroll', () => {
        if (getTop() > offset) {
            $buttonTop.classList.add(selectorBtn + "--active");
        } else {
            $buttonTop.classList.remove(selectorBtn + "--active");
        }
    })

    $buttonTop.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
    // requestAnimationFrame(checkBtnTop);
}

scrollTop();