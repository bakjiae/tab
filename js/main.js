'use strict';
$(document).ready(function () {

    var $tabMenu = $('.tab_menu li');
    var $tabContents = $('.tab_contents li');
    var oldIndex = null;
    var currentIndex = 0;

    $tabMenu.on('click', function () {
        oldIndex = currentIndex;
        currentIndex = $(this).index();

        $tabMenu.not($(this)).removeClass('active');
        $(this).addClass('active');

        $tabContents.eq(oldIndex).hide();
        $tabContents.eq(currentIndex).show();
    });

});