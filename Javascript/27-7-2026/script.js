const header = document.getElementById('myHeader');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        document.body.style.background = "#1292c5ff"
    } else {
        document.body.style.background = "#4ba2c5ff"
    }
})