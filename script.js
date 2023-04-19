const btn = document.querySelector('.button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const header = document.querySelector('.header');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// animate title by scroll and add class for header

const animatedItems = document.querySelectorAll('.animated-item');
function offset(el) {

    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}

}

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    animatedItems.forEach(item => {
        const itemHeight = item.offsetHeight;
        const itemOffset = offset(item).top;
        const itemStart = 1;

        let itemPoint = window.innerHeight - itemHeight / itemStart;
        if (itemHeight > window.innerHeight) {
            itemPoint = window.innerHeight - window.innerHeight / itemStart;
        }

        if ((pageYOffset > itemOffset - itemPoint) && (pageYOffset < (itemOffset + itemHeight))) {
            setTimeout(() => {
                item.classList.add('active');
            }, 200)
        } else {
            setTimeout(() => {
                item.classList.remove('active');
            }, 200)
        }
    });
});

const burgerButton = document.querySelector('.menu__burger');
const menu = document.querySelector('.header__menu')
const body = document.querySelector('body');
const menuItemArr = document.querySelectorAll('.menu__item');

menuItemArr.forEach(item => {
    item.addEventListener('click', () => {
        if (burgerButton.classList.contains('active') && menu.classList.contains('active')) {
            burgerButton.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove("no-scroll");
        }
    })
})

burgerButton.addEventListener('click', (e)=> {
    burgerButton.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("no-scroll");
});

document.addEventListener('click', (e) => {
    if (!burgerButton.contains(e.target) && !menu.contains(e.target)) {
        burgerButton.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove("no-scroll");
    }
})