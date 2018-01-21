$(document).ready(function() {

    var macy = Macy({
        container: '.grid',
        trueOrder: false,
        waitForImages: false,
        margin: 16,
        columns: 3,
        breakAt: {
            940: 2,
            540: 1
        }
    });

    $('.grid').infiniteScroll({
        path: '.pagination__next',
        append: '.post',
        status: '.scroller-status',
        scrollThresold: 100
    });

});
