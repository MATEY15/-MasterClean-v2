function headerHeight() {
    let headerHeight = document.querySelector('.header').offsetHeight,
        body = document.querySelector('body');
    body.style.paddingTop = headerHeight + "px";
}
headerHeight();

$(window).on('resize', function(){
    headerHeight();
});

headerScroll();

function headerScroll() {
    let $topHeader = $('.header');
    let scrollClass = 'header--scroll';

    checkHeaderPosition();

    function checkHeaderPosition() {

        if ($(window).scrollTop() > 0) {
            $topHeader.addClass(scrollClass);
            // headerHeight();
        } else {
            $topHeader.removeClass(scrollClass);
            // headerHeight();
        }

        requestAnimationFrame(checkHeaderPosition);
    }
}

let menuOpen = function(){
    $('.main-menu__drop-burger').click(function(e){ // Клик по элементу
        e.preventDefault();
        if($(this).hasClass('15')) {

        }
        $('.main-menu__drop-burger').toggleClass('main-menu__drop-burger--active')
        $('.main-menu__drop').toggleClass('main-menu__drop--active'); // Скрытый элемент
    });
    // $(document).mouseup(function (e) {
    //     let container = $(".main-menu__drop"); // Родительский контейнер элемента где клик
    //     if (container.has(e.target).length === 0){
    //         $('.main-menu__drop-burger').removeClass('main-menu__drop-burger--active')
    //         $('.main-menu__drop').removeClass('main-menu__drop--active');
    //     }
    // });
};
menuOpen()


// document.addEventListener("click", ()=>{
//     $('.main-menu__drop-burger').toggleClass('main-menu__drop-burger--active')
// })

// function headerHeight() {
//     let headerHeight = document.querySelector('.header').offsetHeight,
//         body = document.querySelector('body');
//     body.style.paddingTop = headerHeight + "px";
// }
// headerHeight();


// let catalogMenuName = 'headerMenu';
//
// window.catalogMenu = new menu(
//     {
//         name: catalogMenuName,
//         button: '.header__mobile-button, .header__bottom-mobile-header-button',
//         buttonActiveClass: 'active',
//         menuBlock: '.header__bottom-wrapper',
//         menuActiveClass: 'active',
//     }
// );