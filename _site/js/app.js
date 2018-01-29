$(document).ready(function() {
    $('.grid').infiniteScroll({
      path: '.pagination__next',
      append: '.grid',
      status: '.scroller-status',
      scrollThresold: 1000
    });

});
