'use strict';
$(document).ready(function () {

    var tab = new TabMenu(); // new는 tab이라는 변수에 TabMenu 클래스를 복사하는 역할

});

function TabMenu() {
    this.init(); //initialize
    this.initEvent();
}

TabMenu.prototype = {

    // 구조 정리
    init: function () {
        this.$tabMenu = $('.tab_menu li');
        this.$tabContents = $('.tab_contents li');
        this.oldIndex = null;
        this.currentIndex = 0;
    },

    // 시작하자마자 실행할 이벤트들
    initEvent: function () {
        var _this = this;

        this.$tabMenu.on('click', function () {
            _this.renewIndex( $(this) ); // _this를 설정하지 않으면 둘 다 클릭한 요소를 나타내게 된다.
            _this.toggleMwnu( $(this) );
            _this.toggleContent();
        });
    },

    // 번호 갱신 기능
    renewIndex: function ($this) {
        this.oldIndex = this.currentIndex;
        this.currentIndex = $this.index();
    },

    // 메뉴 변경 기능
    toggleMwnu: function ($this) {
        this.$tabMenu.not($this).removeClass('active');
        $this.addClass('active');
    },

    // 이미지  변경 기능
    toggleContent: function () {
        this.$tabContents.eq(this.oldIndex).hide();
        this.$tabContents.eq(this.currentIndex).show();
    }

};