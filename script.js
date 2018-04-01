$(document).ready(function () {
    $('#buttonscollapsed').click(function () {
        $(this).toggleClass('buttonclose');
        $('#box').toggleClass('box')
        $('.item').toggle(500)
        if (!$('.box').hasClass('box')) {
            $('#box').animate({
                'width': '60px'
            }, 500);
        } else {
            $('#box').animate({
                'width': '322px'
            }, 500);
        }
    });
});