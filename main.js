$(function(){
    //MODAL
    $('.modal-fade').on('click', function(){
        $('.modal-wrapper').fadeOut(200);
    })
    $('.close').on('click', function(){
        $('.modal-wrapper').fadeOut(200);
    })
    $('.call-us').on('click', function(){
        $('.modal-wrapper').fadeIn(200);
        return false;
    })
    $('.order-btn').on('click', function(){
        $('.modal-wrapper').fadeIn(200);
    })
    
    //NAVIGATION CLICK
    $('nav ul li a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top-80}, 800);
            return false;
    });
    
    var lenght, current;
    //REVIEWS
    $(document).on('click', '.reviews-slider .arrow.left', function () {
        lenght = $(this).parent().find('.review-item').length;
        for (var i = 0; i < lenght; i++) {
            if ($(this).parent().find('.review-item').eq(i).hasClass('active')) current = i;
        }
        $(this).parent().find('.review-item.active').removeClass('active');

        if (current < lenght) {
            $(this).parent().find('.review-item').eq(current - 1).addClass('active');
        } else if (current = lenght) $(this).parent().find('.review-item').last().addClass('active');

        fill_slider()
    })

    $(document).on('click', '.reviews-slider .arrow.right', function () {
        //Определяем количество фоток в галерее
        lenght = $(this).parent().find('.review-item').length;
        //Узнаём номер активной фотки
        for (var i = 0; i < lenght; i++) {
            if ($(this).parent().find('.review-item').eq(i).hasClass('active')) current = i;
        }

        //При переключении удаляем класс "active"
        $(this).parent().find('.review-item.active').removeClass('active');

        //Добавляем класс "active" следующей по счёту фотке
        if (current < lenght - 1) {
            $(this).parent().find('.review-item').eq(current + 1).addClass('active');
        }
        //Если была последняя фотка в списке - ставим активной первую
        else $(this).parent().find('.review-item').first().addClass('active');
        
        fill_slider()
    })
    
    function fill_slider(){
        var name = $('.review-item.active').attr('data-name');
        var img = $('.review-item.active').attr('data-img');
        var city = $('.review-item.active').attr('data-city');
        var text = $('.review-item.active').attr('data-text');
        $('.review-head .name').text(name);
        $('.review-head .city').text(city);
        $('.review-head .photo').attr('src', img);
        $('.review-head .photo').attr('alt', name);
        $('.review-body p').text(text);
    }
    fill_slider();
})