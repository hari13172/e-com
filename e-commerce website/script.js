const best = document.getElementById('best');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');


if (best) {
    best.addEventListener('click', () => {
        navbar.classList.add('active')

    })
}

if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active')

    })
}