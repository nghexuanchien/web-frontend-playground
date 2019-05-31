$.fn.isVisible = function(viewPort) {
    var elementTop = $(this).position().top;
    var elementBottom = elementTop + $(this).outerHeight(true);

    // var viewportTop = $(viewPort).scrollTop();
    // var viewportBottom = viewportTop + $(viewPort).innerHeight();
    // console.log('elementTop: '+ elementTop+ ', elementBottom: '+elementBottom + ', viewPortTop: '+viewportTop + ', viewPortBottom: '+viewportBottom)
    // return elementBottom > viewportTop && elementTop < viewportBottom;
    // return elementBottom <= viewportBottom && elementTop >= viewportTop;
    var viewPortHeight = $(viewPort).innerHeight();
    return elementBottom <= viewPortHeight && elementTop >= 0;
};

function colorItems(viewPort) {
    $('.item').each(function() {
        var $item = $(this);
        if ($item.isVisible(viewPort)) {
            $item.addClass('green');
            $item.removeClass('red');
        } else {
            $item.addClass('red');
            $item.removeClass('green');
        }
    });
}

$( document ).ready(function() {
    var viewPort = '.viewport';
    colorItems(viewPort);

    $(viewPort).on('resize scroll', function () {
        colorItems(viewPort);
    });
});