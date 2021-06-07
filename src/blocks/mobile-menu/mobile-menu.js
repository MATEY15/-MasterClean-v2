function mobileMenu() {
    let $burgerMenu = $('.burger-menu');

    let $mobileMenu = $('.mobile-menu');
    let $mobileMenuClose = $('.mobile-menu__close');

    let $mobileMenuPage = $('.mobile-menu__page');
    let $mobileMenuPageLinks = $('.menu-drop__sub-link');
    let $mobileMenuPageClose = $('.mobile-menu__page-close');
    let $mobileMenuPageBack = $('.mobile-menu__page-back');
    let currentPage = null;

    $mobileMenuPageLinks.each(function(index, item) {
        $(this).on('click', function () {
            mobileMenuPageShow(index)
            currentPage = index
            console.log(currentPage)
        })
    })

    $mobileMenuPageLinks.on('click', function () {
        let $item = $(this);
    })

    $burgerMenu.on('click', function (e) {
        e.preventDefault()
        mobileMenuShow()
    })

    $mobileMenuClose.on('click', function (e) {
        e.preventDefault()
        mobileMenuHide()
    })

    $mobileMenuPageClose.on('click', function (e) {
        e.preventDefault()
        mobileMenuHide()
        mobileMenuPageHide(currentPage)
    })

    $mobileMenuPageBack.on('click', function (e) {
        e.preventDefault()
        mobileMenuPageHide(currentPage)
    })

    function mobileMenuShow() {
        $mobileMenu.addClass('mobile-menu--active')
    }

    function mobileMenuHide() {
        $mobileMenu.removeClass('mobile-menu--active')
    }

    function mobileMenuPageShow(index) {
        $($mobileMenuPage[index]).addClass('mobile-menu__page--active')
    }

    function mobileMenuPageHide(currentPage) {
        $($mobileMenuPage[currentPage]).removeClass('mobile-menu__page--active')
    }
}

mobileMenu()