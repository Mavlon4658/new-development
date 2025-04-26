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