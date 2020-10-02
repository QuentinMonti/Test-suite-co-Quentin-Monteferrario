(function($){

    $('#header__icon').click(function(e){
        e.preventDefault();
        $('body').toggleClass('with--sidebar');
    });

    $('#close__icon').click(function(e){
        $('body').removeClass('with--sidebar');
    })

})(jQuery);