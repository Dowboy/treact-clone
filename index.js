function carouselError() {
    alert('Carousel feature not implemented');
}

const accordionHeaders = document.querySelectorAll(".accordion__header--text");

accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener("click", event => {
        accordionHeader.classList.toggle("active")
    })
})

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}