var $grid = $('#block-contain').masonry({
  itemSelector: '.block',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  transitionDuration: '0.2s'
});

$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});
