
let body = document.querySelector('body');
let preloader = document.querySelector('.preloader');

body.style.overflow = 'hidden';

function remove() {
    preloader.addEventListener('transitionend', function () {
        preloader.className = 'preloader-hidden';
    });

    preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
}

(<any>window).appBootstrap = () => {
    setTimeout(() => {
        remove();
        body.style.overflow = '';
    }, 100);
};
