$(document).ready( function() {
  var $draggable = $('.tooltipcontainer').draggabilly();
  function listener() {
	  var draggie = $(this).data('draggabilly');
	  console.log( 'eventName happened', draggie.position.x, draggie.position.y );
  }
  $draggable.on( 'dragStart', function() {

  });
});