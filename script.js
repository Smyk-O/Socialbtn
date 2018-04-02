$(document).ready(function () {
    var itembox = $('#box');
    $('#buttonscollapsed').click(function () {
        $(this).toggleClass('buttonclose');
        itembox.toggleClass('box')
        if (!$('#tumbler').hasClass('tumbler')) {
            if (!itembox.hasClass('box')) {
                close();
            } else {
                itembox.animate({
                    'width': '322px',
                    'height': '60px'
                }, 500);
                var rIndent = 22;
                $('.item').each(function () {
                    rIndent += 52
                    $(this).css({
                        'right': + rIndent + 'px',
                        'bottom': '20px'
                    });
                });
            }
        } else {
            if (!itembox.hasClass('box')) {
                close();
            } else {
                itembox.animate({
                    'height': '322px',
                    'width': '60px'
                }, 500);
                var rIndent = 22;
                $('.item').each(function () {
                    rIndent += 52
                    $(this).css({
                        'right': '20px',
                        'bottom': + rIndent + 'px',
                    });
                });
            }
        }
        $('.item').toggle(500)
    });

    $('#tumbler').click(function () {
        $('#tumbler').toggleClass('tumbler')
        if ($('#tumbler').hasClass('tumbler')) {
            $('#tumbler').css({
                'transform': 'rotate(90deg)'
            });
        } else {
            $('#tumbler').css({
                'transform': 'rotate(0deg)'
            });
        }
    });

    function close() {
        itembox.animate({
            'width': '60px',
            'height': '60px'
        }, 500);
    };
});