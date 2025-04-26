const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const bars = document.querySelector('.header-bars');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-close');

if (menu) {
    bars.onclick = () => {
        menu.classList.add('active');
        bodyHidden();
    }

    menuClose.onclick = () => {
        menu.classList.remove('active');
        bodyVisible();
    }
}


var swiper = new Swiper(".highlightsSwiper", {
    slidesPerView: 1.3,
    spaceBetween: 15,
    navigation: {
        nextEl: ".highlights-button-next",
        prevEl: ".highlights-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2.4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});
