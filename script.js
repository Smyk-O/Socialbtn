$(document).ready(function () {

    var $itembox = $('#box');
    var $tumbler = $('#tumbler');

    $('#buttonscollapsed').click(function () {
        $(this).toggleClass('buttonclose');
        $itembox.toggleClass('box')
        $itembox.stop();
        if (!$('#tumbler').hasClass('tumbler')) {
            if (!$itembox.hasClass('box')) {
                close();
            } else {
                open('width', 'height', 'right', 'bottom')
            }
        } else {
            if (!$itembox.hasClass('box')) {
                close();
            } else {
                open('height', 'width', 'bottom', 'right')
            }
        }
        $('.item').toggle(300)
    });

    $tumbler.click(function () {
        $tumbler.toggleClass('tumbler')
        if ($tumbler.hasClass('tumbler')) {
            $tumbler.css({
                'transform': 'rotate(90deg)'
            });
        } else {
            $tumbler.css({
                'transform': 'rotate(0deg)'
            });
        }
    });

    function close() {
        $itembox.animate({
            'width': '60px',
            'height': '60px'
        }, 500);
    };

    function open(size_1, size_2, coord_1, coord_2) {
        $itembox.animate({
            [size_1]: '322px',
            [size_2]: '60px'
        }, 500);
        var rIndent = 22;
        $('.item').each(function () {
            rIndent += 52
            $(this).css({
                [coord_1]: rIndent + 'px',
                [coord_2]: '20px'
            });
        });
    }
});