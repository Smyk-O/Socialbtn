$(document).ready(function () {

    var $itembox = $('#box');
    var $button = $('#buttonopen');

    $button.click(function () {
        $itembox.toggleClass('box');
        $button.toggleClass('buttonclose');
    });
});