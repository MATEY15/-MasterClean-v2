function menuDropFunction() {
    let itemsName = 'menu-drop__link-sub';
    let $items = $('.' + itemsName);
    let $subMenu = $('.menu-drop__sub-menu');

    $items.on('click', function () {
        let $item = $(this);

        if ($item.hasClass(itemsName + '--active')) {
            $subMenu.slideUp();
            $items.removeClass(itemsName + '--active');
        } else {
            $subMenu.slideDown();
            $items.addClass(itemsName + '--active');
        }
    });
}

menuDropFunction()